import React from 'react';
import './Profile.css';
import FormValidator from '../../utils/FormValidator';
import Preloader from "../Preloader/Preloader";
import Notification from "../Notification/Notification";

function Profile({currentUser, onUpdateCurrentUser, onSignOut, message, isLoading}) {
  const { values, errors, isValid, handleChangeInput, handleSubmit } = FormValidator(
    currentUser,
    { name: '', email: '' },
    onUpdateCurrentUser
  );

  return (
    <>
      {isLoading && (<Preloader />)}

      <div className="container">
        <form className="profile" method="post" onSubmit={handleSubmit}>
          <div className="profile__box">
            <h1 className="profile__title">Привет, {currentUser.name}!</h1>
            <div className="profile__line">
              <label className="profile__line-name" htmlFor="name">Имя</label>
              <input className="profile__line-value" name="name" type="name" minLength={2} maxLength={40} required value={values.name} onChange={handleChangeInput}/>
              <span className="profile__error">{errors.name}</span>
            </div>
            <div className="profile__line">
              <label className="profile__line-name" htmlFor="email">E-mail</label>
              <input className="profile__line-value" type="email" id="email" name="email" minLength={2} required value={values.email} onChange={handleChangeInput} />
              <span className="profile__error">{errors.email}</span>
            </div>
          </div>
          <div className="profile__info">
            {message && (
              <Notification text={message} />
            )}

            <button className="profile__info-signature" disabled={!isValid}>Редактировать</button>
            <div className="profile__info-signature profile__info-signature_color_red" onClick={onSignOut}>Выйти из аккаунта</div>
          </div>
        </form>
      </div>

    </>
  )
}
export default Profile
