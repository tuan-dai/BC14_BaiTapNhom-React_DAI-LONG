import *as ActionType from './constant'
import api from '../../../../../utils/apiUtils'

export const getListMovie = () => {
    return (dispatch) => {
        dispatch(actListMovie_Request)
        api
            .get("QuanLyPhim/LayDanhSachPhim?maNhom=GP03")
            .then((result) => {
                dispatch(actListMovie_Success(result.data.content))
            })
            .catch(error => dispatch(actListMovie_Error(error)))
    }
}
export const deleteMovie = (id) => {
    return (dispatch) => {
        dispatch(actListMovie_Request)
        api
            .delete(`QuanLyPhim/XoaPhim?MaPhim=${id}`)
            .then((result) => {
                dispatch(deleteMovie(result.data.content))
                dispatch(getListMovie())
            })
            .catch(error => dispatch(actListMovie_Error(error)))
    }
}
const actListMovie_Request = () => {
    return {
        type: ActionType.LISTMOVIE_REQUEST
    }
}

const actListMovie_Success = (data) => {
    return {
        type: ActionType.LISTMOVIE_SUCCESS,
        payload: data,
    }
}

export const actSearchMovie = (keyword) => {
    return {
        type: ActionType.SEARCH_MOVIE,
        payload: keyword,
    }
}
const actDeleteMovie = (movie) => {
    return {
        type: ActionType.DELETE_MOVIE,
        payload: movie,
    }
}

const actListMovie_Error = (error) => {
    return {
        type: ActionType.LISTMOVIE_ERROR,
        payload: error,
    }
}