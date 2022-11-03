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

function Movies({
  initialMovies,
  handleSubmit,
  savedMovies,
  handleSaveMovie,
  handleDeleteMovie,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [checked, setChecked] = useState(false);
  const [isMovieSaved, setIsMovieSaved] = useState(false);
  const [findMovies, setFindMovies] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState("");
  const [shortMovies, setShortMovies] = useState([]);
  const [count, setCount] = useState(6);

  useEffect(() => {
    if (isLoading) {
      const searchResults = initialMovies.filter((movie) => {
        const movieName =
          movie.nameRU.toLowerCase() && movie.nameEN.toLowerCase();
        return movieName.includes(searchQuery.toLowerCase());
      });

      if (searchResults.length < 1) {
        setNotFound(true);
      } else {
        setFindMovies(searchResults);
        localStorage.setItem("movies", JSON.stringify(searchResults));
        setNotFound(false);
      }
    }
    setTimeout(() => setIsLoading(false), 2000);
  }, [isLoading, initialMovies, searchQuery, setFindMovies]);

  useEffect(() => {
    if (checked) {
      const shorts = findMovies.filter((movie) => {
        return movie.duration <= 40;
      });
      setShortMovies(shorts);
    }
  }, [checked, findMovies, setShortMovies]);


//   useEffect(() => {
//     if (localStorage.getItem("movies")) {
//       const movies = JSON.parse(localStorage.getItem("movies"));
//       setFindMovies(movies);
//     }
//   }, []);

// useEffect(() => {
//   if(checked){
//     const shorts = JSON.parse(localStorage.getItem('checked'))
//     setShortMovies(shorts)
//   }
// }, [])

useEffect(() => {
localStorage.setItem('checked', checked)
}, [checked])

  // useEffect(() => {
  //   setError("");
  // }, [searchQuery]);

  function handleChange(e) {
    setSearchQuery(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    searchQuery ? setIsLoading(true) : setError("ошибка");
  }

  function handleToogleCheckBox() {
    setChecked(!checked);
  }

  function handleMoreMovies() {
    setCount(count + 3);
  }

  const renderMovies = () => {
    if (notFound) {
      return <p className="movie__search-message">ничего не найдено</p>;
    }
    return (
      <MoviesCardList
        movies={checked ? shortMovies : findMovies}
        savedMovies={savedMovies}
        count={count}
        handleMoreMovies={handleMoreMovies}
        handleSaveMovie={handleSaveMovie}
        handleDeleteMovie={handleDeleteMovie}
      />
    );
  };

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
        {isLoading ? <Preloader /> : renderMovies()}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
