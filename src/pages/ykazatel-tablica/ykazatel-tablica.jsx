import React from 'react';
import './ykazatel-tablica.css';
import Asaid from '../../components/Asaid/Asaid';

function YkazatelTablica() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <h3 class="title-example">Указательные таблички</h3>
          <h4 className="zhbi-tittle-main">Преимущества:</h4>
          <h4 className="zhbi-tittle-main-h3">Направление</h4>
          <p className="main-text-p">
            Указательные таблички помогают людям ориентироваться и находить нужное направление в
            различных местах, таких как здания, транспортные узлы, торговые центры и другие
            общественные места.
          </p>
          <h4 className="zhbi-tittle-main-h3">Информация</h4>
          <p className="main-text-p">
            Они предоставляют информацию о различных объектах, помещениях или услугах, что помогает
            людям быстро найти то, что им нужно.
          </p>
          <h4 className="zhbi-tittle-main-h3">Удобство</h4>
          <p className="main-text-p">
            Указательные таблички обычно размещаются на видных местах и легко заметны, что делает их
            удобными для использования и облегчает навигацию.
          </p>
          <h4 className="zhbi-tittle-main">Особенности:</h4>
          <h4 className="zhbi-tittle-main-h3">Ясность</h4>
          <p className="main-text-p">
            Они должны быть ясными и понятными, чтобы люди могли легко прочитать и понять информацию
            на них
          </p>
          <h4 className="zhbi-tittle-main-h3">Визуальное оформление</h4>
          <p className="main-text-p">
            Указательные таблички часто имеют различные графические элементы, символы или стрелки,
            чтобы визуально указывать направление или предоставлять дополнительную информацию.
          </p>
          <h4 className="zhbi-tittle-main">Использование:</h4>
          <h4 className="zhbi-tittle-main-h3">Здания и офисы</h4>
          <p className="main-text-p">
            В зданиях и офисах указательные таблички помогают людям найти нужные помещения,
            например, кабинеты, конференц-залы, туалеты или выходы.
          </p>
          <h4 className="zhbi-tittle-main-h3">Транспортные узлы</h4>
          <p className="main-text-p">
            На вокзалах, аэропортах или автобусных станциях указательные таблички указывают
            направление к платформам, выходам или другим объектам.
          </p>
          <h4 className="zhbi-tittle-main-h3">Торговые центры</h4>
          <p className="main-text-p">
            В торговых центрах указательные таблички помогают посетителям найти нужные магазины,
            рестораны или службы.
          </p>
          <p className="main-text-p">
            Указательные таблички играют важную роль в обеспечении удобства и эффективности
            навигации для людей в различных местах. Они помогают сориентироваться и найти нужное
            место или объект быстро и без лишних затруднений.
          </p>
        </aside>
      </div>
    </div>
  );
}

export default YkazatelTablica;
