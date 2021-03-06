import React, { Fragment, useEffect } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import { useSelector, useDispatch } from 'react-redux'
import { layChiTietPhoneVe, datVe } from './modules/action'
import { DATGHE } from './modules/constant';
import './checkout.css'


export default function CheckOut(props) {
    const id = props.match.params.id

    const chiTietPhongVe = useSelector(state => state.QuanLyDatVe_Reducer.chiTietPhongVe)
    const danhSachGheDangDat = useSelector(state => state.QuanLyDatVe_Reducer.danhSachGheDangDat)
    const { thongTinPhim, danhSachGhe } = chiTietPhongVe

    const tongTien = danhSachGheDangDat.reduce((total, ghe) => total += ghe.giaVe, 0)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(layChiTietPhoneVe(id))
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const renderListSeat = () => {
        return danhSachGhe?.map((ghe, index) => {
            let classLoaiGhe = ghe.loaiGhe === "Vip" ? "gheVip" : ""
            let classDaDat = ghe.daDat ? "gheDaDat" : ""
            let classGheDangDat = ""

            let indexGheDD = danhSachGheDangDat.findIndex(item => item.maGhe === ghe.maGhe)
            if (indexGheDD !== -1) {
                classGheDangDat = "gheDangDat"
            }

            return <Fragment key={ghe.maGhe}>
                <button onClick={() => {
                    dispatch({
                        type: DATGHE,
                        payload: ghe,
                    })
                }}
                    disabled={ghe.daDat} className={`ghe ${classLoaiGhe} ${classGheDangDat}  ${classDaDat} }`}>
                    {ghe.daDat ? <CloseIcon /> : ghe.stt}
                </button>
            </Fragment>
        })
    }

    return (
        <div className="container-fluid">
            <div className="row">
                {/* VI TRI GHE */}
                <div className="col-md-9">
                    <h4 className="text-center text-light font-weight-bold p-3 mb-4 bg-warning">M??N H??NH</h4>
                    {renderListSeat()}

                    <div className=" mt-4 d-flex justify-content-center">
                        <div className="mx-4 d-flex flex-column align-items-center">
                            <h5 className="font-weight-bold">Gh??? ch??a ?????t</h5>
                            <CheckIcon fontSize="large" className="ghe" />
                        </div>
                        <div className="mx-4 d-flex flex-column align-items-center">
                            <h5 className="font-weight-bold">Gh??? ??ang ?????t</h5>
                            <CheckIcon fontSize="large" className="ghe gheDangDat text-light" />
                        </div>
                        <div className="mx-4 d-flex flex-column align-items-center">
                            <h5 className="font-weight-bold">Gh??? ???? ?????t</h5>
                            <CheckIcon fontSize="large" className="ghe gheDaDat" />
                        </div>
                        <div className="mx-4 d-flex flex-column align-items-center">
                            <h5 className="font-weight-bold">Gh??? VIP</h5>
                            <CheckIcon fontSize="large" className="ghe gheVip" />
                        </div>
                    </div>

                </div>

                {/* DAT VE */}
                <div className="col-md-3 py-4 px-4" style={{ boxShadow: '1px 1px 5px gray' }}>
                    <h3 className="text-center font-weight-bold mb-4 text-danger">{tongTien}</h3>
                    <h5 className="font-weight-bold">{thongTinPhim?.tenPhim}</h5>
                    <p>{`?????a ??i???m: ${thongTinPhim?.diaChi} - ${thongTinPhim?.tenRap}`}</p>
                    <p>{`Ng??y chi???u: ${thongTinPhim?.ngayChieu} - ${thongTinPhim?.gioChieu}`}</p>
                    <hr />
                    <div>
                        <span className="text-danger font-weight-bold mr-2">Gh???</span>
                        {danhSachGheDangDat.map((gheDD) => {
                            return <span key={gheDD.maGhe} className="text-danger font-weight-bold mr-2">{gheDD.stt}</span>
                        })}

                    </div>
                    <hr />
                    <label style={{ color: 'gray' }}>Email</label>
                    <p>tranquangdung@gmail.com</p>
                    <hr />
                    <label style={{ color: 'gray' }}>Phone</label>
                    <p>0903023054</p>
                    <hr />
                    <label style={{ color: 'gray' }}>M?? gi???m gi??</label>
                    <p>Nh???p t???i ????y...</p>
                    <hr />
                    <p>H??nh th???c</p>
                    <p className="text-danger pb-5">Vui l??ng ch???n gh??? ????? hi???n th??? ph????ng th???c thanh to??n ph?? h???p</p>

                    <button onClick={() => {
                        const thongTinDatVe = {
                            maLichChieu: id,
                            danhSachVe: danhSachGheDangDat,
                        }
                        dispatch(datVe(thongTinDatVe))
                    }}
                        className="btn btn-success font-weight-bold w-100">?????T V??</button>
                </div>
            </div>
        </div >
    )
}
