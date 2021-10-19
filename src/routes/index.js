import { lazy } from "react";
import Home from '../containers/HomeTemplate/Home/'
import MuaVe from '../containers/HomeTemplate/MuaVe'
import About from '../containers/HomeTemplate/About'
import HomeTemplate from '../containers/HomeTemplate';

import AdminTemplate from '../containers/AdminTemplate';
import QuanLyNguoiDung from '../containers/AdminTemplate/QuanLyNguoiDung'
import QuanLyPhim from '../containers/AdminTemplate/QuanLyPhim/'
import AuthPage from "../containers/AdminTemplate/AuthPage";
import ListMovie from "../containers/HomeTemplate/Home/List Movie";
import AddFilm from "../containers/AdminTemplate/QuanLyPhim/ThemPhim";
import EditFilm from "../containers/AdminTemplate/QuanLyPhim/EditPhim";
import ShowTime from "../containers/AdminTemplate/TaoLichChieu";


// HomeTemplate
const routesHome = [
    {
        exact: true,
        path: '/',
        component: Home,
    },
    {
        exact: false,
        path: '/booking-movie',
        component: MuaVe,
    },
    {
        exact: false,
        path: '/phim',
        component: ListMovie,
    },
    {
        exact: false,
        path: '/about',
        component: About,
    }
]

function renderHomeRoutes() {
    return routesHome.map((route, index) => {
        return <HomeTemplate key={index} exact={route.exact} path={route.path} component={route.component} />
    })
}





// AdminTemplate
const routesAdmin = [
    {
        exact: false,
        path: "/admin",
        component: AuthPage,
    },
    {
        exact: false,
        path: '/admin/users/',
        component: QuanLyNguoiDung,
    },
    {
        exact: false,
        path: '/films',
        component: QuanLyPhim
    },
    {
        exact: false,
        path: '/addfilm',
        component: AddFilm,
    },
    {
        exact: false,
        path: '/edit/:id',
        component: EditFilm,
    },
    {
        exact: false,
        path: '/showtime/:id/:tenphim',
        component: ShowTime,
    },
]
function renderAdminRoutes() {
    return routesAdmin.map((route, index) => {
        return <AdminTemplate key={index} exact={route.exact} path={route.path} component={route.component} />
    })
}

export { renderHomeRoutes, renderAdminRoutes }