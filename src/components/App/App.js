import "./App.css";
import React, { useEffect, useState } from "react";
import {
  Route,
  Switch,
  Link,
  useHistory,
  useLocation,
  Redirect,
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

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [initialMovies, setInitialMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      api
        .getContent(token)
        .then(({ name, email }) => {
          setCurrentUser({ name, email });
          setLoggedIn(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [setLoggedIn, loggedIn]);

  useEffect(() => {
    if (loggedIn && initialMovies.length < 1) {
      moviesApi
        .getMovies()
        .then((data) => {
          localStorage.setItem("allMovies", JSON.stringify(data));
          setInitialMovies(data);
          JSON.parse(localStorage.getItem("allMovies"));
        })
        .catch((err) => {
          console.log(err);
        });
    }
    console.log(loggedIn)
  }, [loggedIn, initialMovies, setInitialMovies, setLoggedIn]);

  useEffect(() => {
    if (loggedIn) {
      api
        .getSavedMovies()
        .then((data) => {
          localStorage.setItem("savedMovies", JSON.stringify(data));
          setSavedMovies(data);
          console.log(data)
          JSON.parse(localStorage.getItem("savedMovies"));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loggedIn, setSavedMovies, setLoggedIn]);

  function handleRegister({ name, email, password }) {
    api
      .register({ name, email, password })
      .then(() => {
        handleLogin({ email, password });
      })
      .catch((err) => {
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
        console.log(err);
      });
  }

  const  handleUpdateUser = (data) => {
    api
      .editUserData(data)
      .then((info) => {
        setCurrentUser(info);
      })
      .catch((err) => {
        // setIsInfoTooltipOpen(true);
       
        console.log(err)
      });
  }

  function signOut() {
    setLoggedIn(false);
    localStorage.clear();
    history.push('/');
  }

  function handleSaveMovie(movie) {
    api
      .saveMovie(movie)
      .then((newMovie) => {
        setSavedMovies([newMovie, ...savedMovies]);
        console.log(newMovie.image)
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
        setSavedMovies(savedMovies.filter((i) => i._id !== movieId));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__container">
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/signin">
              {loggedIn ? (
                <Redirect to="/movies" />
              ) : (
                <Login onLogin={handleLogin} />
              )}
                              {/* <Login onLogin={handleLogin} /> */}

            </Route>
            <Route path="/signup">
              {loggedIn ? (
                <Redirect to="/movies" />
              ) : (
                <Register onRegister={handleRegister} />
              )}
                              {/* <Register onRegister={handleRegister} /> */}

            </Route>
            <ProtectedRoute
            // <Route>
                path="/movies"
                loggedIn={loggedIn}
                initialMovies={initialMovies}
                savedMovies={savedMovies}
                handleSaveMovie={handleSaveMovie}
                handleDeleteMovie={handleDeleteMovie}
                component={Movies}
              />
            {/* </Route> */}
            <ProtectedRoute
            // <Route>
                path="/saved-movies"
                component={SavedMovies}
                loggedIn={loggedIn}
                savedMovies={savedMovies}
                handleDeleteMovie={handleDeleteMovie}
              />
            {/* </Route> */}
            {/* <ProtectedRoute */}
            // <Route
              path="/profile" 
              component={Profile}
              loggedIn={loggedIn}
              handleUpdateUser={handleUpdateUser}
              signOut={signOut}
              /> 
              {/* </Route> */}
         
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
