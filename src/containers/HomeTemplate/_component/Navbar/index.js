import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function NavbarHome() {
    return (
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
            {/* Brand */}
            <Link className="navbar-brand" to="#">Navbar</Link>
            {/* Toggler/collapsibe Button */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon" />
            </button>
            {/* Navbar links */}
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/booking-movie">MUA VE</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">ABOUT</NavLink>
                    </li>
                </ul>
            </div>
        </nav>

    )
}
