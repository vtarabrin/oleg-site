import './Footer.css';
import '../../assets/assets';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import React from 'react';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="row">
          <div className="col">
            <div className="h5">Каталог</div>
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
          <div className="col">
            <div className="h5">Контакты</div>
            <ul>
              <li>Номер</li>
              <li>Почта</li>
              <li>Контакнтное лицо</li>
              <li>Вацап</li>
            </ul>
          </div>
          <div className="col">
            <div className="h2">Компания</div>
            <img src={assets.logo} alt="" />
            <p>"ТОО УралПромСнаб"</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
