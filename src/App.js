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

  useEffect(() => {
    Search(query);
  }, []);

  function Search(query) {
    const URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`;
    fetch(URL)
      .then(response => response.json())
      .then(data => setMovies(data.results));
  }

  const submitForm = event => {
    event.preventDefault();
    Search(query);
  };

  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <div className="container">
          <div className="row pt-3">
            <Switch>
              <Route exact path="/">
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
      </div>
    </BrowserRouter>
  );
}

export default App;
