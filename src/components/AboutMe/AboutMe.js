import "./AboutMe.css";
import React from "react";
import studentsPhoto from "../../images/picStudent.png";

function AboutMe() {
  return (
    <section className="aboutme">
      <h2 className="aboutme__title">Студент</h2>
      <div className="aboutme__line"></div>
      <div className="aboutme__container">
        <div className="aboutme__text-block">
          <h3 className="aboutme__name">Анна Начкепия</h3>
          <p className="aboutme__subtitle">Фронтенд-разработчик, 30 лет</p>
          <p className="aboutme__text">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
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
