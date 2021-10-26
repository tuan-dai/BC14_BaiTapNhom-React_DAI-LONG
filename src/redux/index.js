import { combineReducers } from "redux";
import AddUserReducer from "../containers/AdminTemplate/QuanLyNguoiDung/AddUser/moudles/reducer";
import ListStaffReducer from "../containers/AdminTemplate/QuanLyNguoiDung/moudles/reducer";
import AuthPageReducer from "../containers/AdminTemplate/AuthPage/modules/reducer";
import SignUpReducer from "../containers/HomeTemplate/SignUp/moudle/reducer";
const rootReducer = combineReducers({
  ListStaffReducer,
  AddUserReducer,
  AuthPageReducer,
  SignUpReducer,
});
export default rootReducer;
