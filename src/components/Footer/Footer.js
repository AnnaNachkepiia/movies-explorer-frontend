import "./Footer.css";
import React from "react";

function Footer() {
  const date = new Date();
  return (
    <footer className="footer">
      <p className="footer__text">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__line"></div>
      <div className="footer__nav-bar">
        <p className="footer__copyright"> ©{date.getFullYear()}</p>
        <nav className="footer__links">
          <a
            className="footer__link"
            target="_blank"
            href="https://practicum.yandex.ru/"
          >
            Яндекс.Практикум
          </a>
          <a
            className="footer__link"
            target="_blank"
            href="https://github.com/"
          >
            Github
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
