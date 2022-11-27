import "./Register.css";
import "../Login/Login.css";
import React from "react";
import { Link } from "react-router-dom";
import headerLogo from "../../images/logoHeader.svg";
import Validation from "../../utils/Validation.js";
import { NAME_REGEX, EMAIL_REGEX } from "../../utils/Consts.js";

function Register({ onRegister }) {
  const { values, errors, handleChange, isValid } = Validation();

  function handleSubmit(e) {
    e.preventDefault();
    onRegister(values);
  }

  return (
    <section className="login">
      <Link to="/">
        <img className="login__logo" src={headerLogo} alt="лого" />
      </Link>
      <h2 className="login__title">Добро пожаловать!</h2>
      <form className="login__form" onSubmit={handleSubmit}>
        <p className="login__input-capture">Имя</p>
        <input
          className={`login__input ${
            isValid ? "login__input-valid" : "login__input-error"
          }`}
          type="text"
          name="name"
          id="name"
          minLength="2"
          maxLength="30"
          value={values.name || ""}
          onChange={handleChange}
          required
          pattern="^[A-Za-zА-Яа-яЁё /s -]+$"
        />
        <span className="login__text-error">{errors.name}</span>

        <p className="login__input-capture">E-mail</p>
        <input
          className={`login__input ${
            isValid ? "login__input-valid" : "login__input-error"
          }`}
          type="email"
          name="email"
          id="email"
          minLength="2"
          maxLength="30"
          value={values.email || ""}
          onChange={handleChange}
          pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
          required
        />
        <span className="login__text-error">{errors.email}</span>

        <p className="login__input-capture ">Пароль</p>
        <input
          className={`login__input ${
            isValid ? "login__input-valid" : "login__input-error"
          }`}
          type="password"
          name="password"
          id="password"
          value={values.password || ""}
          onChange={handleChange}
          minLength="8"
          maxLength="30"
          required
        />
        <span className="login__text-error">{errors.password}</span>

        <button
          type="submit"
          className={`login__button-submit ${
            isValid ? "login__button-active" : "login__button-disabled"
          }`}
        >
          Зарегистрироваться
        </button>
        <p className="login__subtitle">
          Уже зарегистрированы?
          <Link to="/signin" className="login__link">
            Войти
          </Link>
        </p>
      </form>
    </section>
  );
}

export default Register;
