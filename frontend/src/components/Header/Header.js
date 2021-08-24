import React from 'react';
import './header.css';
import logo from '../../images/logo.svg';
import account from '../../images/account.svg';
import nav from '../../images/nav.svg';
import { Link, useLocation } from "react-router-dom";

function Header({ onMenuClick }) {
  const location = useLocation();
  let headerClass = 'header';
  let notMain;

  if (location.pathname !== '/') {
    notMain = true;
  }

  if (!notMain) {
    headerClass = 'header header_color';
  }

  function handleMenuClick() {
    onMenuClick();
  }

  return (
    <header className={headerClass}>
      <div className="container">
        <div className="header__box">
          <div className="header__left">
            <Link to="/movies">
              <img className="header__logo" src={logo} alt="Movies"/>
            </Link>

            {notMain ? <div className="header__movies"><Link className="header__movies-item header__movies-item_type_movies" to='/movies'>Фильмы</Link><Link className="header__movies-item" to='/saved-movies'>Сохранённые фильмы</Link></div> : ''}

          </div>
          <div className="header__right">
            {notMain ? <><Link to="/profile" className="account"><img className="account__img" src={account} alt="Аккаунт"/>Аккаунт</Link><button className="header__btn-nav" onClick={handleMenuClick}><img className="header__btn-nav-logo" src={nav} alt="Мобильное меню"/></button></> : <><Link to="/signup" className="header__check-in">Регистрация</Link><Link to="/signin" className="header__come-in btn">Войти</Link></>}
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header
