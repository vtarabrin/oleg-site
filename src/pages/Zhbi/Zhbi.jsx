import './Zhbi.css';
import Asaid from '../../components/Asaid/Asaid';
import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';

function Zhbi() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <h3 class="title-example">ЖБИ кольца</h3>
          <h4 className="zhbi-tittle-main">Маркировка ЖБИ кольца</h4>
          <p className="main-text-p">
            Для идентификации железобетонных колец используется стандартизированная
            буквенно-цифровая маркировка. Буквенные обозначения включают:
          </p>
          <p className="main-text-p">
            <b className="title-top">КС </b> - стеновые кольца, используемые в стесненных условиях;
          </p>
          <p className="main-text-p">
            <b className="title-top">ДК </b> - монолитный "стакан", кольцо с дном;
          </p>
          <p className="main-text-p">
            <b className="title-top">ПП </b> - крышка;
          </p>
          <p className="main-text-p">
            <b className="title-top">ПН </b> - дно кольца;
          </p>
          <p className="main-text-p">
            <b className="title-top">ПК </b> - монолитная конструкция, включающая кольцо и крышку;
          </p>
          <p className="main-text-p">
            <b className="title-top">КЛК </b> - изделия для прокладки канализационных и ливневых
            систем;
          </p>
          <p className="main-text-p">
            <b className="title-top">КО </b> - опорное кольцо, обеспечивающее стабильное положение
            колодезной конструкции;
          </p>
          <p className="main-text-p">
            <b className="title-top">КФК </b> - изделия для сооружения коллекторных и дренажных
            систем;
          </p>
          <p className="main-text-p">
            <b className="title-top">КВГ </b> - ЖБ-кольца для обустройства водозаборных колодцев и
            прокладки газопровода.
          </p>
          <p className="main-text-p">
            Числовые обозначения характеризуют высоту, толщину, массу и внутренний диаметр ЖБ-колец.
          </p>
          <div className="card">
            <Link to="/pdk">
              <img src={assets.pdk10} alt="" />
              <p>Плиты днища колодца</p>
            </Link>
            <Link to="/kolca">
              <img src={assets.kolca} alt="" />
              <p>Кольца</p>
            </Link>
            <Link to="/ppk">
              <img src={assets.pp10} alt="" />
              <p>Плита перекрытия колодцев</p>
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Zhbi;
