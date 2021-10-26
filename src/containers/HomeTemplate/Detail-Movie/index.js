import React, { useEffect, Fragment, useState } from 'react'
<<<<<<< HEAD
import { Tabs } from 'antd';
=======
import { Tabs} from 'antd';
>>>>>>> cb53865a19db0d6c538f5bf1aa9a1f9a2a3bb30a
import { useSelector, useDispatch } from 'react-redux';
import { get_DetailMovie } from './modules/action';
import { NavLink } from 'react-router-dom';
import moment from 'moment';


import './css/circle.css'
import { CustomCard } from '@tsamantanis/react-glassmorphism'
import '@tsamantanis/react-glassmorphism/dist/index.css'
import StarRateIcon from '@mui/icons-material/StarRate';

const { TabPane } = Tabs;
export default function Detail_Movie(props) {
    const [state, setState] = useState({
        tabPosition: 'left',
    })
    const changeTabPosition = (e) => {
        setState({ tabPosition: e.target.value })
    }

    const maPhim = props.match.params.id

    const data = useSelector(state => state.DetailMovie_Reducer.data)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(get_DetailMovie(maPhim))
    }, [])

    const ngayChieu = moment(data?.ngayKhoiChieu).format('DD.MM.YYYY')
    console.log(data)
    return (


        <div style={{ backgroundImage: `url(${data?.hinhAnh})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <CustomCard
                style={{ minHeight: '100vh' }}
                effectColor="#ffff"
                color="#ffff"
                blur={20}
                margin={0}
            >
                <div className="container">
                    <div className="row align-items-center" style={{ marginTop: '8rem' }}>
                        <div className="col-md-6 d-flex align-items-center">
                            <img className="img-fluid w-50" src={data?.hinhAnh} alt="" />
                            <div className="ml-4">
                                <h5 className="text-light">{ngayChieu}</h5>
                                <h3 className="text-light">{data?.tenPhim}</h3>
                                <p className="text-light" style={{ overflow: 'hidden' }}>{data?.moTa}</p>
                            </div>
                        </div>

                        <div className="col-md-3 d-flex flex-column align-items-center">
                            <div className={`c100 p${data?.danhGia * 10}`}>
                                <span>{data?.danhGia}</span>
                                <div className="slice">
                                    <div className="bar" />
                                    <div className="fill" />
                                </div>
                            </div>


                            <div className="text-center">
                                <StarRateIcon fontSize="large" className="text-warning" /><StarRateIcon fontSize="large" className="text-warning" /><StarRateIcon fontSize="large" className="text-warning" />
                                <p className="mt-2">300 người đánh giá</p>
                            </div>
                        </div>
                    </div>

                    {/* LICH CHIEU */}

                    <div className="mt-5 p-4 bg-light">
                        <Tabs tabPosition={state.tabPosition}>
                            {data?.heThongRapChieu?.map((htr, index) => {
                                return <TabPane tab={<img style={{ width: '5rem' }} src={htr.logo} alt="" />} key={index}>

                                    {htr.cumRapChieu?.map((cumRap, index) => {
                                        return <Fragment key={index}>
                                            <div className="mb-5">
                                                <div className="d-flex align-items-center">
                                                    <img style={{ width: '7rem' }} src={cumRap.hinhAnh} alt="" />
                                                    <div className="ml-3">
                                                        <h5 className="font-weight-bold">{cumRap.tenCumRap}</h5>
                                                        <p>{cumRap.diaChi}</p>
                                                        <div className="d-flex">
                                                            {cumRap.lichChieuPhim?.map((lichChieu, index) => {
<<<<<<< HEAD
                                                                return <NavLink to={`/checkout/${lichChieu.maLichChieu}`} className="mr-2" key={index} style={{ textDecoration: 'none' }}>
=======
                                                                return <NavLink to={`/checkout/${lichChieu.maLichChieu}`} className="mr-2" key={index} style={{textDecoration: 'none'}}>
>>>>>>> cb53865a19db0d6c538f5bf1aa9a1f9a2a3bb30a
                                                                    {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                                                </NavLink>
                                                            })}

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Fragment>
                                    })}

                                </TabPane>
                            })}
                        </Tabs>
                    </div>
                </div>

            </CustomCard>

        </div>

    )
}
