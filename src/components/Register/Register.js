import "./Register.css";
import "../Login/Login.css";
import React from "react";
import { Link } from "react-router-dom";
import headerLogo from "../../images/logoHeader.svg";

function Register() {
  return (
    <section className="login">
      <img className="login__logo" src={headerLogo} alt="лого" />
      <h2 className="login__title">Добро пожаловать!</h2>
      <form className="login__form">
        <p className="login__input-capture">Имя</p>
        <input
          className="login__input"
          type="text"
          name="name"
          id="name"
        />
        <p className="login__input-capture">E-mail</p>
        <input
          className="login__input"
          type="email"
          name="email"
          id="email"
        />
        <p className="login__input-capture ">Пароль</p>
        <input
          className="login__input login__input-error"
          type="password"
          name="pasword"
          id="password"
        />
        <span className="login__text-error">Что-то пошло не так...</span>
      </form>
      <button type="submit" className="login__button-submit">
      Зарегистрироваться
      </button>
      <p className="login__subtitle">
        Уже зарегистрированы?
        <Link to="/signin" className="login__link">
          Войти
        </Link>
      </p>
    </section>
  );
}

export default Register;
