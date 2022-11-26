import "./NotFound.css";
import React from "react";
import { Link, useHistory } from "react-router-dom";

function NotFound() {
  const history = useHistory();

  function handleGoBack() {
    history.goBack();

  }

  return (
    <section className="not-found">
      <h2 className="not-found__title">404</h2>
      <p className="not-fount__subtitle">Страница не найдена</p>
      <button type="button" onClick={handleGoBack} className="not-found__back">
        Назад
      </button>
    </section>
  );
}

export default NotFound;
