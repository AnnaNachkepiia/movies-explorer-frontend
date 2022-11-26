import "./App.css";
import React, { useEffect, useState } from "react";
import {
  Route,
  Switch,
  useHistory,
  Redirect,
  useLocation,
} from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Main from "../Main/Main.js";
import Movies from "../Movies/Movies.js";
import SavedMovies from "../SavedMovies/SavedMovies.js";
import Profile from "../Profile/Profile.js";
import Login from "../Login/Login.js";
import Register from "../Register/Register.js";
import NotFound from "../NotFound/NotFound.js";
import * as moviesApi from "../../utils/MoviesApi";
import * as api from "../../utils/MainApi";
import ProtectedRoute from "../../utils/ProtectedRoute.js";
import InfoTooltip from "../InfoTooltip/InfoTooltip.js";
import Navigation from "../Navigation/Navigation";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [initialMovies, setInitialMovies] = useState(
    JSON.parse(localStorage.getItem("allMovies")),
    []
  );
  const [savedMovies, setSavedMovies] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isInfoTooltipOpen, setInfoTooltipOpen] = useState(false);
  const [successAction, setSuccessAction] = useState(false);
  const [tooltipMessage, setTooltipMessage] = useState("");
  const history = useHistory();
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      api
        .getContent(token)
        .then((data) => {
          setCurrentUser(data);
          setLoggedIn(true);
          history.push(path);
        })

        .catch((err) => {
          handleLogout(err);
          console.log(err);
        });
    }
  }, [setLoggedIn, loggedIn]);

  useEffect(() => {
    if (loggedIn) {
      moviesApi
        .getMovies()
        .then((data) => {
          localStorage.setItem("allMovies", JSON.stringify(data));
          setInitialMovies(data);
          JSON.parse(localStorage.getItem("allMovies"));
        })
        .catch((err) => {
          console.log(err);
          setInfoTooltipOpen(true);
          setSuccessAction(false);
          setTooltipMessage(
            "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
          );
          setTimeout(() => setInfoTooltipOpen(false), 1500);
        });
    }
  }, [loggedIn, history]);

  useEffect(() => {
    if (loggedIn) {
      api
        .getSavedMovies()
        .then((data) => {
          localStorage.setItem("savedMovies", JSON.stringify(data));
          setSavedMovies(data);
          JSON.parse(localStorage.getItem("savedMovies"));
        })
        .catch((err) => {
          console.log(err);
          handleLogout(err);
        });
    }
  }, [loggedIn]);

  function handleLogout(err) {
    if (err.includes(401)) {
      signOut();
    }
  }

  function handleRegister({ name, email, password }) {
    api
      .register({ name, email, password })
      .then(() => {
        setInfoTooltipOpen(true);
        setSuccessAction(true);
        setTooltipMessage("Вы успешно зарегистрировались!");
        setTimeout(() => setInfoTooltipOpen(false), 1500);
        handleLogin({ email, password });
      })
      .catch((err) => {
        setInfoTooltipOpen(true);
        setSuccessAction(false);
        if (err.includes(409)) {
          setTooltipMessage("Пользователь с таким email уже существует");
          setTimeout(() => setInfoTooltipOpen(false), 1500);
        }
        console.log(err);
      });
  }

  function handleLogin({ email, password }) {
    api
      .login({ email, password })
      .then(({ token }) => {
        if (token) {
          localStorage.setItem("token", token);
          setLoggedIn(true);
          getUserData();
          history.push("/movies");
        }
      })
      .catch((err) => {
        setInfoTooltipOpen(true);
        setSuccessAction(false);
        if (err.includes(401)) {
          setTooltipMessage("Неправильные почта или пароль");
          setTimeout(() => setInfoTooltipOpen(false), 1500);
        }
        console.log(err);
      });
  }

  function getUserData() {
    api
      .getUserData()
      .then(({ email, name }) => {
        setCurrentUser({ email, name });
      })
      .catch((err) => {
        handleLogout(err);
        console.log(err);
      });
  }

  const handleUpdateUser = (data) => {
    console.log(data);
    api
      .editUserData(data)
      .then(() => {
        setCurrentUser(data);
        console.log(currentUser);
        setInfoTooltipOpen(true);
        setSuccessAction(true);
        setTooltipMessage("Данные пользователя обновлены.");
        setTimeout(() => setInfoTooltipOpen(false), 1500);
      })
      .catch((err) => {
        handleLogout(err);
        console.log(err);
      });
  };

  function signOut() {
    setLoggedIn(false);
    localStorage.removeItem("searchMovies");
    localStorage.removeItem("token");
    localStorage.removeItem("checked");
    history.push("/");
  }

  function handleSaveMovie(movie) {
    api
      .saveMovie(movie)
      .then((newMovie) => {
        setSavedMovies([newMovie, ...savedMovies]);
        console.log(newMovie.image);
      })
      .catch((err) => {
        handleLogout(err);
        console.log(err);
      });
  }

  function handleDeleteMovie(movie) {
    const movieId = movie._id;
    api
      .deleteMovie(movieId)
      .then(() => {
        setSavedMovies(savedMovies.filter((i) => i._id !== movieId));
      })
      .catch((err) => {
        handleLogout(err);
        console.log(err);
      });
  }

  function openMenu() {
    setMenuOpen(true);
  }

  function closeAllPopups() {
    setInfoTooltipOpen(false);
    setMenuOpen(false);
  }
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__container">
          <Switch>
            <Route exact path="/">
              <Main loggedIn={loggedIn} openMenu={openMenu} />
            </Route>
            <Route path="/signin">
              {loggedIn ? (
                <Redirect to="/movies" />
              ) : (
                <Login onLogin={handleLogin} />
              )}
            </Route>
            <Route path="/signup">
              {loggedIn ? (
                <Redirect to="/movies" />
              ) : (
                <Register onRegister={handleRegister} />
              )}
            </Route>
            <ProtectedRoute
              path="/movies"
              loggedIn={loggedIn}
              initialMovies={initialMovies}
              savedMovies={savedMovies}
              handleSaveMovie={handleSaveMovie}
              handleDeleteMovie={handleDeleteMovie}
              component={Movies}
              openMenu={openMenu}
            />
            <ProtectedRoute
              path="/saved-movies"
              component={SavedMovies}
              loggedIn={loggedIn}
              savedMovies={savedMovies}
              handleDeleteMovie={handleDeleteMovie}
              openMenu={openMenu}
            />
            <ProtectedRoute
              path="/profile"
              component={Profile}
              loggedIn={loggedIn}
              handleUpdateUser={handleUpdateUser}
              signOut={signOut}
              openMenu={openMenu}
            />
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Navigation onClose={closeAllPopups} isOpen={menuOpen} />
          <InfoTooltip
            isOpen={isInfoTooltipOpen}
            onClose={closeAllPopups}
            onSuccess={successAction}
            tooltipMessage={tooltipMessage}
          />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
