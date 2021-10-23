import React from 'react'

import { NavLink } from 'react-router-dom'
export default function MovieHome(props) {
    const { hinh_HomePage, tenPhim_HomePage } = props
    return (
        <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card text-center border-0">
                <NavLink to="/booking-movie" style={{ textDecoration: 'none' }}>
                    <img class="card-img-top" src={hinh_HomePage} alt="" />
                    <p className="text-dark mt-2">{tenPhim_HomePage}</p>
                </NavLink>

            </div>
        </div>
    )
}
