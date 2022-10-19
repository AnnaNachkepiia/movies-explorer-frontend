import "./MoviesCard.css";
import React from "react";


function MoviesCard(props) {
  return (
    <ul className="movies__cardlist">
      <li className="movie">
        <img
          className="movie__picture"
          src="https://images.unsplash.com/photo-1665328315672-963fc08128d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=660&q=80"
          alt="фильм"
        />
        <div className="movie__info">
          <div className="movie__description">
            <p className="movie__name">33 слова о дизайне</p>
            <p className="movie__duration">1ч 45 мин</p>
          </div>
          {props.children}
        </div>
      </li>

      <li className="movie">
        <img
          className="movie__picture"
          src="https://images.unsplash.com/photo-1665323759004-43c9f3b941dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8eEh4WVRNSExnT2N8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
          alt="фильм"
        />
        <div className="movie__info">
          <div className="movie__description">
            <p className="movie__name">33 слова о дизайне</p>
            <p className="movie__duration">1ч 45 мин</p>
          </div>
          <button  type="submit" className="movie__save movie__save_type_visible"/>
        </div>
      </li>
      <li className="movie">
        <img
          className="movie__picture"
          src="https://images.unsplash.com/photo-1663928036103-963d9c19eaa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDU5fHhIeFlUTUhMZ09jfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt="фильм"
        />
        <div className="movie__info">
          <div className="movie__description">
            <p className="movie__name">33 слова о дизайне</p>
            <p className="movie__duration">1ч 45 мин</p>
          </div>
          <button type="submit" className="movie__save movie__save_type_invisible"/>
        </div>
      </li>

      <li className="movie">
        <img
          className="movie__picture"
          src="https://images.unsplash.com/photo-1663181192606-d25a5db00118?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwMHx4SHhZVE1ITGdPY3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="фильм"
        />
        <div className="movie__info">
          <div className="movie__description">
            <p className="movie__name">33 слова о дизайне</p>
            <p className="movie__duration">1ч 45 мин</p>
          </div>
          <button type="submit" className="movie__save movie__save_type_visible"/>
        </div>
      </li>
      <li className="movie">
        <img
          className="movie__picture"
          src="https://images.unsplash.com/photo-1662716899897-d9730347aa96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwN3x4SHhZVE1ITGdPY3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="фильм"
        />
        <div className="movie__info">
          <div className="movie__description">
            <p className="movie__name">33 слова о дизайне</p>
            <p className="movie__duration">1ч 45 мин</p>
          </div>
          <button type="submit" className="movie__save movie__save_type_invisible"/>
        </div>
      </li>

      <li className="movie">
        <img
          className="movie__picture"
          src="https://images.unsplash.com/photo-1665323759004-43c9f3b941dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8eEh4WVRNSExnT2N8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
          alt="фильм"
        />
        <div className="movie__info">
          <div className="movie__description">
            <p className="movie__name">33 слова о дизайне</p>
            <p className="movie__duration">1ч 45 мин</p>
          </div>
          <button type="submit" className="movie__save movie__save_type_visible"/>
        </div>
      </li>
    </ul>
  );
}
export default MoviesCard;
