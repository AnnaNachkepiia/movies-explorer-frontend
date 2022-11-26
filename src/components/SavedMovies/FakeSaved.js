import "./SavedMovies.css";
import "../Header/Header.css";
import React, { useState, useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function SavedMovies({ savedMovies, handleDeleteMovie, loggedIn, openMenu }) {
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  // const [findMovies, setFindMovies] = useState([]);
  const [checked, setChecked] = useState(false);
  const [shortMovies, setShortMovies] = useState([]);
  const [isMoviesFound, setIsMoviesFound] = useState(true);
  const [filter, setFilter] = useState([])

  useEffect(() => {
    setFindMovies(savedMovies);
  }, [savedMovies]);

  useEffect(() => {
    if (checked) {
      const shortMovies = findMovies.filter((movie) => {
        return movie.duration <= 40;
      });
      setShortMovies(shortMovies);
    }
  }, [checked, findMovies, setShortMovies]);
  
  useEffect(() => {
    if (isLoading) {
      const searchResults = savedMovies.filter((movie) => {
        const movieName = movie.nameRU.toLowerCase();
        return movieName.includes(searchQuery.toLowerCase());
        
      });
      if (searchResults.length < 1) {
        setIsMoviesFound(false);
      } else {
        setIsMoviesFound(true);
        setFindMovies(searchResults)
console.log(searchResults)
      }
    }
    console.log(findMovies)
    setTimeout(() => setIsLoading(false), 2000);
  }, [isLoading, setFindMovies, searchQuery]);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
  }
  function handleToogleCheckBox() {
    setChecked(!checked);
  }
  function handleChange(e) {
    setSearchQuery(e.target.value);
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

export default SavedMovies;
