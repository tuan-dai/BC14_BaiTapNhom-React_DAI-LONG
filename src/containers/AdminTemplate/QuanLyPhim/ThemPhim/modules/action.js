import *as ActionType from './constant'
import api from '../../../../../utils/apiUtils'
import history from '../../../../../App'

export const themPhimUploadHinh = (formData) => {
    return (dispatch) => {
        dispatch(actAddFilm_request)
        api
            .post("QuanLyPhim/ThemPhimUploadHinh", formData)
            .then((result) => {
                dispatch(actAddFilm_success(result.data.content))
                alert('Them phim thanh cong')
            })
            .catch(error => dispatch(actAddFilm_error(error)))
    }
}
export const capNhatPhimUpload = (formData) => {
    return (dispatch) => {
        dispatch(actAddFilm_request)
        api
            .post("QuanLyPhim/CapNhatPhimUpload", formData)
            .then((result) => {
                dispatch(actAddFilm_success(result.data.content))
                alert('Cap nhat phim thanh cong')
                history.push('films')
            })
            .catch(error => dispatch(actAddFilm_error(error)))
    }
}
export const layThongTinPhim = (id) => {
    return (dispatch) => {
        api
            .get(`QuanLyPhim/LayThongTinPhim?MaPhim=${id}`)
            .then((result) => {
                dispatch(actLayThongTinFilm(result.data.content))
            })
            .catch(error => dispatch(actAddFilm_error(error)))
    }
}

const actAddFilm_request = () => {
    return {
        type: ActionType.ADDFILM_REQUEST
    }
}
const actAddFilm_success = (data) => {
    return {
        type: ActionType.ADDFILM_SUCCESS,
        payload: data
    }
}
const actAddFilm_error = (error) => {
    return {
        type: ActionType.ADDFILM_ERROR,
        payload: error,
    }
}
const actLayThongTinFilm = (thongtinfilm) => {
    return {
        type: ActionType.LAYTHONGTINFILM_SUCCESS,
        payload: thongtinfilm,
    }
}