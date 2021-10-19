import React from 'react'

import { NavLink } from 'react-router-dom'
export default function MovieHome(props) {
    const { hinh_HomePage, tenPhim_HomePage } = props
    return (
        <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card text-left border-0">
                <NavLink to="/booking-movie">
                    <img class="card-img-top" src={hinh_HomePage} alt="" />
                </NavLink>
                <NavLink to="/booking-movie" className="btn btn-danger mt-2 ">MUA VÉ</NavLink>
            </div>
        </div>
    )
}
