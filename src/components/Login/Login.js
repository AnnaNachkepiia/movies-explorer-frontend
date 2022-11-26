import "./Login.css";
import React from "react";
import { Link } from "react-router-dom";
import headerLogo from "../../images/logoHeader.svg";
import Validation from "../../utils/Validation.js";
import { EMAIL_REGEX } from "../../utils/Consts";

function Login({ onLogin }) {
  const { values, errors, handleChange, isValid } = Validation();

  function handleSubmit(e) {
    e.preventDefault();
    onLogin(values);
  }

  return (
    <section className="login">
      <Link to="/">
        <img className="login__logo" src={headerLogo} alt="лого" />
      </Link>
      <h2 className="login__title">Рады видеть!</h2>
      <form className="login__form" onSubmit={handleSubmit}>
        <p className="login__input-capture">E-mail</p>
        <input
          className={`login__input ${
            isValid ? "login__input-valid" : "login__input-error"
          }`}
          type="email"
          name="email"
          id="email"
          value={values.email || ""}
          onChange={handleChange}
          pattern={EMAIL_REGEX}
          required
        />
        <span className="login__text-error">{errors.email}</span>
        <p className="login__input-capture">Пароль</p>
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
          Войти
        </button>
        <p className="login__subtitle">
          Ещё не зарегистрированы?
          <Link to="/signup" className="login__link">
            Регистрация
          </Link>
        </p>
      </form>
    </section>
  );
}

export default Login;
