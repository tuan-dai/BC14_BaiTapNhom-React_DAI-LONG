import React, { Component } from 'react'
import './nav.css'
import '../../css/style.css'
import '../../css/custom.css'
import '../../css/main.css'
import $ from 'jquery'
import { Link, NavLink } from 'react-router-dom';

import PersonIcon from '@mui/icons-material/Person';
import MovieIcon from '@mui/icons-material/Movie';
import RoomIcon from '@mui/icons-material/Room';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import MailIcon from '@mui/icons-material/Mail';
import LogoutIcon from '@mui/icons-material/Logout';
import { connect } from 'react-redux'
import { actAuth_Clear_Data } from '../../AuthPage/modules/action'
import { withRouter } from 'react-router'


class NavbarAdmin extends Component {
    componentDidMount() {
        $(function () {
            // Sidebar toggle behavior
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar, #content').toggleClass('active');
            });
        });
    }
    render() {
        return (
            // Vertical navbar
            <div className="body-admin">
                <div className="vertical-nav" id="sidebar">
                    <div className="pt-5 pb-3 px-3 mb-3">
                        <div className="media d-flex align-items-center">
                            <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                                <h4 className="text-light ml-1">Admin Page</h4>
                            </Link>
                        </div>
                    </div>

                    <ul className="nav flex-column mb-0">
                        <li className="nav-item mb-3">
                            <NavLink to="/users" className="nav-link text-light">
                                <PersonIcon className="mr-3" />
                                Users
                            </NavLink>
                        </li>
                        <li className="nav-item mb-3">
                            <Link to="/films" className="nav-link text-light">
                                <MovieIcon className="mr-3" />
                                Films
                            </Link>
                        </li>
                        <li className="nav-item mb-3">
                            <Link to="#" className="nav-link text-light">
                                <RoomIcon className="mr-3" />
                                Map
                            </Link>
                        </li>
                        <li className="nav-item mb-3">
                            <Link to="#" className="nav-link text-light">
                                <NotificationsIcon className="mr-3" />
                                Notification
                            </Link>
                        </li>
                    </ul>

                </div>
                {/* End vertical navbar */}

                {/* Page content holder */}
                <div className="page-content p-4" id="content">
                    <button id="sidebarCollapse" type="button" className="btn btn-dark text-light shadow-sm px-2 mb-4">
                        <MenuIcon className="mr-1" />
                    </button>
                </div>

                {/* Header */}
                <div className="header-nav mr-4">
                    <ul>
                        <li>
                            <input type="text" className="form-control" placeholder="Search..."></input>
                        </li>
                        <li>
                            <Link to="#" className="text-dark ml-5">
                                <MailIcon />
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="text-dark mx-4">
                                <RoomIcon />
                                <span className="noti">5</span>
                            </Link>
                        </li>
                        <li>
                            <button className="btn" onClick={() => { this.props.Logout(this.props.history) }}>
                                <LogoutIcon />
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        Logout: (history) => {
            dispatch(actAuth_Clear_Data(history))
        }
    }
}
const Connected_Component = connect(null, mapDispatchToProps)(NavbarAdmin)
export default withRouter(Connected_Component)