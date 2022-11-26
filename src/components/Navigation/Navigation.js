import "./Navigation.css";
import React from "react";
import { Link } from "react-router-dom";
import icon from "../../images/icon-profile.svg";
import { NavLink } from "react-router-dom";

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
          <NavLink
            to="/"
            className="navigation__link"
            activeClassName="navigation__link-checked"
          >
            Главная
          </NavLink>
          <NavLink
            to="/movies"
            className="navigation__link"
            activeClassName="navigation__link-checked"
          >
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            className="navigation__link"
            activeClassName="navigation__link-checked"
          >
            Сохранённые фильмы
          </NavLink>
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
