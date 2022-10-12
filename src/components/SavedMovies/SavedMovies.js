import "./SavedMovies.css";
import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies() {
  return (
    <section>
      <SearchForm />
      <Preloader />
      <MoviesCardList>
        <button className="movie__delete" />
      </MoviesCardList>
    </section>
  );
}

export default SavedMovies;
