import "./AboutProject.css";
import React from "react";

function AboutProject() {
  return (
    <section AboutProject className="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__line"></div>
      <ul className="about-project__container">
        <li className="about-project__text-box">
          <p className="about-project__subtitle">
            Дипломный проект включал 5 этапов
          </p>
          <p className="about-project__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className="about-project__text-box">
          <p className="about-project__subtitle">
            На выполнение диплома ушло 5 недель
          </p>
          <p className="about-project__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <ul className="about-project__scheme">
        <li className="about-project__scheme-box about-project__scheme-box_type_black">
          <div className="about-project__black-part">
            <p className="about-project__scheme-text about-project__scheme-text_type_black">
              1 неделя
            </p>
          </div>
          <p className="about-project__project-capture">
          Back-end
          </p>
        </li>
        <li className="about-project__scheme-box about-project__scheme-box_type_grey">
          <div className="about-project__grey-part">
            <p className="about-project__scheme-text about-project__scheme-text_type_grey">
              4 недели
            </p>
          </div>
          <p className="about-project__project-capture">
          Front-end
          </p>
        </li>
      </ul>
    </section>
  );
}

export default AboutProject;
