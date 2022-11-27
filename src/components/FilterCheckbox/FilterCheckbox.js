import "./FilterCheckbox.css";
import React from "react";

function FilterCheckbox({ checked, handleToogleCheckBox }) {
  return (
    <form className="filter">
      <input
        type="checkbox"
        name="checkbox"
        id="checkbox"
        checked={checked}
        onChange={handleToogleCheckBox}
        className="filter__checkbox"
      />
      <p className="filter__checkbox-capture">Короткометражки</p>
    </form>
  );
}

export default FilterCheckbox;
