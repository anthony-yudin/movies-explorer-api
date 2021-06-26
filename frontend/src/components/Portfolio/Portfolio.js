import React from 'react';
import './Portfolio.css';
import {Link} from "react-router-dom";
import arrow from "../../images/arrow.svg";

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="container">
        <h2 className="portfolio__title">
          Портфолио
        </h2>
        <Link to="https://anthony-yudin.github.io/how-to-learn/" className="portfolio__item">
          <div className="portfolio__item-text">
            Статичный сайт
          </div>
          <img className="portfolio__img" src={arrow} alt="Ссылка на статичный сайт"/>
        </Link>
        <Link to="https://anthony-yudin.github.io/russian-travel/" className="portfolio__item">
          <div className="portfolio__item-text">
            Адаптивный сайт
          </div>
          <img className="portfolio__img" src={arrow} alt="Ссылка на адаптивный сайт"/>
        </Link>
        <Link to="https://anthony-yudin.github.io/" className="portfolio__item">
          <div className="portfolio__item-text">
            Одностраничное приложение
          </div>
          <img className="portfolio__img" src={arrow} alt="Ссылка на одностраничное приложение"/>
        </Link>
      </div>
    </section>
  )
}
export default Portfolio
