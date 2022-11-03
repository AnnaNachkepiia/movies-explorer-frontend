import "./App.css";
import React, { useEffect, useState } from "react";
import { Route, Switch, Link, useHistory } from "react-router-dom";
import Main from "../Main/Main.js";
import Movies from "../Movies/Movies.js";
import SavedMovies from "../SavedMovies/SavedMovies.js";
import Profile from "../Profile/Profile.js";
import Login from "../Login/Login.js";
import Register from "../Register/Register.js";
import NotFound from "../NotFound/NotFound.js";
import * as moviesApi from "../../utils/MoviesApi";
import * as api from "../../utils/MainApi";

function App() {
  const [initialMovies, setInitialMovies] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [name, setName] = useState("");
  const [savedMovies, setSavedMovies] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [submited, setSubmited] = useState(false);
  const history = useHistory();

  useEffect(() => {
    function tokenCheck() {
      const jwt = localStorage.getItem("token");
      if (jwt) {
        api.getContent(jwt).then((res) => {
          if (res) {
            setLoggedIn(true);
            setName(res.name);
            history.push("/");
          }
        });
      }
    }
    tokenCheck();
  }, [history]);

  useEffect(() => {
    // if(loggedIn){
    // if (loggedIn && initialMovies.length < 1) {
    moviesApi
      .getMovies()
      .then((data) => {
        setInitialMovies(data);
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage(
          "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
        );
        // if (err.includes(401)) {
        //   // setMessage(AUTH_ERROR);
        //   // setLoggedIn(false);
        //   localStorage.clear();
        // } else {

        // }
      });
    // }
  }, [initialMovies, setInitialMovies]);

  function handleSaveMovie(movie) {
    api
      .saveMovie(movie)
      .then((newMovie) => {
        setSavedMovies([newMovie, ...savedMovies]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleDeleteMovie(movie) {
    const movieId = movie._id;
    api
      .deleteMovie(movieId)
      .then(() => {
        const newUserMovies = savedMovies.filter((i) => i._id !== movieId && i);
        setSavedMovies(newUserMovies);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleLogin({ email, password }) {
    api
      .login({ email, password })
      .then((res) => {
        if (res) {
          setLoggedIn(true);
          localStorage.setItem("jwt", res.token);
          history.push("./movies");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleRegister() {}

  return (
    <div className="page">
      <div className="page__container">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/movies">
            <Movies
              initialMovies={initialMovies}
              savedMovies={savedMovies}
              handleSaveMovie={handleSaveMovie}
              handleDeleteMovie={handleDeleteMovie}
              handleSubmit={submited}
            />
          </Route>
          <Route path="/saved-movies">
            <SavedMovies />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/signin">
            <Login onLogin={handleLogin} />
          </Route>
          <Route path="/signup">
            <Register onRegister={handleRegister} />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
