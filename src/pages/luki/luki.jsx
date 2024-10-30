import React from 'react';
import './luki.css';
import Asaid from '../../components/Asaid/Asaid';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';

function Luki() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <h3 class="title-example">Люки</h3>
          <h4 className="zhbi-tittle-main">Преимущества:</h4>
          <p className="main-text-p">
            <b className="title-top">Безопасность </b> - люки обеспечивают безопасный доступ к
            подземным коммуникациям, таким как канализация, теплотрассы, водопроводные системы и
            электрические сети.
          </p>
          <p className="main-text-p">
            <b className="title-top">Удобство обслуживания </b>- люки позволяют быстрый доступ к
            инженерным коммуникациям для проведения обслуживания, ремонта и проверки состояния
            систем.
          </p>
          <p className="main-text-p">
            <b className="title-top">Прочность </b> - качественные люки изготовлены из прочных
            материалов, что обеспечивает надежное покрытие для подземных систем.
          </p>
          <p className="main-text-p">
            <b className="title-top">Долговечность </b>- люки, изготовленные из высококачественных
            материалов, обладают долгим сроком службы и устойчивы к воздействию окружающей среды.
          </p>
          <h4 className="zhbi-tittle-main">Особенности:</h4>
          <p className="main-text-p">
            <b className="title-top">Безопасность </b> - качественные люки оборудованы замками или
            устройствами предотвращения случайного открытия, что повышает безопасность в рабочих
            условиях.
          </p>
          <p className="main-text-p">
            <b className="title-top">Водонепроницаемость </b> - некоторые люки обладают свойствами
            водонепроницаемости, что важно для защиты подземных систем от воды и влаги.
          </p>
          <h4 className="zhbi-tittle-main">Использование:</h4>
          <p className="main-text-p">
            <b className="title-top">Городская инфраструктура </b>- люки широко используются для
            обеспечения доступа к канализационным системам, теплотрассам, водопроводам и другим
            инженерным коммуникациям в городах.
          </p>
          <p className="main-text-p">
            <b className="title-top">Промышленные объекты </b> - в промышленных комплексах люки
            используются для обслуживания и ремонта различных инженерных систем.
          </p>
          <p className="main-text-p">
            <b className="title-top"> Транспортная инфраструктура </b> - на дорогах и
            автомагистралях люки используются для доступа к подземным электрическим сетям, туннелям
            и другим инженерным системам.
          </p>
          <p className="main-text-p">
            <b className="title-top"> Люки </b> играют важную роль в обеспечении безопасности,
            доступности и обслуживании подземных инженерных коммуникаций в различных областях
            городской и промышленной инфраструктуры.
          </p>
          <div className="card">
            <Link to="/luki-polimer">
              <img src={assets.LukiPolimer} alt="" />
              <p>Люки полимернопесчанный</p>
            </Link>
            <Link to="/luk-beton">
              <img src={assets.LukBeton} alt="" />
              <p>Люк бетонный</p>
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Luki;
