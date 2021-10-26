import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'

export default function PageNotFound() {
    return (
        <div className="pageNotFound">
            <h1>404 Error Page </h1>
            <p className="zoom-area"></p>
            <section className="error-container">
                <span>4</span>
                <span>
                    <span className="screen-reader-text">0</span>
                </span>
                <span>4</span>
            </section>
            <div className="link-container">
                <NavLink to="/" className="more-link">
                    Back To Home
                </NavLink>
            </div>
        </div>
    )
}
