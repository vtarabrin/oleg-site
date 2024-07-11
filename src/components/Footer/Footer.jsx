import './Footer.css';
import '../../assets/assets';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import React from 'react';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h2>Компания</h2>
          <img src={assets.logo} alt="" />
          <p>"ТОО УралПромСнаб"</p>
        </div>
        <div className="footer-center">
          <h2>Каталог</h2>
          <ul>
            <li>
              <Link to="/polog-bresent">Полог брезентовый</Link>
            </li>
            <li>
              <Link to="/tent-oxford">Тент Оксфорд</Link>
            </li>
            <li>
              <Link to="/tent-parapulin">Тент Тарпаулин</Link>
            </li>
            <li>
              <Link to="/tent-pvx">Тенты ПВХ</Link>
            </li>
          </ul>
        </div>
        <div className="footer-right">
          <h2>Контакты</h2>
          <ul>
            <li>ПОЧТА</li>
            <li>Nomer</li>
            <li>NOMER</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
