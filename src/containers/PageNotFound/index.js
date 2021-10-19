import React from 'react'
import { Link } from 'react-router-dom'
import NavbarHome from '../HomeTemplate/_component/Navbar'
import FooterHome from '../HomeTemplate/_component/Footer'
import './style.css'

export default function PageNotFound() {
    return (
        <div>
            <NavbarHome />
            <div className="pagenotfound">
                <div className="container text-center">
                    <h1 className="text-primary display-2 font-weight-bold">404</h1>
                    <h3>Page Not Found</h3>
                    <p>The page you requested cound not be found</p>
                    <Link className="btn btn-primary" to="/">HOME PAGE</Link>
                </div>
                {/* <FooterHome /> */}
            </div>
        </div>
    )
}
