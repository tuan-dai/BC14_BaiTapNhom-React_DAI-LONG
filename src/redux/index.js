import { combineReducers } from "redux";
import AuthPageReducer from "../containers/AdminTemplate/AuthPage/modules/reducer";
import ListMoviePhanTrang_Reducer from "../containers/HomeTemplate/Home/ListMoviePhanTrang/modules/reducer";
import ListMovie_Reducer from '../containers/HomeTemplate/Home/List Movie/modules/reducer'
import Rap_Reducer from '../containers/HomeTemplate/Home/LichChieuPhim/modules/reducer'
import AddFilm_Reducer from "../containers/AdminTemplate/QuanLyPhim/ThemPhim/modules/reducer";
import Slider_Reducer from "../containers/HomeTemplate/Home/Slider/modules/reducer";
import QuanLyDatVe_Reducer from "../containers/HomeTemplate/CheckOut/modules/reducer";

const rootReducer = combineReducers({
    AuthPageReducer,
    ListMoviePhanTrang_Reducer,
    ListMovie_Reducer,
    Rap_Reducer,
    AddFilm_Reducer,
    Slider_Reducer,
    QuanLyDatVe_Reducer,
})
export default rootReducer