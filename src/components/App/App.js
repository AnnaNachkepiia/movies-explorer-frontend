import "./App.css";
import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Header from "../Header/Header.js";
import Main from "../Main/Main.js";
import Footer from "../Footer/Footer.js";
import Movies from "../Movies/Movies.js";
import SavedMovies from "../SavedMovies/SavedMovies.js";
import Profile from "../Profile/Profile.js";
import Login from "../Login/Login.js";
import Register from "../Register/Register.js";
import NotFound from "../NotFound/NotFound.js";
import icon from "../../images/icon-profile.svg";

function App() {
  return (
    <div className="page">
      <div className="page__container">
        <Switch>
          <Route exact path="/">
            <Header className="header header_type_promo">
              <nav className="header__navigation">
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
            <Main />
            <Footer />
          </Route>

          <Route path="/movies">
            <Header className="header ">
              <nav className="header__navigation">
                <Link
                  to="/movies"
                  className="header__button header__button_type_movies"
                >
                  Фильмы
                </Link>
                <Link
                  to="/saved-movies"
                  className="header__button header__button_type_saved-movies"
                >
                  Сохранённые фильмы
                </Link>
                <Link
                  to="/profile"
                  className="header__button header__button_type_profile"
                >
                  <img
                    className="header__profile-icon"
                    alt="иконка профиль"
                    src={icon}
                  ></img>
                  <p className="header__profile-button-name">Аккаунт</p>
                </Link>
              </nav>
            </Header>
            <Movies />
            <Footer />
          </Route>
          {/* <Route path="/saved-movies">
            <SavedMovies />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/signin">
            <Login />
          </Route>
          <Route path="/signup">
            <Register />
          </Route>
          <Route path="*">
            <NotFound />
          </Route> */}
        </Switch>
      </div>
    </div>
  );
}

export default App;
