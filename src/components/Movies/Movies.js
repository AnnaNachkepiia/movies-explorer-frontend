import "./Movies.css";
import "../Header/Header.css";
import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm.js";
import Preloader from "../Preloader/Preloader.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";

function Movies({
  initialMovies,
  savedMovies,
  handleSaveMovie,
  handleDeleteMovie,
  loggedIn,
  openMenu,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [findMovies, setFindMovies] = useState([]);
  const [checked, setChecked] = useState(false);
  const [shortMovies, setShortMovies] = useState([]);
  const [isMoviesFound, setIsMoviesFound] = useState(true);
  const [count, setCount] = useState(12);
  const width = window.innerWidth;

  useEffect(() => {
    if (isLoading) {
      JSON.parse(localStorage.getItem("searchMovies"));
      searchMovie(searchQuery);
    }
    setTimeout(() => setIsLoading(false), 2000);
  }, [isLoading, initialMovies, searchQuery, setFindMovies]);

  function searchMovie(query) {
    const searchResults = initialMovies.filter((movie) => {
      const movieName = movie.nameRU.toLowerCase();

      return movieName.includes(query.toLowerCase());
    });
    if (searchResults.length < 1) {
      setIsMoviesFound(false);
    } else {
      setFindMovies(searchResults);
      setIsMoviesFound(true);
      localStorage.setItem("searchMovies", JSON.stringify(searchResults));
    }
  }
  useEffect(() => {
    if (localStorage.getItem("searchMovies")) {
      const movies = JSON.parse(localStorage.getItem("searchMovies"));
      setFindMovies(movies);
    }
  }, []);

  useEffect(() => {
    if (width >= 1024) {
      setCount(12);
    }
    if (width < 1024 && width >= 800) {
      setCount(8);
    }
    if (width < 800) {
      setCount(5);
    }
  }, [width]);



  useEffect(() => {
    if (checked) {
      const shortMovies = findMovies.filter((movie) => {
        return movie.duration <= 40;
      });

      setShortMovies(shortMovies);
    }
  }, [checked, findMovies, setShortMovies]);

  function handleChange(e) {
    setSearchQuery(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
  }

  function handleToogleCheckBox() {
    setChecked(!checked);
    localStorage.setItem("savedChecked", !checked);
  }

  function handleMoreMovies() {
    if (width >= 1024) {
      setCount(count + 3);
    } else {
      setCount(count + 2);
    }
  }

  return (
    <>
      <Header loggedIn={loggedIn} openMenu={openMenu} />
      <main>
        <SearchForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          searchQuery={searchQuery}
          handleToogleCheckBox={handleToogleCheckBox}
          checked={checked}
        />
        {isLoading ? (
          <Preloader />
        ) : isMoviesFound ? (
          <MoviesCardList
            movies={checked ? shortMovies : findMovies}
            savedMovies={savedMovies}
            count={count}
            handleMoreMovies={handleMoreMovies}
            handleSaveMovie={handleSaveMovie}
            handleDeleteMovie={handleDeleteMovie}
          />
        ) : (
          <p className="movie__search-message">Ничего не найдено</p>
        )}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
