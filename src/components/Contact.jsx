import React from "react";

function Contact() {
  return (
    <div className="container">
      <h3 style={{ maxWidth: "400px" }} className=" mx-auto">
        <lottie-player
          src="https://assets1.lottiefiles.com/private_files/lf30_hyEOtL.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        />
      </h3>
      <div className="row">
        <div className="col-xs-12 col-xl-4 col-md-4 ">
          <lottie-player
            style={{ width: "300px", height: "200px" }}
            src="https://assets1.lottiefiles.com/packages/lf20_bp1bwvhv.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          />
        </div>
        <div className="col-xs-12 col-xl-8 col-md-8 ">
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                aria-label="First name"
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                aria-label="Last name"
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label" />
              <textarea
                className="form-control"
                placeholder="Message"
                id="exampleFormControlTextarea1"
                rows="3"
              />
            </div>
            <button
              style={{ maxWidth: "145px" }}
              type="button"
              className="btn btn-secondary mx-auto"
            >
              Send
            </button>
          </div>
          <div className="container">
            <div className=" pt-4 text-center">
              <a href="https://www.linkedin.com/in/cihat-s%C3%BCng%C3%BC-9b78901a5/">
                <i
                  style={{ fontSize: "40px" }}
                  className="fab fa-linkedin-in fa-lg text-white mx-3"
                />
              </a>

              <a href="mailto:cihattsungu@outlook.com">
                <i
                  style={{ fontSize: "40px" }}
                  className="fas fa-envelope-square text-white mb-4 mx-3"
                />
              </a>
              <a href="https://github.com/devcihat">
                <i
                  style={{ fontSize: "40px" }}
                  className="fab fa-github fa-lg text-white mx-3"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
