import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard.js";

function MoviesCardList(props) {
  return (
    <section className="movies">
      <MoviesCard>{props.children}</MoviesCard>
    </section>
  );
}

export default MoviesCardList;
