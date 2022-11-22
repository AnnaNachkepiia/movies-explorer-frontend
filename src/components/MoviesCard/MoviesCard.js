import "./MoviesCard.css";
import React from "react";
import { useLocation } from "react-router-dom";

function MoviesCard({
  movie,
  savedMovies,
  handleSaveMovie,
  handleDeleteMovie,
}) {
  const imgUrl = `${"https://api.nomoreparties.co"}${movie.image.url}`;
  const savedMovie = savedMovies.find((i) => i.movieId === movie.id);
  const location = useLocation();
  const pathMovies = ["/movies"];
  const path = pathMovies.includes(location.pathname);
  const buttonSaveClassName = `movie__save ${
    savedMovie ? "movie__save_type_visible" : "movie__save_type_invisible"
  }`;

  function handleToogleClick() {
    if (savedMovie) {
      handleDeleteMovie(savedMovie);
    } else {
      handleSaveMovie(movie);
    }
  }

  function handleDeleteClick() {
    handleDeleteMovie(movie);
  }

  const movieDuration = () => {
    const hours = Math.floor(movie.duration / 60);
    const minutes = movie.duration % 60;
    if (hours > 0) {
      return `${hours}ч${minutes}м`;
    } else {
      return `${minutes}м`;
    }
  };

  return (
    <li className="movie">
      <a
        className="movie__picture"
        href={movie.trailerLink}
        target="_blank"
        alt="фильм"
      >
        <img className="movie__picture" src={imgUrl} alt={movie.nameRU} />
      </a>
      <div className="movie__info">
        <div className="movie__description">
          <p className="movie__name">{movie.nameRU}</p>
          <p className="movie__duration">{movieDuration(movie.duration)}</p>
        </div>
        {path ? (
          <button
            type="submit"
            className={buttonSaveClassName}
            onClick={handleToogleClick}
          />
        ) : (
          <button
            type="submit"
            className="movie__delete"
            onClick={handleDeleteClick}
          />
        )}
      </div>
    </li>
  );
}
export default MoviesCard;
