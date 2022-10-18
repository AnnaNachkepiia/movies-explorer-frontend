import "./SavedMovies.css";
import "../Header/Header.css";
import React from "react";
import { Link } from "react-router-dom";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import icon from "../../images/icon-profile.svg";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";

function SavedMovies() {
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
      <section>
        <SearchForm />
        <Preloader />
        <MoviesCardList>
          <button className="movie__delete" />
        </MoviesCardList>
      </section>
      <Footer />
    </>
  );
}

export default SavedMovies;
