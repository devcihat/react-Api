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
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-md-12 col-lg-12">
          <div className="text-center " ref={container}>
            <Link to="/" className="text-white">
              <i className="fas fa-directions fa-lg mx-1" /> <b>Home Page</b>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ERROR404;
