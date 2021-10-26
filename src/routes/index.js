import Home from '../containers/HomeTemplate/Home/'
import About from '../containers/HomeTemplate/About'
import HomeTemplate from '../containers/HomeTemplate';
import AdminTemplate from "../containers/AdminTemplate";
import AuthPage from "../containers/AdminTemplate/AuthPage";
import Dashboard from "../containers/AdminTemplate/Dashboard";


import QuanLyNguoiDung from '../containers/AdminTemplate/QuanLyNguoiDung'
import AddUser from "../containers/AdminTemplate/QuanLyNguoiDung/AddUser";
import EditUser from "../containers/AdminTemplate/QuanLyNguoiDung/EditUser";

import QuanLyPhim from '../containers/AdminTemplate/QuanLyPhim/'
import ListMovie from "../containers/HomeTemplate/Home/List Movie";
import Detail_Movie from "../containers/HomeTemplate/Detail-Movie";
import AddFilm from "../containers/AdminTemplate/QuanLyPhim/ThemPhim";
import EditFilm from "../containers/AdminTemplate/QuanLyPhim/EditPhim";
import ShowTime from "../containers/AdminTemplate/TaoLichChieu";
import CheckOut from "../containers/HomeTemplate/CheckOut";

// HomeTemplate
const routesHome = [
    {
        exact: true,
        path: '/',
        component: Home,
    },
    {
        exact: false,
        path: '/phim-dang-chieu',
        component: ListMovie
    },
    {
        exact: false,
        path: '/detail-movie/:id',
        component: Detail_Movie,
    },
    {
        exact: false,
        path: '/checkout/:id',
        component: CheckOut,
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
        path: "/dashboard",
        component: Dashboard,
    },
    {
        exact: false,
        path: '/users',
        component: QuanLyNguoiDung
    },
    {
        exact: false,
        path: '/adduser',
        component: AddUser,
    },
    {
        exact: false,
        path: '/edituser/:id',
        component: EditUser,
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
        path: '/editfilm/:id',
        component: EditFilm
    },
    {
        exact: false,
        path: '/showtime/:id/:tenphim',
        component: ShowTime
    },
]
function renderAdminRoutes() {
    return routesAdmin.map((route, index) => {
        return <AdminTemplate key={index} exact={route.exact} path={route.path} component={route.component} />
    })
}

export { renderHomeRoutes, renderAdminRoutes }