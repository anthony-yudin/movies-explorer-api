import React from 'react';
import { Link } from "react-router-dom";
import './NoMatchPage.css';

function NoMatchPage() {
  return (
    <>
      <div className="page404">
        <div className="page404__box">
          <div className="page404__title">404</div>
          <div className="page404__subtitle">Страница не найдена</div>
          <Link to="/" className="page404__href">Назад</Link>
        </div>
      </div>
    </>
  )
}
export default NoMatchPage
