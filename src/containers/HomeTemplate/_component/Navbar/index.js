import React from 'react'
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import './style.css'



export default function NavbarHome() {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light" style={{ boxShadow: '1px 1px 10px rgb(219, 219, 219)' }}>
            <div className="container">
                <Link to="">
                    <img src='./img/logo.png' alt='' />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <MenuIcon />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto w-100 justify-content-end font-weight-bold">
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Mua vé<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/phim-dang-chieu">Phim</Link>
                        </li><li className="nav-item">
                            <Link className="nav-link" to="#">Sự kiện</Link>
                        </li><li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li><li className="nav-item">
                            <Link className="nav-link" to="/admin">
                                <PersonIcon />Đăng nhập
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>





    )
}
