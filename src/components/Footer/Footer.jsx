import './Footer.css';
import '../../assets/assets';
import { assets } from '../../assets/assets';
import React from 'react';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="row">
          <img className="col-img" src={assets.logo2} alt="" />
          <div className="col1">
            <span className="middle-text">
              Контакты для связи:
              <br />
              <br />
            </span>
            <div className="row-info">
              <div className="col-md-6">
                <a className="footer-col" href="mailto:sales@ups.org.kz">
                  <b>
                    <span className="footer-text">Отдел продаж: sales@ups.org.kz</span>
                  </b>
                </a>
                <div className="footer-email">
                  <a className="footer-col" href="mailto:info@ups.org.kz">
                    <b>
                      <span className="footer-text">Общие вопросы: info@ups.org.kz</span>
                    </b>
                  </a>
                  <div className="footer-email">
                    <a className="footer-col" href="mailto:buh@ups.org.kz">
                      <b>
                        <span className="footer-text">Бухгалтерия: buh@ups.org.kz</span>
                      </b>
                    </a>
                  </div>
                </div>

                <div className="footer-phone">
                  <a className="footer-col" href="tel:77011390404">
                    <b>
                      <p className="footer-text">Whats`App: +7 701 139 04 04</p>
                    </b>
                  </a>
                  <div className="footer-phone">
                    <a className="footer-col" href="tel:89102210068">
                      <b>
                        
                        <p className="footer-text" > Whats`App: +7 910 221 00 68</p>
                      </b>
                    </a>
                  </div>
                </div>

                <div className="footer-priem">
                  <p className="footer-text">Прием заявок: Пн-Пт с 09:00 до 18:00</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col2">
            <span className="middle-text-adress">
              Наш адрес:
              <br />
              <br />
            </span>
            <div className="row-info">
              <div className="col-md-6">
                <div className="footer-adress">
                  <br />
                  <span className="footer-text-adress">
                    060009 г. Атырау, проспект Абылхайыр хана, строение 22
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
