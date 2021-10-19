import *as ActionType from './constant'
import api from '../../../../../utils/apiUtils'


export const actLayTTLichChieuHeThongRap = () => {
    return (dispatch) => {
        api
            .get("QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP03")
            .then((result) => {
                dispatch({
                    type: ActionType.GET_CUMRAP,
                    payload: result.data.content,
                })
            })
            .catch(error => console.log(error))
    }
}