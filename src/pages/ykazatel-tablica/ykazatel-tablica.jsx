import React from 'react';
import './ykazatel-tablica.css';
import Asaid from '../../components/Asaid/Asaid';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';

function YkazatelTablica() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <h3 class="title-example">Указательные таблички</h3>
          <h4 className="zhbi-tittle-main">Преимущества:</h4>
          <p className="main-text-p">
            <b className="title-top"> Направление </b> - указательные таблички помогают людям
            ориентироваться и находить нужное направление в различных местах, таких как здания,
            транспортные узлы, торговые центры и другие общественные места.
          </p>
          <p className="main-text-p">
            <b className="title-top"> Информация </b>- они предоставляют информацию о различных
            объектах, помещениях или услугах, что помогает людям быстро найти то, что им нужно.
          </p>

          <p className="main-text-p">
            <b className="title-top"> Удобство </b>- указательные таблички обычно размещаются на
            видных местах и легко заметны, что делает их удобными для использования и облегчает
            навигацию.
          </p>
          <h4 className="zhbi-tittle-main">Особенности:</h4>

          <p className="main-text-p">
            <b className="title-top"> Ясность </b> - они должны быть ясными и понятными, чтобы люди
            могли легко прочитать и понять информацию на них
          </p>

          <p className="main-text-p">
            <b className="title-top"> Визуальное оформление </b> - указательные таблички часто имеют
            различные графические элементы, символы или стрелки, чтобы визуально указывать
            направление или предоставлять дополнительную информацию.
          </p>
          <h4 className="zhbi-tittle-main">Использование:</h4>

          <p className="main-text-p">
            <b className="title-top"> Здания и офисы </b> - в зданиях и офисах указательные таблички
            помогают людям найти нужные помещения, например, кабинеты, конференц-залы, туалеты или
            выходы.
          </p>

          <p className="main-text-p">
            <b className="title-top"> Транспортные узлы </b> - на вокзалах, аэропортах или
            автобусных станциях указательные таблички указывают направление к платформам, выходам
            или другим объектам.
          </p>

          <p className="main-text-p">
            <b className="title-top"> Торговые центры </b> - в торговых центрах указательные
            таблички помогают посетителям найти нужные магазины, рестораны или службы.
          </p>
          <p className="main-text-p">
            <b className="title-top"> Указательные таблички </b> играют важную роль в обеспечении
            удобства и эффективности навигации для людей в различных местах. Они помогают
            сориентироваться и найти нужное место или объект быстро и без лишних затруднений.
          </p>
          <div className="card">
            <Link to="/tablica-marker-stolb">
              <img src={assets.YkazatelTablica} alt="" />
              <p>Таблички для маркерного столбика</p>
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default YkazatelTablica;
