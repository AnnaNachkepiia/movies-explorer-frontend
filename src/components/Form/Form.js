import "./Form.css";
import "../Login/Login.css";
import React from "react";
import { Link } from "react-router-dom";
import headerLogo from "../../images/logoHeader.svg";
import Validation from "../../utils/Validation";

function Form({title, children, buttonText, }) {
  function handleSubmit(e) {
    e.preventDefault();
    // onRegister(values);
  }

  return (
    <section className="form__container">
        <Link to='/'>
      <img className="form__logo" src={headerLogo} alt="лого" />
      </Link>
      <h2 className="form__title">{title}</h2>
      <form className="form" onSubmit={handleSubmit}>
        <p className="form__input-capture">Имя</p>
        <input
          className="form__input"
          type="text"
          name="name"
          id="name"
          // value={values.name || ""}
          // onChange={handleChange}
        />
        <p className="form__input-capture">E-mail</p>
        <input className="form__input" type="email" name="email" id="email" />
        <p className="form__input-capture ">Пароль</p>
        <input
          className="form__input form__input-error"
          type="password"
          name="pasword"
          id="password"
        />
        <span className="form__text-error">Что-то пошло не так...</span>
      </form>
      <button type="submit" className="form__button-submit">
        Зарегистрироваться
      </button>
      <p className="form__subtitle">
        Уже зарегистрированы?
        <Link to="/signin" className="form__link">
          Войти
        </Link>
      </p>
    </section>
  );
}

export default Form;