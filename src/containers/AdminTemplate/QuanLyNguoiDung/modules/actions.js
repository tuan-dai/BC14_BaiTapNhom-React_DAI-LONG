import * as ActionType from "./constants";
import api from "../../../../utils/apiUtils";

export const getListStaff = (user = "") => {
    return (dispatch) => {
        dispatch(actListStaffRequest());
        if (user.trim() !== "") {
            return api
                .get(`QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01&tuKhoa=${user}`)
                .then((result) => dispatch(actListStaffSuccess(result.data.content)))
                .catch((error) => dispatch(actListStaffFailed(error)));
        } else {
            return api
                .get(`QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01`)
                .then((result) => dispatch(actListStaffSuccess(result.data.content)))
                .catch((error) => dispatch(actListStaffFailed(error)));
        }
    };
};
export const actListStaffRequest = () => {
    return {
        type: ActionType.MANAGER_REQUEST,
    };
};
export const actListStaffSuccess = (data) => {
    return {
        type: ActionType.MANAGER_SUCCESS,
        payload: data,
    };
};
export const actListStaffFailed = (error) => {
    return {
        type: ActionType.MANAGER_FAILED,
        payload: error,
    };
};

//delete
const actDelete = (account) => {
    return {
        type: ActionType.DELETE_USER,
        payload: account,
    };
};
export const deleteUser = (acc) => {
    return (dispatch) => {
        dispatch(actListStaffRequest());
        api
            .delete(`QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${acc}`)
            .then((result) => {
                dispatch(actDelete());
                alert(result.data.message);
                dispatch(getListStaff());
            })
            .catch((error) => {
                dispatch(actListStaffFailed(error));
                alert(error.content);
                dispatch(getListStaff());
            });
    };
};
//edit