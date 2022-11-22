import "./Profile.css";
import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import icon from "../../images/icon-profile.svg";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Validation from "../../utils/Validation";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { NAME_REGEX } from "../../utils/Consts";

function Profile({ handleUpdateUser, signOut }) {
  const { values, handleChange, isValid, resetForm } = Validation();
  const currentUser = useContext(CurrentUserContext);
  const [lastValues, setLastValues] = useState(false);

  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser);
    }
  }, [currentUser, resetForm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateUser(values);
  }

  // useEffect(() => {
  //   if (
  //     isValid &&
  //     currentUser.name === values.name &&
  //     currentUser.email === values.email
  //   ) {
  //     setLastValues(true);
  //   } else {
  //     setLastValues(false);
  //   }
  // }, [values]);

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
      <form className="profile" onSubmit={handleSubmit}>
        <h2 className="profile__title">Привет, {currentUser.name}!</h2>
        <div className="profile__info">
          <div className="profile__string">
            <label className="profile__input-label">Имя</label>
            <input
              className="profile__input"
              placeholder="Введите имя"
              id="name"
              type="text"
              name="name"
              value={values.name || ""}
              onChange={handleChange}
              minLength="2"
              maxLength="30"
              pattern={NAME_REGEX}
              required
            />
          </div>
          <div className="profile__line" />
          <div className="profile__string">
            <label className="profile__input-label">Email</label>
            <input
              className="profile__input"
              placeholder="Введите email"
              id="email"
              type="email"
              name="email"
              value={values.email || ""}
              onChange={handleChange}
              minLength="2"
              maxLength="30"
              required
            />
          </div>
        </div>
        <button
          disabled={!isValid}
          type="submit"
          className={
            isValid
              ? "profile__button profile__button_type_edit-active"
              : "profile__button profile__button_type_edit-disable"
          }
        >
          Редактировать
        </button>
        <button
          type="button"
          className="profile__button profile__button_type_signout"
          onClick={signOut}
        >
          Выйти из аккаунта
        </button>
      </form>
    </>
  );
}

export default Profile;
