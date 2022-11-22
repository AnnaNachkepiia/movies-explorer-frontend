import "./NavTab.css";
import React from "react";
import { Link } from "react-router-dom";
import AboutProject from "../AboutProject/AboutProject";

function NavTab() {
  return (
    <section className="nav-tab">
      <ul className="nav-tab__nav">
        <li className="nav-tab__item">
        <a className="nav-tab__link" href='#aboutproject' rel='noreferrer' >О проекте</a>
       </li>
       <li className="nav-tab__item">
        <a className="nav-tab__link" href='#techs' rel='noreferrer' >Технологии</a>
       </li><li className="nav-tab__item">
        <a className="nav-tab__link" href='#aboutme' rel='noreferrer' >Студент</a>
       </li>
      </ul>
    </section>
  );
}

export default NavTab;
