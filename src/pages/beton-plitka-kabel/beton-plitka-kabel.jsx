import React from 'react';
import './beton-plitka-kabel.css';
import { Link } from 'react-router-dom';
import Asaid from '../../components/Asaid/Asaid';
import { assets } from '../../assets/assets';

function BetonPlitkaKabel() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <h3 class="title-example">Бетонная плитка для защиты кабеля</h3>
          <p className="main-text-p">
            Бетонная плитка для защиты кабеля является важным элементом инфраструктуры, используемым
            для защиты кабельных линий от повреждений и обеспечения их долговечности.
          </p>
          <h4 className="zhbi-tittle-main">Преимущества:</h4>
          <h4 className="zhbi-tittle-main-h3">Прочность</h4>
          <p className="main-text-p">
            Бетонная плитка обладает высокой прочностью, что обеспечивает надежную защиту кабельных
            линий от механических повреждений, воздействия окружающей среды и нагрузок.
          </p>
          <h4 className="zhbi-tittle-main-h3">Долговечность</h4>
          <p className="main-text-p">
            Бетонные плитки имеют долгий срок службы и сохраняют свои качества на протяжении
            длительного времени, что снижает необходимость в регулярной замене.
          </p>
          <h4 className="zhbi-tittle-main-h3"> Устойчивость к внешним воздействиям</h4>
          <p className="main-text-p">
            Бетон обладает хорошей устойчивостью к агрессивным средам, ультрафиолетовому излучению,
            изменениям температуры и другим внешним воздействиям.
          </p>

          <h4 className="zhbi-tittle-main">Особенности:</h4>
          <h4 className="zhbi-tittle-main-h3">Размеры и форма</h4>
          <p className="main-text-p">
            Тенты оксфорд доступны в различных плотностях материала, что позволяет выбрать
            подходящий вариант в зависимости от требуемой прочности и защиты.
          </p>
          <h4 className="zhbi-tittle-main-h3">Специальные отверстия</h4>
          <p className="main-text-p">
            На бетонных плитках могут быть специально предусмотрены отверстия для прокладки кабелей,
            что обеспечивает удобство при установке и обслуживании кабельных линий.
          </p>
          <h4 className="zhbi-tittle-main-h3">Маркировка</h4>
          <p className="main-text-p">
            Некоторые бетонные плитки могут иметь маркировку для удобства идентификации и различения
            различных типов кабелей.
          </p>
          <h4 className="zhbi-tittle-main">Использование:</h4>
          <h4 className="zhbi-tittle-main-h3">Укладка кабелей</h4>
          <p className="main-text-p">
            Бетонная плитка укладывается на земле или внутри траншеи для защиты проложенных
            кабельных линий.
          </p>
          <h4 className="zhbi-tittle-main-h3">Защита кабелей</h4>
          <p className="main-text-p">
            При помощи бетонной плитки обеспечивается защита кабелей от повреждений, механических
            воздействий, коррозии и других негативных факторов.
          </p>
          <h4 className="zhbi-tittle-main-h3">Обслуживание и ремонт</h4>
          <p className="main-text-p">
            Благодаря бетонной плитке процессы обслуживания и ремонта кабельных линий становятся
            более удобными и эффективными.
          </p>
          <p className="main-text-p">
            Бетонная плитка для защиты кабеля играет важную роль в обеспечении надежности работы
            кабельных сетей и инфраструктуры связи.
          </p>
          <div className="card">
            <Link to="/beton-plitka-kabel2">
              <img src={assets.betonPlitkaKabel} alt="" />
              <p>Бетонная плитка для защиты кабеля</p>
            </Link>
            <Link to="/beton-plitka-kabel-danger">
              <img src={assets.danger} alt="" />
              <p>Плитка бетонная для защиты кабеля "DANGER - ОПАСНО"</p>
            </Link>
            <Link to="/plitka-pzk">
              <img src={assets.pzk} alt="" />
              <p>Плитка ПЗК</p>
            </Link>
            <Link to="/plitka-ybk5">
              <img src={assets.ybk5} alt="" />
              <p>Плитка УБК 5</p>
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default BetonPlitkaKabel;
