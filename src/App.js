import React, { useState, useEffect } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import ERROR404 from "./components/error/ERROR404";
import Card from "./components/Card";
import CardDetails from "./components/CardDetails";
import Footer from "./components/Footer";

const API_KEY = "cb216ec1dfbf0af79b80b13d70b07143";

function App() {
  const [query, setQuery] = useState("matrix");
  const [movies, setMovies] = useState([]);
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    setIsLoad(true);
    Search(query);
    setIsLoad(false);
  }, []);

  function Search(query) {
    setIsLoad(true);

    const URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`;
    setTimeout(() => {
      fetch(URL)
        .then(response => response.json())
        .then(data => setMovies(data.results));
      setIsLoad(false);
    }, 3000);
  }

  const submitForm = event => {
    event.preventDefault();
    Search(query);
  };

  return (
    <BrowserRouter>
      <Navbar />
<div className="container">
        <div className="row pt-3">
          <Switch>
            <Route exact path="/">
              <div className="row">
                {isLoad ? (
                  <div className="loading d-flex flex-column justify-content-center align-items-center">
                    <lottie-player
                      src="https://assets2.lottiefiles.com/packages/lf20_8y9IYf.json"
                      background="transparent"
                      speed="1"
                      style={{ width: "300px", height: "300px" }}
                      loop
                      autoplay
                    />
                  </div>
                ) : (
                  <>
                    <div className="col-sm-12">
                      <h1 className="text-center text-white mb-3">Movie App</h1>
                    </div>
                    <div className="col-sm-12 mb-3">
                      <form>
                        <div className="row ">
                          <div className="col-lg-9 mb-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search"
                              name="query"
                              onChange={event => setQuery(event.target.value)}
                            />
                          </div>
                          <div className="col-lg-3">
                            <button
                              onClick={submitForm}
                              type="submit"
                              className="btn btn-primary"
                            >
                              Search Movie
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>

                    {movies
                      .filter(item => item.poster_path)
                      .map(item => (
                        <Card key={item.id} movie={item} />
                      ))}
                  </>
                )}
              </div>
            </Route>

            <Route path="/movie/:movieID">
              <CardDetails movies={movies} />
            </Route>

            <Route path="/404">
              <ERROR404 />
            </Route>
            <Redirect from="*" to="/404" />
          </Switch>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
