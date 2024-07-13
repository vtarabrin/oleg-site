import React from 'react';
import Asaid from '../../components/Asaid/Asaid';
import './Contacts.css';

function Contacts() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <h3 class="title-example">Контакты</h3>
          <div className="contacts">
            <div className="contacts-col1">
              <div className="contacts-row1">
                <img src="https://brezent.su/core/icon/address.svg" alt="" />
                <div>
                  <span>Адрес магазина</span>
                  <b>там там там</b>
                  <br />
                  <br />
                  <b>г.Атырау</b>
                </div>
              </div>
              <div className="contacts-row1">
                <img src="https://brezent.su/core/icon/address.svg" alt="" />
                <div>
                  <span>Телефоны:</span>
                  <a href="tel:89103603114"> 89103603114</a>
                  <br />
                  <a href="tel:89103603114">89102210068</a>
                </div>
              </div>

              <div className="contacts-row1">
                <img src="https://brezent.su/core/icon/address.svg" alt="" />
                <div>
                  <span>Email для писем и заявок:</span>
                  <a href="tel:89103603114"> fwafa@mail.ru</a>
                  <br />
                  <a href="tel:89103603114">21frwaf@gmail.com</a>
                </div>
              </div>

              <div className="contacts-row1">
                <img src="https://brezent.su/core/icon/address.svg" alt="" />
                <div>
                  <span>Время работы</span>
                  <b>
                    Склад: с 0 до 18
                    <br />
                    Звонки принимаем с: ""
                  </b>
                </div>
              </div>
            </div>
            <div className="contacts-col2"></div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Contacts;
