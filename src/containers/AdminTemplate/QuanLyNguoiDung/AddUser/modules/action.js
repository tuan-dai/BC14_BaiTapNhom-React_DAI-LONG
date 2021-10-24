import * as ActionType from "./constants";
import api from "../../../../../utils/apiUtils";
const actAddUserRequest = () => {
    return {
        type: ActionType.ADD_USER_REQUEST,
    };
};
const actAddUserSuccess = (data) => {
    return {
        type: ActionType.ADD_USER_SUCCESS,
        payload: data,
    };
};
const actAddUserFailed = (error) => {
    return {
        type: ActionType.ADD_USER_FAILED,
        payload: error,
    };
};

export const addUser = (user) => {
    return (dispatch) => {
        dispatch(actAddUserRequest());
        api
            .post(`QuanLyNguoiDung/ThemNguoiDung`, user)
            .then((result) => {
                dispatch(actAddUserSuccess(result.data.content));
                alert(result.data.message);
            })
            .catch((error) => {
                dispatch(actAddUserFailed(error));
                alert(error);
            });
    };
};
const actGetUser = (userInfor) => {
    return {
        type: ActionType.GET_USER,
        payload: userInfor,
    };
};
export const getUser = (user) => {
    return (dispatch) => {
        api
            .post(`QuanLyNguoiDung/LayThongTinNguoiDung?taiKhoan=${user}`)
            .then((result) => {
                dispatch(actGetUser(result.data.content));
            })
            .catch((error) => {
                dispatch(actAddUserFailed(error));
            });
    };
};
const actEditUser = (user) => {
    return {
        type: ActionType.EDIT_USER,
        payload: user,
    };
};
export const editUser = (user) => {
    return (dispatch) => {
        api
            .post(`QuanLyNguoiDung/CapNhatThongTinNguoiDung`)
            .then((result) => {
                dispatch(actEditUser(result.data.content));
            })
            .catch((error) => dispatch(actAddUserFailed(error)));
    };
};