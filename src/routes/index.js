import Home from '../container/HomeTemplate/Home'
import About from '../container/HomeTemplate/About'
import LayoutHome from '../container/HomeTemplate';
import { lazy } from "react";

// HomeTemplate
const routeHome = [
    {
        exact: true,
        path: '/',
        component: Home,
    },
    {
        exact: false,
        path: '/about',
        component: About,
    }
]

function renderHomeRoutes() {
    return routeHome.map((route, index) => {
        return <LayoutHome key={index} exact={route.exact} path={route.path} component={route.component} />
    })
}





// AdminTemplate


export { renderHomeRoutes }