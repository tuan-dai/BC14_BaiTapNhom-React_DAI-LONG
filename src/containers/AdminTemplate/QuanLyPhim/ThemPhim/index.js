import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { useFormik } from 'formik';
import moment from 'moment';
import { themPhimUploadHinh } from './modules/action';
import { useDispatch } from 'react-redux';


import {
    Form,
    Input,
    Radio,
    DatePicker,
    InputNumber,
    Switch,
} from 'antd';

const AddFilm = () => {
    const [componentSize, setComponentSize] = useState('default');
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            tenPhim: '',
            trailer: '',
            moTa: '',
            ngayKhoiChieu: '',
            sapChieu: false,
            dangChieu: false,
            hot: false,
            danhGia: 0,
            hinhAnh: {},
        },
        onSubmit: (values) => {
            let formData = new FormData()
            console.log('values', values)
            let numberNhom = Math.floor(Math.random() * 8)
            values.maNhom = `GP0${numberNhom}`
            //Tao doi tuong formData           
            for (let key in values) {
                if (key !== 'hinhAnh') {
                    formData.append(key, values[key])
                } else {
                    formData.append('File', values.hinhAnh, values.name)
                }
            }
            dispatch(themPhimUploadHinh(formData))
        }
    })

    const handleChangeDayPicker = (value) => {
        let ngayKhoiChieu = moment(value).format('DD/MM/YYYY')
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
                <h3 style={{ marginLeft: '7rem', marginBottom: '2rem' }}>Th??m m???i phim</h3>
                <Form.Item label="Form Size" name="size">
                    <Radio.Group>
                        <Radio.Button value="small">Small</Radio.Button>
                        <Radio.Button value="default">Default</Radio.Button>
                        <Radio.Button value="large">Large</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="T??n phim:">
                    <Input name="tenPhim" onChange={formik.handleChange} />
                </Form.Item>
                <Form.Item label="Trailer:">
                    <Input name="trailer" onChange={formik.handleChange} />
                </Form.Item>
                <Form.Item label="M?? t???:">
                    <Input name="moTa" onChange={formik.handleChange} />
                </Form.Item>

                <Form.Item label="Ng??y kh???i chi???u">
                    <DatePicker format={'DD/MM/YYYY'} onChange={handleChangeDayPicker} />
                </Form.Item>
                <Form.Item label="??ang chi???u" valuePropName="checked">
                    <Switch onChange={handleChangeSwitch('dangChieu')} />
                </Form.Item>
                <Form.Item label="S???p chi???u" valuePropName="checked">
                    <Switch onChange={handleChangeSwitch('sapChieu')} />
                </Form.Item>
                <Form.Item label="Hot" valuePropName="checked">
                    <Switch onChange={handleChangeSwitch('hot')} />
                </Form.Item>
                <Form.Item label="S??? sao">
                    <InputNumber onChange={handleChangeInputNumber('danhGia')} min={1} max={10} />
                </Form.Item>
                <Form.Item label="H??nh ???nh">
                    <input type="file" onChange={handleChangeFile} />
                </Form.Item>

                <Form.Item label="T??c v???">
                    <button type="submit" className="btn btn-success">Th??m phim</button>
                </Form.Item>
            </Form>
        </div>
    );
};
export default AddFilm