import React from 'react'
import { NavLink } from 'react-router-dom'
export default function MovieFullList(props) {

    const { hinh_ListMovie, tenPhim_ListMovie } = props
    return (
        <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card text-center border-0">
                <NavLink to="/booking-movie">
                    <img className="card-img-top img-fluid" src={hinh_ListMovie} alt="" />
                    <p className="text-dark mt-2">{tenPhim_ListMovie}</p>
                </NavLink>
            </div>
        </div>
    )

}
