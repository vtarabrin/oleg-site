import './Asaid.css';
import { Link } from 'react-router-dom';
import React from 'react';

function Asaid() {
  return (
    <div className="main">
      <div className="main-inner">
        <aside className="aside-left">
          <div className="main-tittle">
            <span className="main-tittle-inner">Меню</span>
          </div>
          <ul className="main-left">
            <li className="li-left">
              <p>
                <Link to="/polog-bresent">Полог брезентовый</Link>
              </p>
            </li>
            <li className="li-left">
              <p>
                <Link to="/tent-oxford">Тент Оксфорд</Link>
              </p>
            </li>
            <li className="li-left">
              <p>
                <Link to="/tent-parapulin">Тент Тарпаулин</Link>
              </p>
            </li>
            <li className="li-left">
              <p>
                <Link to="/tent-pvx">Тенты ПВХ</Link>
              </p>
            </li>
            <li className="li-left">
              <p>
                <Link to="/zhbi">ЖБИ</Link>
              </p>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
}

export default Asaid;
