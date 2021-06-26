import React from 'react';
import './MoviesCard.css';
import movies1 from "../../images/movies/1.jpg";
import close from "../../images/close.svg";

function MoviesCard({ isSaved, isLiked }) {
  const isLikedClass = (
    `${isLiked ? 'movies__circle movies__circle_active' : 'movies__circle'}`
  );

  return (
    <div className="movies__item">
      <img className="movies__img" src={movies1} alt="33 слова о дизайне" />
      <div className="movies__content">
        <div className="movies__title-box">
          <h3 className="movies__title">33 слова о дизайне</h3>
          {isSaved ? <img className="movies__close" src={close} alt="Удалить фильм из сохранённых" /> : <div className={isLikedClass} />}

        </div>
        <p className="movies__duration">1ч 42м</p>
      </div>
    </div>
  )
}
export default MoviesCard
