import React from 'react'
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import './style.css'



export default function NavbarHome() {
    return (
        // <div id="navbar-wrapper" className="container-fluid bg-light">
        //     <nav className="navbar container navbar-expand-lg navbar-light">
        //         <Link className="navbar-brand" to="/">
        //             <img width='60' src="./img/logo.png" />
        //         </Link>
        //         <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navContent" aria-controls="navContent" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse" id="navContent">
        //             <ul className="navbar-nav">
        //                 <li className="nav-item">
        //                     <Link className="nav-link text-dark" to="#">MUA VÉ</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link className="nav-link text-dark" to="/phim">PHIM</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link className="nav-link text-dark" to="#">SỰ KIỆN</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link className="nav-link text-dark" to="/about">ABOUT</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link className="nav-link text-dark" to="/admin">
        //                         <PersonIcon className="mr-2" />
        //                         <span>ĐĂNG NHẬP</span>
        //                     </Link>
        //                 </li>
        //             </ul>
        //         </div>
        //     </nav>
        // </div >

        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
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
                            <Link className="nav-link" href="#">Mua vé<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/phim">Phim</Link>
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
