import { lazy } from "react";
import Home from '../containers/HomeTemplate/Home'
import MuaVe from '../containers/HomeTemplate/MuaVe'
import About from '../containers/HomeTemplate/About'
import HomeTemplate from '../containers/HomeTemplate';

import AdminTemplate from '../containers/AdminTemplate';
import Dashboard from '../containers/AdminTemplate/Dashboard'
import QuanLyNguoiDung from '../containers/AdminTemplate/QuanLyNguoiDung'
import QuanLyPhim from '../containers/AdminTemplate/QuanLyPhim'


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
        path: '/dashboard',
        component: Dashboard,
    },
    {
        exact: false,
        path: '/quan-ly-nguoi-dung',
        component: QuanLyNguoiDung,
    },
    {
        exact: false,
        path: '/quan-ly-phim',
        component: QuanLyPhim
    }
]
function renderAdminRoutes() {
    return routesAdmin.map((route, index) => {
        return <AdminTemplate key={index} exact={route.exact} path={route.path} component={route.component} />
    })
}

export { renderHomeRoutes, renderAdminRoutes }