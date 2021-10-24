import React from "react";
import NavbarAdmin from "./_component/Navbar";
import { Route } from "react-router";

export default function AdminTemplate(props) {
  const { exact, path, component } = props;
  return (
    <div>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-2">
            <NavbarAdmin />
          </div>
          <div className="col-10">
            <Route exact={exact} path={path} component={component} />
          </div>
        </div>
      </div>
    </div>
  );
}
