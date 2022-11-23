import "./Header.css";
import React from "react";
import headerLogo from "../../images/logoHeader.svg";
import { Link, useLocation } from "react-router-dom";
import icon from "../../images/icon-profile.svg";

function Header({ loggedIn, openMenu }) {
  const location = useLocation();
  const path = location.pathname === "/";

  return (
    <header className={!path ? "header" : "header header_type_promo"}>
      <Link to="/">
        <img className="header__logo" alt="лого" src={headerLogo} />
      </Link>
      {loggedIn ? (
        <>
          <button type="button" onClick={openMenu} className="header__menu-button" />
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
        </>
      ) : (
        <nav className="header__navigation header__navigation_type_promo">
          <Link
            to="/signup"
            className="header__button header__button_type_signup"
          >
            Регистрация
          </Link>
          <Link
            to="/signin"
            className="header__button header__button_type_signin"
          >
            Войти
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Header;
