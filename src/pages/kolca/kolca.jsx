import './kolca.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Asaid from '../../components/Asaid/Asaid';
import { assets } from '../../assets/assets';

function Kolca() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <h3 class="title-example">Кольца</h3>
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
            <Link to="/kolca-stenovie-209">
              <img src={assets.kolcaStenniye} alt="" />
              <p>Кольца ЖБИ Стеновые КС 20.9 ГОСТ 8020-2016</p>
            </Link>
            <Link to="/kolca-stenovie-159">
              <img src={assets.kolcaStenniye} alt="" />
              <p>Кольца ЖБИ Стеновые КС 15.9 ГОСТ 8020-2016</p>
            </Link>
            <Link to="/kolca-stenovie-206">
              <img src={assets.kolcaStenniye} alt="" />
              <p>Кольца ЖБИ Стеновые КС 20.6 ГОСТ 8020-2016</p>
            </Link>
            <Link to="/kolca-stenovie-156">
              <img src={assets.kolcaStenniye} alt="" />
              <p>Кольца ЖБИ Стеновые КС 15.6 ГОСТ 8020-2016</p>
            </Link>
            <Link to="/kolca-stenovie-106">
              <img src={assets.kolcaStenniye} alt="" />
              <p>Кольца ЖБИ Стеновые КС 10.6 ГОСТ 8020-2016</p>
            </Link>
            <Link to="/kolca-stenovie-73">
              <img src={assets.kolcaStenniye} alt="" />
              <p>Кольца ЖБИ Стеновые КС 7.3</p>
            </Link>
            <Link to="/kolca-stenovie-203">
              <img src={assets.kolcaStenniye} alt="" />
              <p>Кольца ЖБИ Стеновые КС 20-3</p>
            </Link>
            <Link to="/pkolca-stenovie-153dk">
              <img src={assets.kolcaStenniye} alt="" />
              <p>Кольца ЖБИ Стеновые КС 15-3</p>
            </Link>
            <Link to="/kolca-stenovie-103">
              <img src={assets.kolcaStenniye} alt="" />
              <p>Кольца ЖБИ Стеновые КС 10.3</p>
            </Link>
            <Link to="/kolca-opornoe-6">
              <img src={assets.kolcaOpornoe} alt="" />
              <p>Кольцо опорное КО-6</p>
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Kolca;
