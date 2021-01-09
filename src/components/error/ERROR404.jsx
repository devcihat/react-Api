import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import lottie from "lottie-web";

function ERROR404(props) {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./notFound.json")
    });
  }, []);

  return (
    <div>
      <div
        style={{ maxWidth: "600px" }}
        className="container text-center "
        ref={container}
      >
        <Link to="/" className="text-white">
          <i className="fas fa-directions fa-lg mx-1" /> Home Page
        </Link>
      </div>
    </div>
  );
}

export default ERROR404;
