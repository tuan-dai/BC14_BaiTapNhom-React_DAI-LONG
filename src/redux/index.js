import { combineReducers } from "redux";
import AuthPageReducer from "../containers/AdminTemplate/AuthPage/modules/reducer";
import SignUpReducer from "../containers/HomeTemplate/SignUp/module/reducer";
import ListMoviePhanTrang_Reducer from "../containers/HomeTemplate/Home/ListMoviePhanTrang/modules/reducer";
import ListMovie_Reducer from "../containers/HomeTemplate/Home/List Movie/modules/reducer";
import Rap_Reducer from "../containers/HomeTemplate/Home/LichChieuPhim/modules/reducer";
import AddFilm_Reducer from "../containers/AdminTemplate/QuanLyPhim/ThemPhim/modules/reducer";
import Slider_Reducer from "../containers/HomeTemplate/Home/Slider/modules/reducer";
import QuanLyDatVe_Reducer from "../containers/HomeTemplate/CheckOut/modules/reducer";
import ListStaffReducer from "../containers/AdminTemplate/QuanLyNguoiDung/modules/reducer";
import AddUserReducer from "../containers/AdminTemplate/QuanLyNguoiDung/AddUser/modules/reducer"
import DetailMovie_Reducer from "../containers/HomeTemplate/Detail-Movie/modules/reducer";

const rootReducer = combineReducers({
    AuthPageReducer,
    SignUpReducer,
    ListMoviePhanTrang_Reducer,
    ListMovie_Reducer,
    DetailMovie_Reducer,
    Rap_Reducer,
    AddFilm_Reducer,
    Slider_Reducer,
    QuanLyDatVe_Reducer,
    AddUserReducer,
    ListStaffReducer,
})
export default rootReducer