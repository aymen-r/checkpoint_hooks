import React from "react";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  const { title, description, posterURL, rating, year, length, type } = movie;
  return (
    <div className="wrapper">
      <div className="main_card">
        <div className="card_left">
          <div className="card_datails">
            <h1>{title}</h1>
            <div className="card_cat">
              <p className="PG">PG - 13</p>
              <p className="year">{year}</p>
              <p className="genre">{type} </p>
              <p className="time">{length}</p>
            </div>
            <p className="disc">{description}</p>

            <div className="social-btn">
              <button>
                <i className="fas fa-play"></i> SEE TRAILER
              </button>

              <button>
                <i className="fas fa-download"></i> DOWNLOAD
              </button>

              <button>
                <i className="fas fa-thumbs-up"></i>
                {rating}/5
              </button>
            </div>
          </div>
        </div>
        <div className="card_right">
          <div className="img_container">
            <img src={posterURL} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
