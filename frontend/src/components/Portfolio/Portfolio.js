import React from 'react';
import './Portfolio.css';
import arrow from "../../images/arrow.svg";

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="container">
        <h2 className="portfolio__title">
          Портфолио
        </h2>
        <a href="https://anthony-yudin.github.io/how-to-learn/" target="_blank" rel="noreferrer" className="portfolio__item">
          <div className="portfolio__item-text">
            Статичный сайт
          </div>
          <img className="portfolio__img" src={arrow} alt="Ссылка на статичный сайт"/>
        </a>
        <a href="https://anthony-yudin.github.io/russian-travel/" target="_blank" rel="noreferrer" className="portfolio__item">
          <div className="portfolio__item-text">
            Адаптивный сайт
          </div>
          <img className="portfolio__img" src={arrow} alt="Ссылка на адаптивный сайт"/>
        </a>
        <a href="https://anthony-yudin.github.io/" target="_blank" rel="noreferrer" className="portfolio__item">
          <div className="portfolio__item-text">
            Одностраничное приложение
          </div>
          <img className="portfolio__img" src={arrow} alt="Ссылка на одностраничное приложение"/>
        </a>
      </div>
    </section>
  )
}

export default Portfolio
