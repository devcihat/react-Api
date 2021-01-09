import React from "react";
import { Link } from "react-router-dom";
import MovieGif from "./movie.gif";

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
          <i className="far fa-user fa-lg mx-2" />
          <i className="fas fa-sign-in-alt fa-lg" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
