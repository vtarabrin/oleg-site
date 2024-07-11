import React from 'react';
import Asaid from '../../components/Asaid/Asaid';
import './Contacts.css';

function Contacts() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <div className="main-tittle">
            <span className="main-tittle-inner">Контакты</span>
          </div>
          <div className="contact-info">
            <span class="contact-span" title="Название">
              ТОО "Реал Пром Техно"
            </span>
            <span class="contact-span" title="Контакное лицо">
              Олег
            </span>
            <span class="contact-span" title="Телефон">
              89102210068
            </span>
            <span class="contact-span" title="Сайт компании">
              ТОО "Реал Пром Техно"
            </span>
            <span class="contact-span" title="Email">
              v.tarabrin03@gmail.com
            </span>
            <span class="contact-span" title="WhatsApp">
              89103603114
            </span>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Contacts;
