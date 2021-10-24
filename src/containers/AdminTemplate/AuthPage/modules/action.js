import api from "../../../../utils/apiUtils";
import * as ActionType from "./constant";

export const UserInfo = (user, history) => {
  return (dispatch) => {
    dispatch(actAuthPage_Request());
    api
      .post("QuanLyNguoiDung/DangNhap", user)
      .then((result) => {
        if (result.data.content.maLoaiNguoiDung === "KhachHang") {
          return Promise.reject({
            response: {
              data: {
                content: "Bạn không có quyền truy cập",
              },
            },
          });
        }
        //Luu xuong local
        localStorage.setItem("UserLogin", JSON.stringify(result.data.content));
        //Redirect to Dashboard
        history.replace("home");

        dispatch(actAuthPage_Success(result.data.content));
      })
      .catch((error) => dispatch(actAuthPage_Error(error)));
  };
};

const actAuthPage_Request = () => {
  return {
    type: ActionType.AUTH_PAGE_REQUEST,
  };
};

const actAuthPage_Success = (user) => {
  return {
    type: ActionType.AUTH_PAGE_SUCCESS,
    payload: user,
  };
};

const actAuthPage_Error = (error) => {
  return {
    type: ActionType.AUTH_PAGE_ERROR,
    payload: error,
  };
};
export const actAuth_Clear_Data = (history) => {
  // clear localStorage
  localStorage.removeItem("UserLogin");

  // redirect to authpage
  history.replace("admin");

  // clear reducer
  return {
    type: ActionType.AUTH_CLEAR_DATA,
  };
};
