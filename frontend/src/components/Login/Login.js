import React from 'react';
import './Login.css';
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import FormValidator from '../../utils/FormValidator';
import Notification from "../Notification/Notification";

function Login({ onLogin, message }) {
  const [messageText, setMessageText] = React.useState('');

  const { values, errors, isValid, handleChangeInput, handleSubmit } = FormValidator(
    { email: '', password: '' },
    { email: '', password: '' },
    onLogin
  );

  React.useEffect(() => {
    switch (message) {
      case 401:
        setMessageText('Неправильный логин или пароль');
        break;
      default:
        setMessageText('');
        break;
    }
  }, [message])

  return (
    <>
      <div className="container">
        <form className="form" method="post" onSubmit={handleSubmit}>
          <img className="form__logo" src={logo} alt="Movies"/>
          <div className="form__box">
            <h1 className="form__title">Рады видеть!</h1>
            <div className="form__block">
              <label className="form__label" htmlFor="email">E-mail</label>
              <input className="form__input" type="email" name="email" id="email" value={values.email} onChange={handleChangeInput} minLength={2} required />
              <span className="profile__error">{errors.email}</span>
            </div>
            <div className="form__block">
              <label className="form__label" htmlFor="password">Пароль</label>
              <input className="form__input" type="password" name="password" id="password" value={values.password} onChange={handleChangeInput} minLength={8} required />
              <span className="profile__error">{errors.password}</span>
            </div>
          </div>
          <div className="form__info">
            {message && (
              <Notification text={messageText} />
            )}
            <button className="form__btn form__input" disabled={!isValid}>Войти</button>
            Ещё не зарегистрированы? <Link className="form__btn-href" to="/signup">Регистрация</Link>
          </div>
        </form>
      </div>
    </>
  )
}
export default Login
