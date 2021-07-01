import React from 'react';
import { Link } from "react-router-dom";
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer__signature">Учебный проект Яндекс.Практикум х BeatFilm.</p>

        <div className="footer__box">
          <div className="footer__copyright">© {new Date().getFullYear()}</div>
          <ul className="footer__menu">
            <li className="footer__menu-item">
              <Link to="" className="footer__menu-item-href">Яндекс.Практикум</Link>
            </li>
            <li className="footer__menu-item">
              <Link to="" className="footer__menu-item-href">Github</Link>
            </li>
            <li className="footer__menu-item">
              <Link to="" className="footer__menu-item-href">Facebook</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
export default Footer
