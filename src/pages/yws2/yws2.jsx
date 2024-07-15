import './yws2.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Asaid from '../../components/Asaid/Asaid';

function Yws2() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <h3 class="title-example">Универсальный шаблон сварщика УШС-2</h3>
          <h4 className="zhbi-tittle-main">Маркировка ЖБИ кольца</h4>
          <p className="main-text-p">
            Для идентификации железобетонных колец используется стандартизированная
            буквенно-цифровая маркировка. Буквенные обозначения включают:
          </p>
          <p className="main-text-p">КС - стеновые кольца, используемые в стесненных условиях;</p>
          <p className="main-text-p">ДК - монолитный "стакан", кольцо с дном;</p>
          <p className="main-text-p">ПП - крышка;</p>
          <p className="main-text-p">ПН - дно кольца;</p>
          <p className="main-text-p">ПК - монолитная конструкция, включающая кольцо и крышку;</p>
          <p className="main-text-p">
            КЛК - изделия для прокладки канализационных и ливневых систем;
          </p>
          <p className="main-text-p">
            КО - опорное кольцо, обеспечивающее стабильное положение колодезной конструкции;
          </p>
          <p className="main-text-p">
            КФК - изделия для сооружения коллекторных и дренажных систем;
          </p>
          <p className="main-text-p">
            КВГ - ЖБ-кольца для обустройства водозаборных колодцев и прокладки газопровода.
          </p>
          <p className="main-text-p">
            Числовые обозначения характеризуют высоту, толщину, массу и внутренний диаметр ЖБ-колец.
          </p>
          <div className="card">
            <Link to="/pdk">
              <img src="https://brezent.su/image/cache/catalog/category/1-98x100.jpg.webp" alt="" />
              <p>Полог брезентовый</p>
            </Link>
            <Link to="/kolco">
              <img src="https://brezent.su/image/cache/catalog/category/1-98x100.jpg.webp" alt="" />
              <p>Полог брезентовый</p>
            </Link>
            <Link to="/ppk">
              <img src="https://brezent.su/image/cache/catalog/category/1-98x100.jpg.webp" alt="" />
              <p>Полог брезентовый</p>
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Yws2;
