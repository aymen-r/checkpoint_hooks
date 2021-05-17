import React, { useState } from "react";
import { data } from "./Data";
import { SearchTitle, SearchRating } from "./component/filter";
import { NewMovie } from "./component/newmovie";
import MovieList from "./component/MovieList";
import "./App.css";

function App() {
  const [moviesList, setMoviesList] = useState(data);
  // search by rating:
  const [searchrating, setSearchRating] = useState(1);

  // search for movies with title:
  const [searchTitle, setSearchTitle] = useState("");
  const handlesearch = (x) => setSearchTitle(x);

  // add a new movie:
  const addMovie = (a) => {
    setMoviesList([...moviesList, a]);
  };

  return (
    <>
      <div className="App">
        <SearchRating rating={searchrating} setRating={setSearchRating} />
        <SearchTitle handlesearch={handlesearch} />
      </div>
      <div className="movieList">
        <MovieList
          movies={moviesList}
          search={searchTitle}
          rate={searchrating}
        />
        <NewMovie addNewMovie={addMovie} />
      </div>
    </>
  );
}

export default App;
