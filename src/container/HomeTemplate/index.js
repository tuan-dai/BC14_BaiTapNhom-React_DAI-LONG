import React from 'react'
import { Route } from 'react-router'
import Navbar from './_component/Navbar'

export default function LayoutHome(props) {
    const { exact, path, component } = props
    return (
        <div>
            <Navbar />
            <Route exact={exact} path={path} component={component} />
        </div>
    )
}
