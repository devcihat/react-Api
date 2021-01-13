import React from "react";

function Login(props) {
  return (
    <div className="container">
      <div className="row mb-3 pt-4">
        <div className="col-xs-8 col-lg-6">
          <lottie-player
            src="https://assets6.lottiefiles.com/packages/lf20_yjlOdw.json"
            background="transparent"
            speed="3"
            loop
            autoplay
          />
        </div>
        <div className="col-xs-6 col-lg-6">
          <form>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label text-white">
                Email address
              </label>
              <input
                required
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label
                for="exampleInputPassword1"
                className="form-label text-white"
              >
                Password
              </label>
              <input
                required
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input "
                id="exampleCheck1"
              />
              <label
                className="form-check-label text-white"
                htmlFor="exampleCheck1"
              >
                Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
