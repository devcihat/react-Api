import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light ">
      <div className="container-fluid  ">
        <Link className="navbar-brand" to="/">
          <i className="fas fa-video fa-lg mx-2" />
          <b>Movie Storage</b>
        </Link>
        <div style={{ cursor: "pointer" }}>
          <i className="far fa-user fa-lg mx-2" />
          <i className="fas fa-sign-in-alt fa-lg" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
