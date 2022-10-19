import "./Movies.css";
import "../Header/Header.css";
import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm.js";
import Preloader from "../Preloader/Preloader.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import icon from "../../images/icon-profile.svg";
import Navigation from "../Navigation/Navigation";

function Movies() {
  return (
    <>
      <Navigation />
      <Header className="header ">
        <button type="button" className="header__menu-button"/>
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
        <SearchForm />
        <Preloader />
        <MoviesCardList>
          <button className="movie__save movie__save_type_invisible" />
        </MoviesCardList>
        <button type="submit" className="movies__button-more">
          <p className="movies__button-text">Ещё</p>
        </button>
      </main>
      <Footer />
    </>
  );
}

export default Movies;
