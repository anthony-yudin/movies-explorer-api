import React from 'react';
import './AboutMe.css';
import {Link} from "react-router-dom";
import student from "../../images/student.jpg";

function AboutMe() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section__title">
          Студент
        </h2>
        <div className="student">
          <div className="student__text-box">
            <div className="student__content">
              <h3 className="student__title">Виталий</h3>
              <p className="student__text">Фронтенд-разработчик, 30 лет</p>
              <p className="student__text">
                Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь.
                Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
                С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке,
                начал заниматься фриланс-заказами и ушёл с постоянной работы.
              </p>
            </div>
            <div className="student__socials">
              <Link to="/" className="student__socials-item">Facebook</Link>
              <Link to="/" className="student__socials-item">Github</Link>
            </div>
          </div>
          <img className="student__img" src={student} alt="Виталий"/>
        </div>
      </div>
    </section>
  )
}
export default AboutMe
