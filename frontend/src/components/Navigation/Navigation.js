import React from 'react';
import './Navigation.css';
import account from "../../images/account.svg";
import close from "../../images/close.svg";
import {Link} from "react-router-dom";
import '../../blocks/account/account.css';

function Navigation({ visibleMenu, onMenuClick }) {
  const isVisibleMenu = (
    `${visibleMenu ? 'navigation navigation_active' : 'navigation'}`
  );

  function handleMenuClick() {
    onMenuClick();
  }

  return (
    <>
      <div className={isVisibleMenu}>
        <div className="navigation__box">
          <div className="navigation__close-box">
            <img className="navigation__close" src={close} alt="Закрыть меню" onClick={handleMenuClick} />
          </div>
          <div className="navigation__menu">
            <div className="navigation__item"><Link to="/" className="navigation__item-href navigation__item-href_active">Главная</Link></div>
            <div className="navigation__item"><Link to="/movies" className="navigation__item-href">Фильмы</Link></div>
            <div className="navigation__item"><Link to="/saved-movies" className="navigation__item-href">Сохранённые фильмы</Link></div>
          </div>
          <Link className="account account_navigation"><img className="account__img" src={account} alt="Аккаунт"/>Аккаунт</Link>
        </div>
      </div>
    </>
  )
}
export default Navigation
