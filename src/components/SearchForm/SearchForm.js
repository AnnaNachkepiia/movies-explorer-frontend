import "./SearchForm.css";
import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.js";



function SearchForm(){
return (
    <section className="search">
    <form className="search__form">
    <input
      type="text"
      name="search"
      id="search"
      className="search__form-input"
      placeholder="Фильм"
      minLength={2}
    />
    <button type="submit" className="search__form-button">
      Найти
    </button>    
  </form>
        <FilterCheckbox />
        <div className="search__form-line"/>
  </section>
)
}

export default SearchForm