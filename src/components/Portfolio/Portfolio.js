import "./Portfolio.css";
import React from "react";
import arrow from "../../images/arrow.svg";

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__links">
        <li>
          <a
            className="portfolio__link"
            target="blank"
            href="https://github.com/AnnaNachkepiia/how-to-learn"
          >
            <p className="portfolio__text">Статичный сайт</p>
            <img className="portfolio__arrow" alt="стрелка" src={arrow}></img>
          </a>
          <div className="portfolio__line"></div>
        </li>
        <li className="portfolio__link-box">
          <a
            className="portfolio__link"
            target="blank"
            href="https://annanachkepiia.github.io/travel-Nachkepiia/"
          >
            <p className="portfolio__text">Адаптивный сайт</p>
            <img className="portfolio__arrow" alt="стрелка" src={arrow}></img>
          </a>
          <div className="portfolio__line"></div>
        </li>
        <li className="portfolio__link-box">
          <a
            className="portfolio__link"
            target="blank"
            href="https://github.com/AnnaNachkepiia/react-mesto-api-full"
          >
            <p className="portfolio__text">Одностраничное приложение</p>
            <img className="portfolio__arrow" alt="стрелка" src={arrow}></img>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
