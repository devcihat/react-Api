import React from "react";
import { Link } from "react-router-dom";
import "../style.css";

function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light ">
      <div className="container  ">
        <Link className="navbar-brand" to="/">
          <iframe
            src="https://giphy.com/embed/1gdoeJmc3piKTeORzG"
            width="40"
            height="30"
          />

          <b>Movie Storage</b>
        </Link>
       

        <div style={{ cursor: "pointer" }}>
          <Link to="/login">
            <i className="fas fa-sign-in-alt fa-lg text-dark" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
