import "./NavTab.css";
import React from "react";
import { Link } from "react-router-dom";
import AboutProject from "../AboutProject/AboutProject";

function NavTab() {
  return (
    <section className="nav-tab">
      <ul className="nav-tab__nav">
        <li className="nav-tab__link">О проекте</li>
        <li className="nav-tab__link">Технологии</li>
        <li className="nav-tab__link">Студент</li>
      </ul>
    </section>
  );
}

export default NavTab;
