import *as ActionType from './constant'
import api from '../../../../utils/apiUtils'

export const get_DetailMovie = (id) => {
    return (dispatch) => {
        dispatch(actDetailMovie_Request)
        api
            .get(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`)
            .then((result) => {
                dispatch(actDetailMovie_Success(result.data.content))
            })
            .catch(error => dispatch(actDetailMovie_Error(error)))
    }
}


const actDetailMovie_Request = () => {
    return {
        type: ActionType.GET_DETAILMOVIE_REQUEST
    }
}

const actDetailMovie_Success = (data) => {
    return {
        type: ActionType.GET_DETAILMOVIE_SUCCESS,
        payload: data,
    }
}

const actDetailMovie_Error = (error) => {
    return {
        type: ActionType.GET_DETAILMOVIE_ERROR,
        payload: error,
    }
}