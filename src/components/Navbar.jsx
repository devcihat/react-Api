import React from "react";
import { Link } from "react-router-dom";
import "../style.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link className="navbar-brand" to="/">
            <iframe
              src="https://giphy.com/embed/1gdoeJmc3piKTeORzG"
              width="40"
              height="30"
            />

            <b>Movie Storage</b>
          </Link>

          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link to="/about" className="nav-link text-white me-3">
                <i>About</i>
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/contact" className="nav-link text-white">
                <i>Contact</i>
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <Link to="/login">
              <button
                style={{ borderRadius: "55px", fontSize: "14px" }}
                className="btn btn-outline-success"
                type="submit"
              >
                Login
              </button>
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
