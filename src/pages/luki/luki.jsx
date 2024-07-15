import React from 'react';
import './luki.css';
import { Link } from 'react-router-dom';
import Asaid from '../../components/Asaid/Asaid';

function Luki() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <h3 class="title-example">Люки</h3>
          <h4 className="zhbi-tittle-main">Преимущества:</h4>
          <h4 className="zhbi-tittle-main-h3">Безопасность</h4>
          <p className="main-text-p">
            Люки обеспечивают безопасный доступ к подземным коммуникациям, таким как канализация,
            теплотрассы, водопроводные системы и электрические сети.
          </p>
          <h4 className="zhbi-tittle-main-h3">Удобство обслуживания</h4>
          <p className="main-text-p">
            Люки позволяют быстрый доступ к инженерным коммуникациям для проведения обслуживания,
            ремонта и проверки состояния систем.
          </p>
          <h4 className="zhbi-tittle-main-h3">Прочность</h4>
          <p className="main-text-p">
            Качественные люки изготовлены из прочных материалов, что обеспечивает надежное покрытие
            для подземных систем.
          </p>
          <h4 className="zhbi-tittle-main-h3"> Долговечность</h4>
          <p className="main-text-p">
            Люки, изготовленные из высококачественных материалов, обладают долгим сроком службы и
            устойчивы к воздействию окружающей среды.
          </p>
          <h4 className="zhbi-tittle-main">Особенности:</h4>
          <h4 className="zhbi-tittle-main-h3">Безопасность</h4>
          <p className="main-text-p">
            Качественные люки оборудованы замками или устройствами предотвращения случайного
            открытия, что повышает безопасность в рабочих условиях.
          </p>
          <h4 className="zhbi-tittle-main-h3">Водонепроницаемость</h4>
          <p className="main-text-p">
            Некоторые люки обладают свойствами водонепроницаемости, что важно для защиты подземных
            систем от воды и влаги.
          </p>
          <h4 className="zhbi-tittle-main">Использование:</h4>
          <h4 className="zhbi-tittle-main-h3">Городская инфраструктура</h4>
          <p className="main-text-p">
            Люки широко используются для обеспечения доступа к канализационным системам,
            теплотрассам, водопроводам и другим инженерным коммуникациям в городах.
          </p>
          <h4 className="zhbi-tittle-main-h3">Промышленные объекты</h4>
          <p className="main-text-p">
            В промышленных комплексах люки используются для обслуживания и ремонта различных
            инженерных систем.
          </p>
          <h4 className="zhbi-tittle-main-h3">Транспортная инфраструктура</h4>
          <p className="main-text-p">
            На дорогах и автомагистралях люки используются для доступа к подземным электрическим
            сетям, туннелям и другим инженерным системам.
          </p>
          <p className="main-text-p">
            Люки играют важную роль в обеспечении безопасности, доступности и обслуживании подземных
            инженерных коммуникаций в различных областях городской и промышленной инфраструктуры.
          </p>
        </aside>
      </div>
    </div>
  );
}

export default Luki;
