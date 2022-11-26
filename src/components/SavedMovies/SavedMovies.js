import "./SavedMovies.css";
import "../Header/Header.css";
import React, { useState, useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function SavedMovies({
  savedMovies,
  handleDeleteMovie,
  loggedIn,
  openMenu,
  searchQuery,
  isMoviesFound,
  shortMovies,
  checked,
  handleToogleCheckBox,
  isLoading,
  handleSearchSaved,
  handleChangeSaved,
}) {
  return (
    <>
      <Header loggedIn={loggedIn} openMenu={openMenu} />
      <main>
        <SearchForm
          handleSubmit={handleSearchSaved}
          handleChange={handleChangeSaved}
          searchQuery={searchQuery}
          handleToogleCheckBox={handleToogleCheckBox}
          checked={checked}
        />
        {isLoading ? (
          <Preloader />
        ) : isMoviesFound ? (
          <MoviesCardList
            movies={checked ? shortMovies : savedMovies}
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
