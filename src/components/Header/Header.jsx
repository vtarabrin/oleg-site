import './Header.css';
import { assets } from '../../assets/assets';
import React from 'react';

function Header() {
  return (
    <div className="header">
      <div className="header-content">
        <div className="row-header">
          <div className="col">
            <img className="col-img" src={assets.logo2} alt="" />
            <p className="header-p">
              Торговая компания задача которой являются поставки материалов для нефтегазовой отрасли
            </p>
            <a href="sales@ups.org.kz">Отдел продаж: sales@ups.org.kz</a>
            <br />
            <br />
            <a href="89103603114">Whats`App: 77011390404</a>
            <p className="aturay">г. Атырау</p>
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
