import React from 'react'
import NavbarAdmin from './_component/Navbar'
import { Route } from 'react-router'

export default function AdminTemplate(props) {
    const { exact, path, component } = props
    return (
        <div>
            <NavbarAdmin />
            <Route exact={exact} path={path} component={component} />
        </div>
    )
}
