import React from 'react';
import '../MoviesCardList/MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesLikedCardList({ movies, deleteLiked }) {
  const moviesCard = movies.map((item) => (
    <MoviesCard
      movie={item}
      key={item._id || item.id}
      deleteLiked={deleteLiked}
      isLiked={true}
    />
  ))

  return (
    <div className="movies">
      <div className="movies__box">
        {moviesCard}
      </div>
    </div>
  )
}

export default MoviesLikedCardList
