import "./Movies.css";
import React from "react";
import SearchForm from "../SearchForm/SearchForm.js";
import Preloader from "../Preloader/Preloader.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";

function Movies() {
  return (
    <section>
      <SearchForm />
      <Preloader />
      <MoviesCardList>
        <button className="movie__save movie__save_type_invisible" />
      </MoviesCardList>
      <button type="submit" className="movies__button-more">
        <p className="movies__button-text">Ещё</p>
      </button>
    </section>
  );
}

export default Movies;
