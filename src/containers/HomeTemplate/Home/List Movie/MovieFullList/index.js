import React from 'react'
import { NavLink } from 'react-router-dom'
export default function MovieFullList(props) {

    const { hinh_ListMovie, tenPhim_ListMovie } = props
    return (
        <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card text-left border-0">
                <NavLink to="/booking-movie">
                    <img className="card-img-top img-fluid" src={hinh_ListMovie} alt="" />
                </NavLink>

                <NavLink to="/booking-movie" className="btn btn-danger mt-2 muave_Home ">MUA VÉ</NavLink>
            </div>
        </div>
    )

}
