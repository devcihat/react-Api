import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../style.css";
import Card from "./Card";

import { motion } from "framer-motion";

const NEW_KEY = "cb216ec1dfbf0af79b80b13d70b07143";

function CardDetail(props) {
  const pageVariants = {
    in: {
      opacity: 1,
      x: 0
    },
    out: {
      opacity: 0,
      x: "-100vw"
    }
  };
  const pageTransition = {
    duration: 2
  };
  const [movie, setMovie] = useState([]);
  const params = useParams();
  const [suggested, setSuggested] = useState([]);

  const MOVIE_API = `https://api.themoviedb.org/3/movie/${
    params.movieID
  }?api_key=${NEW_KEY}&language=en-US/`;

  const NEW_API = `https://api.themoviedb.org/3/movie/${
    params.movieID
  }/similar?api_key=${NEW_KEY}&language=en-US&page=1`;
  // console.log(params);

  useEffect(() => {
    const axios = require("axios").default;

    axios.get(MOVIE_API).then(response => {
      setMovie(response.data);
    });

    axios.get(NEW_API).then(response => {
      setSuggested(response.data.results);
    });
  }, [movie]);
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="col-sm-6 offset-sm-3"
    >
      <nav
        style={{ backgroundColor: "white" }}
        aria-label="breadcrumb"
        className="mb-5"
      >
        <ol className="breadcrumb mt-4">
          <li className="breadcrumb-item text-center text-white">
            <Link className="ms-5 mb-3" to="/">
              Home
            </Link>
          </li>
          <li className="breadcrumb-item active mb-3" aria-current="page">
            {movie.title}
          </li>
        </ol>
      </nav>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          className="card-img-top mb-3"
          alt="..."
        />
        <h1 className="text-white text-center mb-3">{movie.title}</h1>
        <p
          style={{ lineHeight: "28px" }}
          className="text-dark img-thumbnail text-center"
        >
          {movie.overview}
        </p>
        <div className="d-flex text-white justify-content-between">
          <p>IMDB: {movie.vote_average}</p>
          <p>{movie.release_date}</p>
        </div>
      </div>
      <h2 className="mb-3 text-dark img-thumbnail text-center ">
        SUGGESTED MOVIES
      </h2>

      <div className="row">
        <div className="d-flex flex-wrap mx-1">
          {suggested
            .filter(item => item.poster_path)
            .map(item => (
              <Card key={item.id} movie={item} />
            ))}
        </div>
      </div>
    </motion.div>
  );
}

export default CardDetail;
