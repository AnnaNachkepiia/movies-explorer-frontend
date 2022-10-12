import "./FilterCheckbox.css";
import React from "react";

function FilterCheckbox() {
    return (
<form className="filter">
    <input type="checkbox" className="filter__checkbox"/>
    <p className="filter__checkbox-capture">Короткометражки</p>
</form>
    )
}

export default FilterCheckbox