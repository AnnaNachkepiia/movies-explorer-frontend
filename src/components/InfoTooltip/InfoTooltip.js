import React from "react";
import './InfoTooltip.css'
import Success from "../../images/Success.svg";
import Error from "../../images/Error.svg";

function InfoTooltip({ isOpen, onClose, onSuccess, tooltipMessage }) {
  return (
    <section
      className={`popup ${isOpen && "popup_is-opened"}`}
    >
      <div className="popup__container">
        <div className="register">
          <img
            className="register__icon"
            src={onSuccess ? Success : Error}
            alt={onSuccess ? "Успешно!" : "Что-то пошло не так"}
          />
          <p className="register__description">{tooltipMessage}</p>
        </div>
        <button
          onClick={onClose}
          type="button"
          className="popup__close popup__close_popup-register"
        />
      </div>
    </section>
  );
}

export default InfoTooltip;
