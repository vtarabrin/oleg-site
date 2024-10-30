import React from 'react';
import './komplekt-vik.css';
import { Link } from 'react-router-dom';
import Asaid from '../../components/Asaid/Asaid';
import { assets } from '../../assets/assets';

function KomplektVik() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <h3 class="title-example">Комплект визуально-измерительного контроля ВИК</h3>
          <p className="main-text-p">
            <b className="title-top">Комплект визуально-измерительного контроля (ВИК)</b>{' '}
            представляет собой набор инструментов, используемых для визуального и измерительного
            контроля качества изделий и конструкций.
          </p>
          <h4 className="zhbi-tittle-main">
            Преимущества комплекта визуально-измерительного контроля (ВИК):
          </h4>
          <p className="main-text-p">
            <b className="title-top">Высокая точность</b> — инструменты в комплекте обеспечивают
            высокую точность измерений, что позволяет выявлять и контролировать даже мельчайшие
            дефекты.
          </p>

          <p className="main-text-p">
            {' '}
            <b className="title-top">Эффективность</b> — комплект ВИК позволяет проводить контроль
            качества быстро и эффективно, что особенно важно при производстве большого объема
            изделий.
          </p>
          <p className="main-text-p">
            {' '}
            <b className="title-top">Многофункциональность</b> — в комплект могут входить различные
            инструменты, такие как микроскопы, измерительные приборы, осветительные устройства и
            другие, что делает его универсальным для различных задач контроля качества.{' '}
          </p>
          <h4 className="zhbi-tittle-main">
            Особенности комплекта визуально-измерительного контроля (ВИК):
          </h4>
          <p className="main-text-p">
            {' '}
            <b className="title-top">Микроскопы и лупы</b> — в комплект могут входить различные типы
            микроскопов и луп, позволяющих проводить детальный визуальный контроль мельчайших
            дефектов.
          </p>
          <p className="main-text-p">
            {' '}
            <b className="title-top">Измерительные приборы</b> — комплект может быть оснащен
            измерительными приборами для определения размеров, углов, глубины и других параметров
            изделий.
          </p>
          <p className="main-text-p">
            {' '}
            <b className="title-top">Осветительные устройства</b> — для обеспечения хорошей
            освещенности при проведении контроля качества могут быть включены специальные
            осветительные устройства{' '}
          </p>
          <h4 className="zhbi-tittle-main">
            Использование комплекта визуально-измерительного контроля (ВИК)
          </h4>
          <p className="main-text-p">
            {' '}
            <b className="title-top">Производство</b> — комплект ВИК применяется на производстве для
            контроля качества изготавливаемых изделий, выявления дефектов и отклонений от требуемых
            параметров.
          </p>
          <p className="main-text-p">
            {' '}
            <b className="title-top">Контроль качества</b> — специалисты по контролю качества
            используют комплект для проверки соответствия изделий стандартам и требованиям
            заказчиков.
          </p>
          <p className="main-text-p">
            {' '}
            <b className="title-top">Научные исследования</b> — в некоторых случаях комплект ВИК
            применяется для научных исследований, анализа материалов, структур и других объектов.{' '}
          </p>
          <p className="main-text-p">
            {' '}
            <b className="title-top">Комплект визуально-измерительного контроля (ВИК)</b> играет важную роль в обеспечении
            качества продукции и конструкций, а также при проведении научных исследований.
          </p>
          <div className="card">
            <Link to="/vik-expert">
              <img src={assets.VikExpert} alt="" />
              <p>ВИК эксперт НК</p>
            </Link>
            <Link to="/vik-baza-komplekt">
              <img src={assets.VikBazaKomplekt} alt="" />
              <p>ВИК базовый комплект</p>
            </Link>
            <Link to="/vik-naks">
              <img src={assets.VikExpert} alt="" />
              <p>ВИК НАКС</p>
            </Link>
            <Link to="/vik-yniversal-komplekt">
              <img src={assets.VikYniversalKomplekt} alt="" />
              <p>ВИК универсальный комплект</p>
            </Link>
            <Link to="/vik-expert-complect">
              <img src={assets.VikExpertComplect} alt="" />
              <p>ВИК экспертный комплект</p>
            </Link>
            <Link to="/vik-transneft">
              <img src={assets.VikTransneft} alt="" />
              <p>ВИК Транснефть</p>
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default KomplektVik;
