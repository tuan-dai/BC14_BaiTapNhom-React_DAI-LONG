import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

import Slider from './Slider'
import ListMoviePhanTrang from './ListMoviePhanTrang'
import LichChieuPhim from './LichChieuPhim'

export default function Home() {

    return (
        <div>
            <Slider />
            <div className="container">
                <ListMoviePhanTrang />
                <Link to="/phim" className="btn btn-outline-warning"
                    style={{ marginTop: '-4rem', float: 'right' }}>
                    XEM THÊM
                </Link>
                <h4 className="text-left">LỊCH CHIẾU PHIM</h4>
                <div className="reviewphim_line"></div>
                <div className="row">
                    <LichChieuPhim />
                </div>
            </div>

        </div>
    )
}
