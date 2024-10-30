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
            <b className="title-top">Бетонная плитка для защиты кабеля </b> - является важным
            элементом инфраструктуры, используемым для защиты кабельных линий от повреждений и
            обеспечения их долговечности.
          </p>
          <h4 className="zhbi-tittle-main">Преимущества:</h4>

          <p className="main-text-p">
            <b className="title-top">Прочность </b> - Бетонная плитка обладает высокой прочностью,
            что обеспечивает надежную защиту кабельных линий от механических повреждений,
            воздействия окружающей среды и нагрузок.
          </p>

          <p className="main-text-p">
            <b className="title-top">Долговечность </b> - Бетонные плитки имеют долгий срок службы и
            сохраняют свои качества на протяжении длительного времени, что снижает необходимость в
            регулярной замене.
          </p>

          <p className="main-text-p">
            <b className="title-top">Устойчивость к внешним воздействиям </b> - Бетон обладает
            хорошей устойчивостью к агрессивным средам, ультрафиолетовому излучению, изменениям
            температуры и другим внешним воздействиям.
          </p>

          <h4 className="zhbi-tittle-main">Особенности:</h4>

          <p className="main-text-p">
          <b className="title-top">Размеры и форма </b> - тенты оксфорд доступны в различных плотностях материала, что позволяет выбрать
            подходящий вариант в зависимости от требуемой прочности и защиты.
          </p>
          <p className="main-text-p">
          <b className="title-top">Специальные отверстия </b> - на бетонных плитках могут быть специально предусмотрены отверстия для прокладки кабелей,
            что обеспечивает удобство при установке и обслуживании кабельных линий.
          </p>
          <p className="main-text-p">
          <b className="title-top">Маркировка </b> - некоторые бетонные плитки могут иметь маркировку для удобства идентификации и различения
            различных типов кабелей.
          </p>
          <h4 className="zhbi-tittle-main">Использование:</h4>
          <p className="main-text-p">
          <b className="title-top">Укладка кабелей </b> - бетонная плитка укладывается на земле или внутри траншеи для защиты проложенных
            кабельных линий.
          </p>
          <p className="main-text-p">
          <b className="title-top">Защита кабелей </b> - при помощи бетонной плитки обеспечивается защита кабелей от повреждений, механических
            воздействий, коррозии и других негативных факторов.
          </p>
          <p className="main-text-p">
          <b className="title-top">Обслуживание и ремонт </b> - благодаря бетонной плитке процессы обслуживания и ремонта кабельных линий становятся
            более удобными и эффективными.
          </p>
          <p className="main-text-p">
          <b className="title-top">Бетонная плитка для защиты кабеля </b> - играет важную роль в обеспечении надежности работы
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
