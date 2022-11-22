import "./Techs.css";
import React from "react";

function Techs() {
  return (
    <section id="techs" className="techs">
      <h2 className="techs__title">Технологии</h2>
      <div className="techs__line"></div>
      <div className="techs__container">
        <h3 className="techs__container-title">7 технологий</h3>
        <p className="techs__container-subtitle">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <ul className="techs__container-list">
          <li className="techs__container-block">
            <p className="techs__container-block-name">HTML</p>
          </li>
          <li className="techs__container-block">
            <p className="techs__container-block-name">CSS</p>
          </li>
          <li className="techs__container-block">
            <p className="techs__container-block-name">JS</p>
          </li>
          <li className="techs__container-block">
            <p className="techs__container-block-name">React</p>
          </li>
          <li className="techs__container-block">
            <p className="techs__container-block-name">Git</p>
          </li>
          <li className="techs__container-block">
            <p className="techs__container-block-name">Express.js</p>
          </li>
          <li className="techs__container-block">
            <p className="techs__container-block-name">mongoDB</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Techs;
