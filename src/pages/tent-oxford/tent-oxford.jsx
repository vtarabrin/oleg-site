import './tent-oxford.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Asaid from '../../components/Asaid/Asaid';

function TentOxford() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <h3 class="title-example">Тент оксфорд</h3>
          <h4 className="zhbi-tittle-main">Преимущества:</h4>
          <h4 className="zhbi-tittle-main-h3">Прочность</h4>
          <p className="main-text-p">
            Тенты оксфорд обычно изготовлены из прочного и износостойкого материала, что делает их
            долговечными и надежными в использовании
          </p>
          <h4 className="zhbi-tittle-main-h3">Водонепроницаемость</h4>
          <p className="main-text-p">
            Они обладают хорошей водоотталкивающей способностью, что позволяет защитить содержимое
            от дождя и влаги
          </p>
          <h4 className="zhbi-tittle-main-h3"> Устойчивость к ультрафиолету</h4>
          <p className="main-text-p">
            Некоторые тенты оксфорд имеют специальное покрытие, которое защищает от воздействия
            ультрафиолетовых лучей, предотвращая выцветание и повреждение материала.
          </p>
          <h4 className="zhbi-tittle-main-h3"> Легкость</h4>
          <p className="main-text-p">
            Они обычно легкие и удобные в транспортировке, что делает их простыми в использовании и
            переноске.
          </p>
          <h4 className="zhbi-tittle-main">Особенности:</h4>
          <h4 className="zhbi-tittle-main-h3">Различные плотности</h4>
          <p className="main-text-p">
            Тенты оксфорд доступны в различных плотностях материала, что позволяет выбрать
            подходящий вариант в зависимости от требуемой прочности и защиты.
          </p>
          <h4 className="zhbi-tittle-main-h3">Устойчивость к плесени и гниению</h4>
          <p className="main-text-p">
            Некоторые тенты оксфорд обладают специальной обработкой, которая предотвращает развитие
            плесени и гниения на материале.
          </p>
          <h4 className="zhbi-tittle-main">Использование:</h4>
          <h4 className="zhbi-tittle-main-h3">Кемпинг и отдых на природе</h4>
          <p className="main-text-p">
            Тенты оксфорд часто используются для создания временного укрытия при кемпинге, пикнике
            или других активностях на открытом воздухе.
          </p>
          <h4 className="zhbi-tittle-main-h3">Защита от солнца</h4>
          <p className="main-text-p">
            Они могут использоваться для создания тени и защиты от солнечных лучей на пляже, во
            дворе или на открытой площадке
          </p>
          <h4 className="zhbi-tittle-main-h3"> Защита от погодных условий</h4>
          <p className="main-text-p">
            Тенты оксфорд могут использоваться для защиты от дождя, снега или ветра на строительных
            площадках, во время ремонтных работ или на открытых мероприятиях.
          </p>
          <h4 className="zhbi-tittle-main-h3"> Покрытие грузов</h4>
          <p className="main-text-p">
            Они также могут использоваться для покрытия грузов на грузовых автомобилях, прицепах или
            других транспортных средствах.
          </p>
          <p className="main-text-p">
            Тенты оксфорд представляют собой универсальное решение для защиты от погоды и создания
            временных укрытий в различных ситуациях.
          </p>
          <div className="card">
            <Link to="/tent-oxford-210pu">
              <img src="https://brezent.su/image/cache/catalog/category/1-98x100.jpg.webp" alt="" />
              <p>Тент оксфорд 210PU</p>
            </Link>
            <Link to="/tent-oxford-420pu">
              <img src="https://brezent.su/image/cache/catalog/category/1-98x100.jpg.webp" alt="" />
              <p>Тент оксфорд 420PU +</p>
            </Link>
            <Link to="/tent-oxford-ytep">
              <img src="https://brezent.su/image/cache/catalog/category/1-98x100.jpg.webp" alt="" />
              <p>Тент оксфорд утепленный</p>
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default TentOxford;
