import "./Movies.css";
import "../Header/Header.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm.js";
import Preloader from "../Preloader/Preloader.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import icon from "../../images/icon-profile.svg";
import Navigation from "../Navigation/Navigation";

function Movies({ initialMovies, savedMovies, handleSaveMovie, handleDeleteMovie }) {
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [findMovies, setFindMovies] = useState([]);
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState('');
  const [shortMovies, setShortMovies] = useState([]);
  const [found, setFound] = useState(true);
  const [count, setCount] = useState(12);
  const width = window.innerWidth;


  useEffect(() => {
    if (isLoading) {
      JSON.parse(localStorage.getItem("searchMovies"));
      searchMovie(searchQuery)
    }
    setTimeout(() => setIsLoading(false), 2000);
  }, [isLoading, initialMovies, searchQuery, setFindMovies]);



function searchMovie (query) {
  const searchResults = initialMovies.filter((movie) => {
    const movieName = movie.nameRU.toLowerCase();

    return movieName.includes(query.toLowerCase());
  });
  if (searchResults.length < 1) {
    setFound(false);
  } else {
    setFindMovies(searchResults);
    setFound(true);
    localStorage.setItem('searchMovies' ,JSON.stringify(searchResults))
  }
}
useEffect(() => {
  if (localStorage.getItem('searchMovies')) {
    const movies = JSON.parse(localStorage.getItem('searchMovies'));
    setFindMovies(movies);
  }
}, []);

useEffect(() => {
  if (width >= 1024) {
    setCount(12);
  }
  if (width < 1024 && width >= 800) {
    setCount(8);
  }
  if (width < 800) {
    setCount(5);
  }
}, [width]);

  useEffect(() => {
    setError('');
  }, [searchQuery]);

  useEffect(() => {
    if (checked) {
      const shortMovies = findMovies.filter((movie) => {
        return movie.duration <= 40;
      });

      setShortMovies(shortMovies);
    }
  }, [checked, findMovies, setShortMovies]);

  

  function handleChange(e) {
    setSearchQuery(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    searchQuery ? setIsLoading(true) : setError('Введите ключевое слово');
  }

   function handleToogleCheckBox() {
    setChecked(!checked);
    localStorage.setItem('savedChecked', !checked);
  }

  function handleMoreMovies() {
    if (width >= 1024) {
      setCount(count + 3);
    } else {
      setCount(count + 2);
    }
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
            count={count}
            handleMoreMovies={handleMoreMovies}
            handleSaveMovie={handleSaveMovie}
            handleDeleteMovie={handleDeleteMovie}
          />
        ) : (
          <p className="movie__search-message">Ничего не найдено</p>
        )}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
