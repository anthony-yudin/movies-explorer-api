import React from 'react';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Navigation from "../Navigation/Navigation";
import Preloader from '../Preloader/Preloader';
import Notification from '../Notification/Notification';

function Movies({ visibleMenu, onMenuClick, handleMovieSearch, isNoMoviesFind, isLoading, movies, likedMovies, onLiked, deleteLiked, message }) {
  return (
    <div className="container">
      <SearchForm handleMovieSearch={handleMovieSearch}  />

      {!isLoading && isNoMoviesFind && !message && (
        <Notification text="Ничего не найденно" />
      )}


      {message && (
        <Notification text="Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз" />
      )}

      {isLoading && (<Preloader />)}

      {!isLoading &&
        (
          <MoviesCardList
            movies={movies}
            likedMovies={likedMovies}
            onLiked={onLiked}
            deleteLiked={deleteLiked}
          />
        )
      }

      <Navigation visibleMenu={visibleMenu} onMenuClick={onMenuClick} />
    </div>
  )
}

export default Movies
