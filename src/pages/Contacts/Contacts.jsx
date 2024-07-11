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
            <span className="contact-span">AAAAAAAAA</span>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Contacts;
