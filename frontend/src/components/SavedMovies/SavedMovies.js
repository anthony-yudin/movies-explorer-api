import React from 'react';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Navigation from "../Navigation/Navigation";

function SavedMovies({ visibleMenu, onMenuClick }) {
  return (
    <div className="container">
      <SearchForm />
      <MoviesCardList saved={'saved'} />
      <Navigation visibleMenu={visibleMenu} onMenuClick={onMenuClick} />
    </div>
  )
}

export default SavedMovies
