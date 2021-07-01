import React from 'react';
import './Techs.css';

function Techs() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section__title">
          Технологии
        </h2>
        <div className="techs">
          <h3 className="techs__title">
            7 технологий
          </h3>
          <p className="techs__text">
            На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
          </p>
          <div className="techs__box">
            <div className="techs__item">HTML</div>
            <div className="techs__item">CSS</div>
            <div className="techs__item">JS</div>
            <div className="techs__item">React</div>
            <div className="techs__item">Git</div>
            <div className="techs__item">Express.js</div>
            <div className="techs__item">mongoDB</div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Techs
