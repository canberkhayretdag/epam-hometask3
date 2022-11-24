import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import "../styles/body.css";
import Body from "./Body";
import Header from "./Header";

function MovieDetails({clearMovie, movie}) {
  return (
      <div className="row cart-detail-main">
        <div className="col-md-4 p-5">
            <img src={movie.Poster} alt="..." />
        </div>
        <div className="col-md-6 p-5">
            <h3>{movie.Title}</h3>
            <br />
            <h4>{movie.Runtime} & {movie.Year}</h4>
            <br />
            <p className="clickable" onClick={() => clearMovie()}>Go to Home Page</p>
        </div>
      </div>
  );
}

export default MovieDetails;
