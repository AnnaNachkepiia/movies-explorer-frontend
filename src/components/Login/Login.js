import "./Login.css";
import React from "react";
import { Link } from "react-router-dom";
import headerLogo from "../../images/logoHeader.svg";


function Login() {
  return (
    <section className="login">
      <img className="login__logo" src={headerLogo} alt="лого"/>
      <h2 className="login__title">Рады видеть!</h2>
      <form className="login__form">
        <p className="login__input-capture">E-mail</p>
        <input
          className="login__input"
          type="email"
          name="email"
          id="email"
        />
        <p className="login__input-capture">Пароль</p>
        <input
          className="login__input"
          type="password"
          name="pasword"
          id="password"
        />
      </form>
      <button type="submit" className="login__button-submit">
        Войти
      </button>
      <p className="login__subtitle">
        Ещё не зарегистрированы?
        <Link to="/signup" className="login__link">
          Регистрация
        </Link>
      </p>
    </section>
  );
}

export default Login;
