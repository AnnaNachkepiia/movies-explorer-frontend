import React, { useState } from "react";
import "./MoviesCardList.css";
import { useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard.js";

function MoviesCardList({
  movies,
  savedMovies,
  count,
  handleMoreMovies,
  handleSaveMovie,
  handleDeleteMovie,
}) {
  const shownMovies = movies.slice(0, count);

  return (
    <section className="movies">
      <div className="movies__container">
        <ul className="movies__cardlist">
          {shownMovies.map((movie) => (
            <MoviesCard
              key={movie.id || movie._id}
              movie={movie}
              savedMovies={savedMovies}
              handleSaveMovie={handleSaveMovie}
              handleDeleteMovie={handleDeleteMovie}
            />
          ))}
        </ul>
      </div>
      {movies.length > count ? (
        <button
          type="button"
          className="movies__button-more"
          onClick={handleMoreMovies}
        >
          <p className="movies__button-text">Ещё</p>
        </button>
      ) : (
        ""
      )}
    </section>
  );
}

export default MoviesCardList;
