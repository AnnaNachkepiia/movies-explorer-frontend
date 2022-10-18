import "./Profile.css";
import React from "react";
import { Link } from "react-router-dom";
import icon from "../../images/icon-profile.svg";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";

function Profile() {
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
      <section className="profile">
        <h2 className="profile__title">Привет, Aнна!</h2>
        <div className="profile__info">
          <div className="profile__string">
            <p className="profile__string-capture">Имя</p>
            <p className="profile__string-meaning">Анна</p>
          </div>
          <div className="profile__line" />
          <div className="profile__string">
            <p className="profile__string-capture">E-mail</p>
            <p className="profile__string-meaning">test@test.com</p>
          </div>
        </div>
        <button
          type="submit"
          className="profile__button profile__button_type_edit"
        >
          Редактировать
        </button>
        <button
          type="submit"
          className="profile__button profile__button_type_signout"
        >
          Выйти из аккаунта
        </button>
      </section>
    </>
  );
}

export default Profile;
