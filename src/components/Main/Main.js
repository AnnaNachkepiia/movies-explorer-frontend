import "./Main.css";
import "../Header/Header.css";
import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Promo from "../Promo/Promo.js";
import AboutProject from "../AboutProject/AboutProject.js";
import NavTab from "../NavTab/NavTab";
import Techs from "../Techs/Techs.js";
import AboutMe from "../AboutMe/AboutMe.js";
import Portfolio from "../Portfolio/Portfolio.js";

function Main() {
  return (
    <>
      <Header className="header header_type_promo">
        <nav className="header__navigation header__navigation_type_promo">
          <Link
            to="/signup"
            className="header__button header__button_type_signup"
          >
            Регистрация
          </Link>
          <Link
            to="/signin"
            className="header__button header__button_type_signin"
          >
            Войти
          </Link>
        </nav>
      </Header>
      <main className="main">
        <Promo />
        <NavTab />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}
export default Main;
