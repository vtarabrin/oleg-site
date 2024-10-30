import './tent-oxford.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Asaid from '../../components/Asaid/Asaid';
import { assets } from '../../assets/assets';

function TentOxford() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <h3 class="title-example">Тент оксфорд</h3>
          <h4 className="zhbi-tittle-main">Преимущества:</h4>

          <p className="main-text-p">
            <b className="title-top">Прочность </b> - тенты оксфорд обычно изготовлены из прочного и
            износостойкого материала, что делает их долговечными и надежными в использовании
          </p>

          <p className="main-text-p">
            <b className="title-top">Водонепроницаемость </b> - они обладают хорошей
            водоотталкивающей способностью, что позволяет защитить содержимое от дождя и влаги
          </p>

          <p className="main-text-p">
            <b className="title-top">Устойчивость к ультрафиолету </b> - некоторые тенты оксфорд
            имеют специальное покрытие, которое защищает от воздействия ультрафиолетовых лучей,
            предотвращая выцветание и повреждение материала.
          </p>

          <p className="main-text-p">
            <b className="title-top">Легкость </b> - они обычно легкие и удобные в транспортировке,
            что делает их простыми в использовании и переноске.
          </p>
          <h4 className="zhbi-tittle-main">Особенности:</h4>

          <p className="main-text-p">
            <b className="title-top">Различные плотности </b> - тенты оксфорд доступны в различных
            плотностях материала, что позволяет выбрать подходящий вариант в зависимости от
            требуемой прочности и защиты.
          </p>
          <p className="main-text-p">
            <b className="title-top">Устойчивость к плесени и гниению </b> - некоторые тенты оксфорд
            обладают специальной обработкой, которая предотвращает развитие плесени и гниения на
            материале.
          </p>
          <h4 className="zhbi-tittle-main">Использование:</h4>
          <p className="main-text-p">
            <b className="title-top">Кемпинг и отдых на природе </b> - тенты оксфорд часто
            используются для создания временного укрытия при кемпинге, пикнике или других
            активностях на открытом воздухе.
          </p>

          <p className="main-text-p">
            <b className="title-top">Защита от солнца </b> - они могут использоваться для создания
            тени и защиты от солнечных лучей на пляже, во дворе или на открытой площадке
          </p>
          <p className="main-text-p">
            <b className="title-top">Защита от погодных условий </b> - тенты оксфорд могут
            использоваться для защиты от дождя, снега или ветра на строительных площадках, во время
            ремонтных работ или на открытых мероприятиях.
          </p>

          <p className="main-text-p">
            <b className="title-top">Покрытие грузов </b> - они также могут использоваться для
            покрытия грузов на грузовых автомобилях, прицепах или других транспортных средствах.
          </p>
          <p className="main-text-p">
            <b className="title-top">Тенты оксфорд </b> представляют собой универсальное решение для
            защиты от погоды и создания временных укрытий в различных ситуациях.
          </p>
          <div className="card">
            <Link to="/tent-oxford-210pu">
              <img src={assets.tentOxford210PU} alt="" />
              <p>Тент оксфорд 210PU</p>
            </Link>
            <Link to="/tent-oxford-420pu">
              <img src={assets.tentOxford420PU} alt="" />
              <p>Тент оксфорд 420PU+</p>
            </Link>
            <Link to="/tent-oxford-ytep">
              <img src={assets.tentOxford210PUYtep} alt="" />
              <p>Тент оксфорд утепленный</p>
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default TentOxford;
