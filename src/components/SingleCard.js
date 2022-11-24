import React from "react";
import PropTypes from "prop-types";
import EditMovie from "./EditMovie";
import { Link } from "react-router-dom";

function SingleCard(props) {
  return (
    <>
      <div className="col" data-bs-toggle="modal" data-bs-target="#exampleModal2">
        <div className="card">
          <img src={props.movie.Poster} onClick={() => props.handleSelect(props.movie)} className="card-img-top clickable" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.movie.Title}</h5>
            <p className="clickable" onClick={() => props.movieHandler(props.movie.id)}>Click to see details</p>
          </div>
        </div>
      </div>
    </>
  );
}

// eslint-disable-next-line react/no-typos
SingleCard.propTypes = {
  movie: PropTypes.object,
};

export default SingleCard;
