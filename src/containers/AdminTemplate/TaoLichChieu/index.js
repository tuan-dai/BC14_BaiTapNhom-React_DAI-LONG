import React, { useEffect, useState } from 'react'
<<<<<<< HEAD
import { Form, DatePicker, InputNumber, Select } from 'antd';
=======
import { Form,  DatePicker, InputNumber, Select } from 'antd';
>>>>>>> cb53865a19db0d6c538f5bf1aa9a1f9a2a3bb30a
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

    useEffect(async () => {
        try {
            let result = await api.get('QuanLyRap/LayThongTinHeThongRap')
            setState({
                ...state,
                heThongRap: result.data.content
            })
        }
        catch (error) {

        }
    }, [])
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
                <h3 className="mb-5">Tạo lịch chiếu - {props.match.params.tenphim}</h3>
                <img src={film.hinhAnh} alt="" width={200} />
                <Form.Item label="Hệ thống rạp">
                    <Select options={convertHeThongRap()} onChange={handleChangeHeThongRap} placeholder="Chọn hệ thống rạp"
                    />
                </Form.Item>

                <Form.Item label="Cụm rạp">
                    <Select options={convertCumRap()} onChange={handleChangeCumRap} placeholder="Chọn cụm rạp"
                    />
                </Form.Item>

                <Form.Item label="Ngày chiếu giờ chiếu">
                    <DatePicker format='DD/MM/YYYY hh:mm:ss' showTime onChange={handleChangeDate} placeholder="Select date"
                    />
                </Form.Item>

                <Form.Item label="Giá vé">
                    <InputNumber onChange={handleChangeInputNumber}
                    />
                </Form.Item>

                <Form.Item label="Chức năng">
                    <button className="btn btn-success">Tạo lịch chiếu</button>
                </Form.Item>
            </Form>
        </div >
    )
}
