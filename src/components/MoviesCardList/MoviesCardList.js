import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard.js";

function MoviesCardList(card) {
  return (
    <section className="movies">
          <MoviesCard/>
    </section>
  );
}

export default MoviesCardList;
