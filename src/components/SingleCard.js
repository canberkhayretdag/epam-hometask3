import React from "react";
import PropTypes from 'prop-types';

function SingleCard(props) {
  return (
    <div className="col">
      <div className="card">
        <img src={props.movie.Poster} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.movie.Title}</h5>
        </div>
      </div>
    </div>
  );
}

// eslint-disable-next-line react/no-typos
SingleCard.propTypes = {
    movie: PropTypes.object,
}

export default SingleCard;
