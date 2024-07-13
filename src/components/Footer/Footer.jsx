import './Footer.css';
import '../../assets/assets';
import { assets } from '../../assets/assets';
import React from 'react';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="row">
          <div className="col1">
            <div className="h5">Контакты</div>
            <ul>
              <span>Город</span>
              <p className="city">Атырау</p>
              <span>Телефоны</span>
              <br />
              <p className="phone">89103603114</p>
              <p className="phone">89103603114</p>
              <span>Работаем</span>
              <br />
              <p className="work">
                Склад: с 9:00 до 18:00 Звонки принимаем: с 8:00 до 20:00 Также возможна отгрузка в
                выходные и во внерабочее время по предварительной договоренности
              </p>
              <span>Email магазина</span>
              <p></p>
              <br />
              <span className="email"></span>
            </ul>
          </div>
          <div className="col2">
            <div className="h2">Компания</div>
            <img src={assets.logo} alt="" />
            <p className="ural">"ТОО УралПромСнаб"</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
