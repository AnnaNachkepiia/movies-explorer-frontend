import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard.js";

function MoviesCardList(props) {
  return (
    <section className="movies">
      <div className="movies__container">
      <MoviesCard>{props.children}</MoviesCard>
      </div>
    </section>
  );
}

export default MoviesCardList;
