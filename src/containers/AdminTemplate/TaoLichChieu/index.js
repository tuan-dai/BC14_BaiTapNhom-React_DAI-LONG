import React, { useEffect, useState } from 'react'
import { Form, DatePicker, InputNumber, Select } from 'antd';
import api from '../../../utils/apiUtils';
import { useFormik } from 'formik';
import moment from 'moment';

export default function ShowTime(props) {
    const formik = useFormik({
        initialValues: {
            maPhim: props.match.params.id,
            ngayChieuGioChieu: '',
            maRap: '',
            giaVe: '',
        },
        onSubmit: async (values) => {
            try {
                const result = await api.post('QuanLyDatVe/TaoLichChieu', values)
                alert(result.data.content)
            } catch (error) {

            }
        }
    })


    const [state, setState] = useState({
        heThongRap: [],
        cumRap: [],
    })

    useEffect(() => {
        async function fetchData() {
            try {
                let result = await api.get('QuanLyRap/LayThongTinHeThongRap')
                setState({
                    ...state,
                    heThongRap: result.data.content
                })
            }
            catch (error) {console.log(error)}
        }
        fetchData()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps
    const convertHeThongRap = () => {
        return state.heThongRap?.map((htr) => {
            return { name: htr.tenHeThongRap, value: htr.maHeThongRap }
        })
    }
    const convertCumRap = () => {
        return state.cumRap?.map((htr) => {
            return { name: htr.tenCumRap, value: htr.maCumRap }
        })
    }


    const handleChangeHeThongRap = async (value) => {
        try {
            let result = await api.get(`QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${value}`)
            setState({
                ...state,
                cumRap: result.data.content
            })
        }
        catch (error) {

        }

    }

    const handleChangeCumRap = (value) => {
        formik.setFieldValue('maRap', value)
    }
    const handleChangeDate = (values) => {
        formik.setFieldValue('ngayChieuGioChieu', moment(values).format('DD/MM/YYYY hh:mm:ss'))
    }
    const handleChangeInputNumber = (value) => {
        formik.setFieldValue('giaVe', value)
    }

    let film = {}
    if (localStorage.getItem('Film')) {
        film = JSON.parse(localStorage.getItem('Film'))
    }

    return (
        <div className="container">
            <Form
                onSubmitCapture={formik.handleSubmit}
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
            >
                <h3 className="mb-5">T???o l???ch chi???u - {props.match.params.tenphim}</h3>
                <img src={film.hinhAnh} alt="" width={200} />
                <Form.Item label="H??? th???ng r???p">
                    <Select options={convertHeThongRap()} onChange={handleChangeHeThongRap} placeholder="Ch???n h??? th???ng r???p"
                    />
                </Form.Item>

                <Form.Item label="C???m r???p">
                    <Select options={convertCumRap()} onChange={handleChangeCumRap} placeholder="Ch???n c???m r???p"
                    />
                </Form.Item>

                <Form.Item label="Ng??y chi???u gi??? chi???u">
                    <DatePicker format='DD/MM/YYYY hh:mm:ss' showTime onChange={handleChangeDate} placeholder="Select date"
                    />
                </Form.Item>

                <Form.Item label="Gi?? v??">
                    <InputNumber onChange={handleChangeInputNumber}
                    />
                </Form.Item>

                <Form.Item label="Ch???c n??ng">
                    <button className="btn btn-success">T???o l???ch chi???u</button>
                </Form.Item>
            </Form>
        </div >
    )
}
