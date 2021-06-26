import React from 'react';
import './Profile.css';

function Profile() {
  return (
    <>
      <div className="container">
        <div className="profile">
          <div className="profile__box">
            <h1 className="profile__title">Привет, Виталий!</h1>
            <div className="profile__line">
              <div className="profile__line-name">Имя</div>
              <div className="profile__line-value">Виталий</div>
            </div>
            <div className="profile__line">
              <div className="profile__line-name">E-mail</div>
              <div className="profile__line-value">pochta@yandex.ru</div>
            </div>
          </div>
          <div className="profile__info">
            <div className="profile__info-signature">Редактировать</div>
            <div className="profile__info-signature profile__info-signature_color_red">Выйти из аккаунта</div>
          </div>
        </div>

      </div>

    </>
  )
}
export default Profile
