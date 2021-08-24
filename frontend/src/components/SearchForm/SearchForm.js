import React from 'react';
import './SearchForm.css';
import search from "../../images/search.svg";

function SearchForm({ handleMovieSearch }) {
  const [searchInput, setSearchInput] = React.useState('');
  const [shortFilm, setShortFilm] = React.useState(false);

  function handleChangeSearch(evt) {
    setSearchInput(evt.target.value);
  }

  function handleShortFilm(evt) {
    setShortFilm(evt.target.checked);
  }

  function handleSubmitSearch(evt) {
    evt.preventDefault();

    handleMovieSearch(searchInput, shortFilm);
  }

  return (
    <div className="form-search">
      <form className="form-search__form" onSubmit={handleSubmitSearch}>
        <div className="form-search__box">
          <input className="form-search__input" required type="text" name="search" placeholder="Фильм" onChange={handleChangeSearch} value={searchInput} />
          <div className="form-search__btn-box">
            <button className="form-search__btn">
              <img className="form-search__btn-img" src={search} alt="Поиск!"/>
            </button>
          </div>
        </div>
        <label className="form-search__switch-box">
          <div className="form-search__switch">
            <input className="form-search__switch-input" type="checkbox" onChange={handleShortFilm} />
            <span className="form-search__switch-slider" />
          </div>
          <div className="form-search__switch-text">Короткометражки</div>
        </label>
      </form>
    </div>
  )
}
export default SearchForm
