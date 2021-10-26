import * as ActionType from "./constant";
import api from "../../../../utils/apiUtils";
const actSignUpPageRequest = () => {
  return {
    type: ActionType.SIGN_UP_REQUEST,
  };
};

const actSignUpPageSuccess = (data) => {
  return {
    type: ActionType.SIGN_UP_SUCCESS,
    payload: data,
  };
};

const actSignUpPageFailed = (error) => {
  return {
    type: ActionType.SIGN_UP_FAILED,
    payload: error,
  };
};
export const signUpUser = (user, history) => {
  return (dispatch) => {
    dispatch(actSignUpPageRequest());
    api
      .post("QuanLyNguoiDung/DangKy", user)
      .then((result) => {
        dispatch(actSignUpPageSuccess(result.data.content));
        alert("Bạn đã đăng ký thành công");
        history.push("/admin");
      })
      .catch((error) => {
        dispatch(actSignUpPageFailed(error));
        alert(error);
      });
  };
};
