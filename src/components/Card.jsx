import React from "react";
import "../style.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Card(props) {
  const aboutTransition = {
    duration: 2
  };

  const pageTransition = {
    in: {
      opacity: 1,
      y: 0
    },
    out: {
      opacity: 0,
      y: "-100vw"
    }
  };

  const setVoteClass = vote => {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 6) {
      return "orange";
    } else {
      return "white";
    }
  };

  const {
    id,
    title,
    poster_path,
    overview,
    release_date,
    vote_average
  } = props.movie;
  // console.log(props);
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
      transition={aboutTransition}
      className="col-xl-3 col-lg-3 col-md-6  mb-4"
    >
      <div className="card box">
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title text-dark">{title}</h5>
          <p className="card-text text-muted">{overview.substring(0, 50)}..</p>
          <h6 className="text-muted">{release_date}</h6>
          <span className={`tag ${setVoteClass(vote_average)}`}>
            {vote_average}
          </span>
          <Link to={`/movie/${id}`} className="btn btn-primary">
            Detail
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default Card;
