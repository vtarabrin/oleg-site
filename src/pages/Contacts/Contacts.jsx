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
                  <span>Адрес:</span>
                  <b>060009 г. Атырау, проспект Абылхайыр хана, строение 22</b>
                  <br />
                </div>
              </div>
              <div className="contacts-row1">
                <img src="https://brezent.su/core/icon/address.svg" alt="" />
                <div>
                  <span>Телефоны:</span>
                  <a href="tel:87011390404"> Whats`App: +7 701 139 04 04</a>
                  <br />
                  <br />
                  <a href="tel:89102210068"> Whats`App: +7 910 221 00 68</a>
                  <br />
                </div>
              </div>

              <div className="contacts-row1">
                <img src="https://brezent.su/core/icon/address.svg" alt="" />
                <div>
                  <span>Email для писем и заявок:</span>
                  <a href="tel:89103603114"> Отдел продаж: sales@ups.org.kz</a>
                  <br />
                  <br />
                  <a href="tel:89103603114">Бухгалтерия: buh@ups.org.kz</a>
                  <br />
                  <br />
                  <a href="tel:89103603114">Общие вопросы: info@ups.org.kz</a>
                </div>
              </div>
              <div className="contacts-row1">
                <img src="https://brezent.su/core/icon/address.svg" alt="" />
                <div>
                  <span>Прием заявок:</span>

                  <b>Пн-Пт с 09:00 до 18:00</b>
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
