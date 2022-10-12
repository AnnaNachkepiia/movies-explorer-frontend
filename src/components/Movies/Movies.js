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
      <MoviesCardList />

     
    </section>
  );
}

export default Movies;
