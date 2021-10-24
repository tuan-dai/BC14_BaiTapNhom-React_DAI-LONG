import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

export default function NavbarAdmin() {
  return (
    <div className="vertical-nav bg-white" id="sidebar">
      <div className="py-4 px-3 mb-4 bg-light">
        <div className="media d-flex align-items-center">
          <div className="media-body">
            <h4 className="m-0">Trang Quan Tri</h4>
          </div>
        </div>
      </div>
      <ul className="nav flex-column bg-white mb-0">
        <li className="nav-item">
          <NavLink
            to="/dashboard"
            activeClassName="active"
            className="nav-link"
          >
            <i className="fa fa-th-large mr-3" />
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/quan-ly-nguoi-dung"
            activeClassName="active"
            className="nav-link my-3"
          >
            <i className="fa fa-address-card mr-3" />
            Quan Ly Nguoi Dung
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/quan-ly-phim"
            activeClassName="active"
            className="nav-link"
          >
            <i className="fa fa-cubes mr-3" />
            Quan Ly Phim
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
