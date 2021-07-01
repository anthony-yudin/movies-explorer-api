import React from 'react';
import './NavTab.css';
import { Link } from "react-router-dom";

function NavTab() {
  return (
    <nav className="nav">
      <Link to="/" className="nav__item">
        О проекте
      </Link>
      <Link to="/" className="nav__item">
        Технологии
      </Link>
      <Link to="/" className="nav__item">
        Студент
      </Link>
    </nav>
  )
}
export default NavTab
