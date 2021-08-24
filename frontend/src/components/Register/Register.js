import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import logo from "../../images/logo.svg";
import FormValidator from "../../utils/FormValidator";
import Preloader from "../Preloader/Preloader";
import Notification from "../Notification/Notification";

function Register({ onRegister, isLoading, message }) {
  const [messageText, setMessageText] = React.useState('');

  const { values, errors, isValid, handleChangeInput, handleSubmit } = FormValidator(
    { name: '', email: '', password: '' },
    { name: '', email: '', password: '' },
    onRegister
  );

  React.useEffect(() => {
    switch (message) {
      case 409:
        setMessageText('Пользователь с таким email уже существует');
        break;
      default:
        setMessageText('');
        break;
    }
  }, [message])

  return (
    <>
      {isLoading && (<Preloader />)}

      <div className="container">
        <form className="form" method="post" onSubmit={handleSubmit}>
          <img className="form__logo" src={logo} alt="Movies"/>
          <div className="form__box">
            <h1 className="form__title">Добро пожаловать!</h1>
            <div className="form__block">
              <label className="form__label" htmlFor="name">Имя</label>
              <input className="form__input" type="text" id="name" name="name" value={values.name} onChange={handleChangeInput} required minLength={2} />
              <span className="profile__error">{errors.name}</span>
            </div>
            <div className="form__block">
              <label className="form__label" htmlFor="email">E-mail</label>
              <input className="form__input" type="email" id="email" name="email" value={values.email} onChange={handleChangeInput} minLength={2} required />
              <span className="profile__error">{errors.email}</span>
            </div>
            <div className="form__block">
              <label className="form__label" htmlFor="password">Пароль</label>
              <input className="form__input" type="password" id="password" name="password" value={values.password} onChange={handleChangeInput} required minLength={8} />
              <span className="profile__error">{errors.password}</span>
            </div>
          </div>
          <div className="form__info">
              <Notification text={messageText} />

            <button className="form__btn form__input" disabled={!isValid}>Зарегистрироваться</button>
            Уже зарегистрированы? <Link className="form__btn-href" to="/signin">Войти</Link>
          </div>
        </form>
      </div>
    </>
  )
}
export default Register
