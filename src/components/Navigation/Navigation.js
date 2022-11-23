import "./Navigation.css";
import React from "react";
import { Link } from "react-router-dom";
import icon from "../../images/icon-profile.svg";

function Navigation({ isOpen, onClose }) {
  return (
    <section className={`navigation ${isOpen && "navigation_is-opened"}`}>
      <div className="navigation__container">
        <button
          type="button"
          onClick={onClose}
          className="navigation__close-button"
        />
        <nav className="navigation__links">
          <Link to="/" className="navigation__link">
            Главная
          </Link>
          <Link
            to="/movies"
            className="navigation__link navigation__link-checked"
          >
            Фильмы
          </Link>
          <Link to="/saved-movies" className="navigation__link">
            Сохранённые фильмы
          </Link>
          <Link to="/profile" className="navigation__button-profile">
            <img
              className="header__profile-icon"
              alt="иконка профиль"
              src={icon}
            ></img>
            <p className="header__profile-button-name">Аккаунт</p>
          </Link>
        </nav>
      </div>
    </section>
  );
}

export default Navigation;
