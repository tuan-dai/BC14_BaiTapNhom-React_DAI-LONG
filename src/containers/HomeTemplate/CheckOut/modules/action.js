import { GET_CHITIETPHONGVE, DATVE } from "./constant"
import api from '../../../../utils/apiUtils'

export const layChiTietPhoneVe = (maLichChieu) => {
    return (dispatch) => {
        api
            .get(`QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)
            .then((result) => {
                dispatch({
                    type: GET_CHITIETPHONGVE,
                    payload: result.data.content,
                })
            })
            .catch(error => console.log(error))
    }
}
export const datVe = (thongTinDatVe) => {
    return (dispatch) => {
        api
            .post(`QuanLyDatVe/DatVe`, thongTinDatVe)
            .then((result) => {
                dispatch({
                    type: DATVE,
                    payload: result.data.content
                })
            })
            .catch(error => console.log(error))
    }
}