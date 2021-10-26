<<<<<<< HEAD
import { GET_ARRAYIMG } from './constant'
=======
import {GET_ARRAYIMG} from './constant'
>>>>>>> cb53865a19db0d6c538f5bf1aa9a1f9a2a3bb30a
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
