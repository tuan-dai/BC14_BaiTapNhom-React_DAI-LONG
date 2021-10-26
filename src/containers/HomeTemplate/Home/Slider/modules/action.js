import {GET_ARRAYIMG} from './constant'
import api from '../../../../../utils/apiUtils'

export const getArrayImg = () => {
    return (dispatch) => {
        api
            .get("QuanLyPhim/LayDanhSachBanner")
            .then((result) => {
                dispatch(actSlider(result.data.content))
            })
            .catch(error => console.log(error))
    }
}


const actSlider = (data) => {
    return {
        type: GET_ARRAYIMG,
        payload: data,
    }
}
