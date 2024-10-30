import './Header.css';
import { assets } from '../../assets/assets';
import React from 'react';

function Header() {
  return (
    <div className="header">
      <div className="header-content">
        <div className="row-header">
          <div className="col">
            <span className="header-name-company">ТОО "УралПромСнаб"</span>
            <p className="header-p">
              Торговая компания задача которой являются поставки материалов для промышленной
              отрасли.
            </p>
            <p className="header-p">
              Экспорт/Импорт оборудования и материалов в рамках ЕАЭС для юридических лиц.
            </p>
            <u className='header-u'>
              <p className="header-p">Отдел продаж: sales@ups.org.kz</p>
            </u>
          </div>
          <div className="col-right">
            <div className="slider-wrapper">
              <div className="slider">
                <img id="slide1" src={assets.main1} alt="" />
                <img id="slide2" src={assets.main2} alt="" />
                <img id="slide3" src={assets.main3} alt="" />
              </div>
              <div className="slider-nav">
                <a href="#slide1"></a>
                <a href="#slide2"></a>
                <a href="#slide3"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//<a href="77011390404">☏ +7 910 221 0068</a>

export default Header;
