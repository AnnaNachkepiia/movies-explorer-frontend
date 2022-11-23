import "./Profile.css";
import "../Login/Login.css";
import React, { useEffect, useState, useContext } from "react";
import Header from "../Header/Header";
import Validation from "../../utils/Validation";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { NAME_REGEX } from "../../utils/Consts";

function Profile({ handleUpdateUser, signOut, loggedIn, openMenu }) {
  const { values, handleChange, isValid, resetForm, errors } = Validation();
  const currentUser = useContext(CurrentUserContext);
  const newValue =
    currentUser.name !== values.name || currentUser.email !== values.email;

  useEffect(() => {
    resetForm(currentUser);
  }, [resetForm, currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
    if (isValid && newValue) {
      handleUpdateUser(values);
    }
  }

  return (
    <>
      <Header loggedIn={loggedIn} openMenu={openMenu} />
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
          <span className="login__text-error">{errors.name}</span>

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
          <span className="login__text-error">{errors.email}</span>
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
