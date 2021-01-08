import React from "react";
import { Link } from "react-router-dom";

function ERROR404(props) {
  return (
    <div>
      <img
        src="https://www.pngkit.com/png/detail/930-9306658_404-not-found.png"
        className="w-100"
        alt=""
      />

      <h2 className="pt-3">
        <Link to="/" className="">
          Home Page
        </Link>
      </h2>
    </div>
  );
}

export default ERROR404;
