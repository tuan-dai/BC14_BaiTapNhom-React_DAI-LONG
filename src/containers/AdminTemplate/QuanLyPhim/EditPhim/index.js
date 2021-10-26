import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { useFormik } from 'formik';
import moment from 'moment';
import { capNhatPhimUpload } from '../ThemPhim/modules/action';
import { layThongTinPhim } from '../ThemPhim/modules/action'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';


import {
    Form,
    Input,
    Radio,
    DatePicker,
    InputNumber,

    Switch,
} from 'antd';

const EditFilm = (props) => {
    const [componentSize, setComponentSize] = useState('default');
    const thongtinphim = useSelector(state => state.AddFilm_Reducer.thongtinphim)

    const dispatch = useDispatch()

    useEffect(() => {
        let { id } = props.match.params
        dispatch(layThongTinPhim(id))
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            maPhim: thongtinphim.maPhim,
            tenPhim: thongtinphim.tenPhim,
            trailer: thongtinphim.trailer,
            moTa: thongtinphim.moTa,
            maNhom: thongtinphim.maNhom,
            ngayKhoiChieu: thongtinphim.ngayKhoiChieu,
            sapChieu: thongtinphim.sapChieu,
            dangChieu: thongtinphim.dangChieu,
            hot: thongtinphim.hot,
            danhGia: thongtinphim.danhGia,
            hinhAnh: null,
        },
        onSubmit: (values) => {
            let formData = new FormData()
            console.log('values', values)
            values.maNhom = 'GP03'
            //Tao doi tuong formData           
            for (let key in values) {
                if (key !== 'hinhAnh') {
                    formData.append(key, values[key])
                } else {
                    if (values.hinhAnh !== null) {
                        formData.append('File', values.hinhAnh, values.name)
                    }
                }
            }
            dispatch(capNhatPhimUpload(formData))
        }
    })

    const handleChangeDayPicker = (value) => {
        let ngayKhoiChieu = moment(value);
        formik.setFieldValue('ngayKhoiChieu', ngayKhoiChieu)
    }

    const handleChangeSwitch = (name) => {
        return (value) => {
            formik.setFieldValue(name, value)
        }
    }

    const handleChangeInputNumber = (name) => {
        return (value) => {
            formik.setFieldValue(name, value)
        }
    }

    const handleChangeFile = (e) => {
        let file = e.target.files[0]
        console.log('file', file)
        formik.setFieldValue('hinhAnh', file)
    }
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    return (
        <div className="container">
            <Form
                onSubmitCapture={formik.handleSubmit}
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                initialValues={{
                    size: componentSize,
                }}
                onValuesChange={onFormLayoutChange}
                size={componentSize}
            >
                <h3 style={{ marginLeft: '7rem', marginBottom: '2rem' }}>Edit phim</h3>
                <Form.Item label="Form Size" name="size">
                    <Radio.Group>
                        <Radio.Button value="small">Small</Radio.Button>
                        <Radio.Button value="default">Default</Radio.Button>
                        <Radio.Button value="large">Large</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="Tên phim:">
                    <Input name="tenPhim" onChange={formik.handleChange} value={formik.values.tenPhim} />
                </Form.Item>
                <Form.Item label="Trailer:">
                    <Input name="trailer" onChange={formik.handleChange} value={formik.values.trailer} />
                </Form.Item>
                <Form.Item label="Mô tả:">
                    <Input name="moTa" onChange={formik.handleChange} value={formik.values.moTa} />
                </Form.Item>

                <Form.Item label="Ngày khởi chiếu">
                    <DatePicker format={'DD/MM/YYYY'} onChange={handleChangeDayPicker} value={moment(formik.values.ngayKhoiChieu)} />
                </Form.Item>
                <Form.Item label="Đang chiếu" valuePropName="checked">
                    <Switch onChange={handleChangeSwitch('dangChieu')} checked={formik.values.dangChieu} />
                </Form.Item>
                <Form.Item label="Sắp chiếu" valuePropName="checked">
                    <Switch onChange={handleChangeSwitch('sapChieu')} checked={formik.values.sapChieu} />
                </Form.Item>
                <Form.Item label="Hot" valuePropName="checked">
                    <Switch onChange={handleChangeSwitch('hot')} checked={formik.values.hot} />
                </Form.Item>
                <Form.Item label="Số sao">
                    <InputNumber onChange={handleChangeInputNumber('danhGia')} min={1} max={10} value={formik.values.danhGia} />
                </Form.Item>
                <Form.Item label="Hình ảnh">
                    <input type="file" onChange={handleChangeFile} />
                </Form.Item>

                <Form.Item label="Tác vụ">
                    <button type="submit" className="btn btn-success">Cập nhật</button>
                </Form.Item>
            </Form>
        </div>
    );
};
export default EditFilm