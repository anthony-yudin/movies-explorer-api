import React from 'react';
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(saved) {
  return (
    <div className="movies">
      <div className="movies__box">
        <MoviesCard isSaved={saved} isLiked={'active'} />
        <MoviesCard isSaved={saved} />
        <MoviesCard isSaved={saved} isLiked={'active'} />
        <MoviesCard isSaved={saved} />
        <MoviesCard isSaved={saved} />
        <MoviesCard isSaved={saved} />
        <MoviesCard isSaved={saved} />
        <MoviesCard isSaved={saved} />
      </div>
      <button className="movies__btn">Ещё</button>
    </div>
  )
}
export default MoviesCardList
