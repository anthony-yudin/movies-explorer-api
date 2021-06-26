import React from 'react';
import './SearchForm.css';
import search from "../../images/search.svg";

function SearchForm() {
  return (
    <div className="form-search">
      <form className="form-search__form">
        <div className="form-search__box">
          <input className="form-search__input" type="text" name="search" placeholder="Фильм" />
          <button className="form-search__btn">
            <img className="form-search__btn-img" src={search} alt="Поиск!"/>
          </button>
        </div>
        <label className="form-search__switch-box">
          <div className="form-search__switch">
            <input className="form-search__switch-input" type="checkbox" />
            <span className="form-search__switch-slider" />
          </div>
          <div className="form-search__switch-text">Короткометражки</div>
        </label>
      </form>
    </div>
  )
}
export default SearchForm
