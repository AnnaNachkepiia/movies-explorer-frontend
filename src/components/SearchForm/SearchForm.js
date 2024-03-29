import "./SearchForm.css";
import React, { useEffect, useState } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.js";

function SearchForm({handleSubmit, handleChange, searchQuery, handleToogleCheckBox, checked}) {


return (
    <section className="search">
    <form className="search__form" onSubmit={handleSubmit}>
    <input
      type="text"
      name="search"
      id="search"
      className="search__form-input"
      placeholder="Фильм"
      minLength={1}
      value={searchQuery}
      onChange={handleChange}
      required
    />
    <button type="submit" className="search__form-button">
      Найти
    </button>    
  </form>
        <FilterCheckbox 
        handleToogleCheckBox={handleToogleCheckBox}
        checked={checked}/>
        <div className="search__form-line"/>
  </section>
)
}

export default SearchForm