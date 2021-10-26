import React from 'react'
import { Route } from 'react-router'
import NavbarHome from './_component/Navbar'
import Footer from './_component/Footer'

export default function HomeTemplate(props) {
    const { exact, path, component } = props
    return (
        <div>
            <NavbarHome />
            <Route exact={exact} path={path} component={component} />
            <Footer />
        </div>
    )
}
