import React from 'react';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Navigation from "../Navigation/Navigation";

function Movies({ visibleMenu, onMenuClick }) {
  return (
    <div className="container">
      <SearchForm />
      <MoviesCardList />
      <Navigation visibleMenu={visibleMenu} onMenuClick={onMenuClick} />
    </div>
  )
}

export default Movies
