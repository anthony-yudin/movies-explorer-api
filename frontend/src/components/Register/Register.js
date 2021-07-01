import React from 'react';
import './Register.css';
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Register() {
  return (
    <>
      <div className="container">
        <form className="form">
          <img className="form__logo" src={logo} alt="Movies"/>
          <div className="form__box">
            <h1 className="form__title">Добро пожаловать!</h1>
            <div className="form__block">
              <label className="form__label" for="name">Имя</label>
              <input className="form__input" type="text" id="name" />
            </div>
            <div className="form__block">
              <label className="form__label" for="email">E-mail</label>
              <input className="form__input" type="email" id="email"/>
            </div>
            <div className="form__block">
              <label className="form__label" for="password">Пароль</label>
              <input className="form__input" type="password" id="password"/>
            </div>
          </div>
          <div className="form__info">
            <button className="form__btn form__input">Зарегистрироваться</button>
            Уже зарегистрированы? <Link className="form__btn-href" to="/signin">Войти</Link>
          </div>
        </form>
      </div>
    </>
  )
}
export default Register
