import "./AboutMe.css";
import React from "react";
import studentsPhoto from "../../images/IMG_4332 2.jpeg";

function AboutMe() {
  return (
    <section className="aboutme">
      <h2 className="aboutme__title">Студент</h2>
      <div className="aboutme__line"></div>
      <div className="aboutme__container">
        <div className="aboutme__text-block">
          <h3 className="aboutme__name">Анна Начкепия</h3>
          <p className="aboutme__subtitle">Фронтенд-разработчик, 31 год</p>
          <p className="aboutme__text">
            Я живу в Курортном районе Санкт-Петербурга. Люблю путешествовать и
            играть в большой теннис. По образованию я дизайнер-ювелир и всегда
            интересовалась искусством. Закончила курс Яндекс.Практикума по
            веб-разработке и спешу ворваться в новую профессию. А еще я мама
            мальчиков-близнецов и они здорово задают темп всех моих дел.
          </p>
          <a
            href="https://github.com/AnnaNachkepiia"
            target="_blank"
            className="aboutme__link"
          >
            Github
          </a>
        </div>
        <img className="aboutme__photo" alt="фото" src={studentsPhoto}></img>
      </div>
    </section>
  );
}

export default AboutMe;
