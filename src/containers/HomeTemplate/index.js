import React from "react";
import { Route } from "react-router";
import Footer from "./_component/Footer";
import NavbarHome from "./_component/Navbar";

export default function HomeTemplate(props) {
  const { exact, path, component } = props;
  return (
    <div>
      <NavbarHome />
      <Route exact={exact} path={path} component={component} />
      <Footer />
    </div>
  );
}
