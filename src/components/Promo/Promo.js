import React from "react";
import "./Promo.css";
import LogoPraktikum from "../../images/landing_logo.svg";

function Promo() {
  return (
    <section className="promo">
        <h1 className="promo__title">
          Учебный проект студента<br/>факультета Веб-разработки.
        </h1>
        <img
          className="promo__logo"
          src={LogoPraktikum}
          alt="лого практикум"
        ></img>
    </section>
  );
}

export default Promo;
