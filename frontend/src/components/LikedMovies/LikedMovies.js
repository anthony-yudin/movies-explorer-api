import React from 'react';
import SearchForm from "../SearchForm/SearchForm";
import MoviesLikedCardList from "../MoviesLikedCardList/MoviesLikedCardList";
import Navigation from "../Navigation/Navigation";
import Notification from "../Notification/Notification";
import Preloader from "../Preloader/Preloader";

function LikedMovies({ visibleMenu, onMenuClick, handleSearchLiked, isNoMoviesFind, isLoading, message, movies, deleteLiked }) {
  return (
    <div className="container">
      <SearchForm handleMovieSearch={handleSearchLiked} />

      {!isLoading && isNoMoviesFind && !message && (
        <Notification text="Ничего не найденно" />
      )}
      {isLoading && (<Preloader />)}

      {message && (
        <Notification text="Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз" />
      )}

      <MoviesLikedCardList
        movies={movies}
        deleteLiked={deleteLiked}
      />

      <Navigation visibleMenu={visibleMenu} onMenuClick={onMenuClick} />
    </div>
  )
}

export default LikedMovies
