import React from 'react';
import './MoviesCard.css';
import close from "../../images/close.svg";
import {useLocation} from "react-router-dom";

function MoviesCard({ movie, onLiked, isLiked, deleteLiked }) {
  const location = useLocation();

  const hours = Math.floor(movie.duration / 60);
  const minutes = Math.floor(movie.duration % 60);
  const hoursMinutes = `${hours}ч ${minutes}м`;
  const isLikedClass = (
    `${isLiked ? 'movies__circle movies__circle_active' : 'movies__circle'}`
  );

  function handleLiked(e) {
    e.preventDefault();

    if (!isLiked) {
      movie.thumbnail = movie.image.formats.thumbnail.url;

      onLiked(movie);
    } else {
      deleteLiked(movie);
    }
  }

  return (
    <a href={movie.trailerLink} target="_blank" rel="noreferrer" id={movie._id || movie.movieId} className="movies__item">
      <img className="movies__img" src={`https://api.nomoreparties.co${movie.image.url}`} alt={movie.nameRU || movie.nameEN} />
      <div className="movies__content">
        <div className="movies__title-box">
          <h3 className="movies__title">{movie.nameRU || movie.nameEN}</h3>
          {location.pathname === '/saved-movies' ? <img className="movies__close" src={close} onClick={handleLiked} alt="Удалить фильм из сохранённых" /> : <div className={isLikedClass} onClick={handleLiked} />}

        </div>
        <p className="movie__duration">{hoursMinutes}</p>
      </div>
    </a>
  )
}
export default MoviesCard
