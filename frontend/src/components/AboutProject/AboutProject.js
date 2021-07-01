import React from 'react';
import './AboutProject.css';

function AboutProject() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section__title">
          О проекте
        </h2>
        <div className="about-project">
          <div className="about-project__content">
            <div className="about-project__item">
              <h3 className="about-project__title">
                Дипломный проект включал 5 этапов
              </h3>
              <p className="about-project__text">
                Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
              </p>
            </div>
            <div className="about-project__item">
              <h3 className="about-project__title">
                На выполнение диплома ушло 5 недель
              </h3>
              <p className="about-project__text">
                У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
              </p>
            </div>
          </div>
          <div className="about-project__schedule">
            <div className="about-project__schedule-item about-project__schedule-item_type_backend">
              <div className="about-project__schedule-line">
                1 неделя
              </div>
              <p className="about-project__schedule-text">
                Back-end
              </p>
            </div>
            <div className="about-project__schedule-item about-project__schedule-item_type_frontend about-project__schedule-item_bg_gray">
              <div className="about-project__schedule-line">
                4 недели
              </div>
              <p className="about-project__schedule-text">
                Front-end
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default AboutProject
