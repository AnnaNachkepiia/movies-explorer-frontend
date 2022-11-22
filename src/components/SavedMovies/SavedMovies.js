import "./SavedMovies.css";
import "../Header/Header.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import icon from "../../images/icon-profile.svg";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";

function SavedMovies({ savedMovies, handleDeleteMovie }) {
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [findMovies, setFindMovies] = useState([]);
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState("");
  const [shortMovies, setShortMovies] = useState([]);
  const [found, setFound] = useState(true);

  console.log(savedMovies.image);

  useEffect(
    (data) => {
      setFindMovies(savedMovies);
      console.log(savedMovies.image);
    },
    [savedMovies]
  );

  useEffect(() => {
    if (checked) {
      const shortMovies = findMovies.filter((movie) => {
        return movie.duration <= 40;
      });

      setShortMovies(shortMovies);
    }
  }, [checked, findMovies, setShortMovies]);

  useEffect(() => {
    if (isLoading) {
      const searchResults = savedMovies.filter((movie) => {
        const movieName = movie.nameRU.toLowerCase();
        return movieName.includes(searchQuery.toLowerCase());
      });

      if (searchResults.length < 1) {
        setFound(false);
      } else {
        setFindMovies(searchResults);
        setFound(true);
      }
    }
    setTimeout(() => setIsLoading(false), 2000);
  }, [isLoading, savedMovies, searchQuery, setFindMovies]);

  function handleSubmit(e) {
    e.preventDefault();
    searchQuery ? setIsLoading(true) : setError("Введите ключевое слово");
  }
  function handleToogleCheckBox() {
    setChecked(!checked);
  }

  function handleChange(e) {
    setSearchQuery(e.target.value);
  }

  return (
    <>
      <Navigation />
      <Header className="header ">
        <button type="button" className="header__menu-button" />
        <nav className="header__navigation header__navigation_type_user">
          <Link
            to="/movies"
            className="header__button header__button_type_movies"
          >
            Фильмы
          </Link>
          <Link
            to="/saved-movies"
            className="header__button header__button_type_saved-movies"
          >
            Сохранённые фильмы
          </Link>
          <Link
            to="/profile"
            className="header__button header__button_type_profile"
          >
            <img
              className="header__profile-icon"
              alt="иконка профиль"
              src={icon}
            ></img>
            <p className="header__profile-button-name">Аккаунт</p>
          </Link>
        </nav>
      </Header>
      <main>
        <SearchForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          searchQuery={searchQuery}
          handleToogleCheckBox={handleToogleCheckBox}
          checked={checked}
        />
        {isLoading ? (
          <Preloader />
        ) : found ? (
          <MoviesCardList
            movies={checked ? shortMovies : findMovies}
            savedMovies={savedMovies}
            handleDeleteMovie={handleDeleteMovie}
          />
        ) : (
          <p className="movie__search-message">ничего не найдено</p>
        )}
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
