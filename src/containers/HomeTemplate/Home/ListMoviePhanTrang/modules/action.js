import *as ActionType from './constant'
import api from '../../../../../utils/apiUtils'

export const getListMoviePhanTrang = () => {
    return (dispatch) => {
        dispatch(actListMoviePhanTrang_Request)
        api
            .get("QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP03&soTrang=1&soPhanTuTrenTrang=10")
            .then((result) => {
                dispatch(actListMoviePhanTrang_Success(result.data.content.items))
            })
            .catch(error => dispatch(actListMoviePhanTrang_Error(error)))
    }
}

const actListMoviePhanTrang_Request = () => {
    return {
        type: ActionType.LISTMOVIE_PHANTRANG_REQUEST
    }
}

const actListMoviePhanTrang_Success = (data) => {
    return {
        type: ActionType.LISTMOVIE_PHANTRANG_SUCCESS,
        payload: data,
    }
}

const actListMoviePhanTrang_Error = (error) => {
    return {
        type: ActionType.LISTMOVIE_PHANTRANG_ERROR,
        payload: error,
    }
}