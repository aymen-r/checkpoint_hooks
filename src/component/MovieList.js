import React from "react";
import MovieCard from "./MovieCard";

// import "./MovieList.css";

const MovieList = ({ movies, search, rate }) => {
  return (
    <div className="movieList">
      {movies
        .filter(
          (el) =>
            el.title.toLowerCase().includes(search.toLowerCase().trim()) &&
            el.rating >= rate
        )
        .map((movie, i) => (
          <MovieCard key={i} movie={movie} />
        ))}
    </div>
  );
};

export default MovieList;
