import React from 'react'
import NavbarAdmin from './_component/Navbar'
import { Redirect, Route } from 'react-router'

export default function AdminTemplate(props) {
    const { exact, path, component } = props
    if (localStorage.getItem("UserLogin")) {
        return (
            <div>
                <NavbarAdmin />
                <Route exact={exact} path={path} component={component} />
            </div>
        )
    }
    return <Redirect to="/" />
}
