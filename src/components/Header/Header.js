import "./Header.css";
import React from "react";
import headerLogo from "../../images/logoHeader.svg";
import { Link } from "react-router-dom";

function Header(props) {
//   const headerClassName = ( `header ${isPromo ? "header_type_promo" : "header"} `);
  return (
    <header className={props.className}>
      <img className="header__logo" alt="лого" src={headerLogo} />
      {props.children}
    </header>
  );
}

export default Header;
