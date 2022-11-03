import "./FilterCheckbox.css";
import React, { useEffect, useState } from "react";

function FilterCheckbox({checked, handleToogleCheckBox}) {
    // const [isChecked, setIsChecked] = useState(false);

    // const handleChange = () => {
    //     setIsChecked(!isChecked);
    //     handleCheckbox(!isChecked);
    //   };
      
    return (
<form className="filter">
    <input 
    type="checkbox" 
    name="checkbox"
    id="checkbox"
    checked={checked}
    onChange={handleToogleCheckBox}
    className="filter__checkbox"/>
    <p className="filter__checkbox-capture">Короткометражки</p>
</form>
    )
}

export default FilterCheckbox