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
            Комплект визуально-измерительного контроля (ВИК) представляет собой набор инструментов,
            используемых для визуального и измерительного контроля качества изделий и конструкций.
          </p>
          <h4 className="zhbi-tittle-main">
            Преимущества комплекта визуально-измерительного контроля (ВИК):
          </h4>
          <h4 className="zhbi-tittle-main-h3">Высокая точность:</h4>
          <p className="main-text-p">
            Инструменты в комплекте обеспечивают высокую точность измерений, что позволяет выявлять
            и контролировать даже мельчайшие дефекты.
          </p>

          <h4 className="zhbi-tittle-main-h3"> Эффективность:</h4>
          <p className="main-text-p">
            {' '}
            Комплект ВИК позволяет проводить контроль качества быстро и эффективно, что особенно
            важно при производстве большого объема изделий.
          </p>
          <h4 className="zhbi-tittle-main-h3">Многофункциональность:</h4>
          <p className="main-text-p">
            {' '}
            В комплект могут входить различные инструменты, такие как микроскопы, измерительные
            приборы, осветительные устройства и другие, что делает его универсальным для различных
            задач контроля качества.{' '}
          </p>
          <h4 className="zhbi-tittle-main">
            Особенности комплекта визуально-измерительного контроля (ВИК):
          </h4>
          <h4 className="zhbi-tittle-main-h3"> Микроскопы и лупы: </h4>
          <p className="main-text-p">
            {' '}
            В комплект могут входить различные типы микроскопов и луп, позволяющих проводить
            детальный визуальный контроль мельчайших дефектов.
          </p>
          <h4 className="zhbi-tittle-main-h3">Измерительные приборы: </h4>
          <p className="main-text-p">
            {' '}
            Комплект может быть оснащен измерительными приборами для определения размеров, углов,
            глубины и других параметров изделий.
          </p>
          <h4 className="zhbi-tittle-main-h3">Осветительные устройства: </h4>
          <p className="main-text-p">
            {' '}
            Для обеспечения хорошей освещенности при проведении контроля качества могут быть
            включены специальные осветительные устройства.{' '}
          </p>
          <h4 className="zhbi-tittle-main">
            Использование комплекта визуально-измерительного контроля (ВИК)
          </h4>
          <h4 className="zhbi-tittle-main-h3">Производство: </h4>
          <p className="main-text-p">
            {' '}
            Комплект ВИК применяется на производстве для контроля качества изготавливаемых изделий,
            выявления дефектов и отклонений от требуемых параметров.
          </p>
          <h4 className="zhbi-tittle-main-h3"> Контроль качества:</h4>
          <p className="main-text-p">
            {' '}
            Специалисты по контролю качества используют комплект для проверки соответствия изделий
            стандартам и требованиям заказчиков.
          </p>
          <h4 className="zhbi-tittle-main-h3">Научные исследования: </h4>
          <p className="main-text-p">
            {' '}
            В некоторых случаях комплект ВИК применяется для научных исследований, анализа
            материалов, структур и других объектов.{' '}
          </p>
          <p className="main-text-p">
            {' '}
            Комплект визуально-измерительного контроля (ВИК) играет важную роль в обеспечении
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
