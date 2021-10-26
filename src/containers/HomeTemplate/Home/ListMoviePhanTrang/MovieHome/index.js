import React from 'react'

import { NavLink } from 'react-router-dom'
export default function MovieHome(props) {
    const { maPhim_HomePage, hinh_HomePage, tenPhim_HomePage } = props
    return (
        <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card text-center border-0">
                <NavLink to={`/detail-movie/${maPhim_HomePage}`} style={{ textDecoration: 'none' }}>
                    <img className="card-img-top" src={hinh_HomePage} alt="" />
<<<<<<< HEAD
                    <p className="text-dark mt-2 font-weight-bold">{tenPhim_HomePage}</p>
=======
                    <p className="text-dark mt-2 font-weight-bold" >{tenPhim_HomePage}</p>
>>>>>>> cb53865a19db0d6c538f5bf1aa9a1f9a2a3bb30a
                </NavLink>

            </div>
        </div>
    )
}
