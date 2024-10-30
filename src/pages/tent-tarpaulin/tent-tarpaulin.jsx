import './tent-tarpaulin.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Asaid from '../../components/Asaid/Asaid';
import { assets } from '../../assets/assets';

function TentTarpaulin() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <h3 class="title-example">Тент тарпаулин</h3>
          <p className="main-text-p">
            <b className="title-top">Тент тарпаулин </b> — это вид покрытия, которое
            частоиспользуется для защиты грузов и материалов от внешних воздействий.
          </p>
          <h4 className="zhbi-tittle-main">Преимущества:</h4>

          <p className="main-text-p">
            <b className="title-top">Прочность </b> - тарпаулины обычно изготовлены из прочного
            материала, который обеспечивает надежную защиту грузов от повреждений.
          </p>

          <p className="main-text-p">
            <b className="title-top">Водонепроницаемость </b> - они защищают грузы от дождя, снега и
            влаги, помогая сохранить их сухими. - Устойчивость к ультрафиолету: некоторые тарпаулины
            обладают способностью защищать грузы от воздействия ультрафиолетовых лучей, предотвращая
            их повреждение.
          </p>

          <p className="main-text-p">
            <b className="title-top">Легкость </b> - тарпаулины легко устанавливаются, складываются
            и транспортируются, что делает их удобными в использовании.
          </p>
          <h4 className="zhbi-tittle-main">Особенности:</h4>

          <p className="main-text-p">
            <b className="title-top">Различные размеры и цвета </b> - тарпаулины доступны в
            различных размерах и цветах, что позволяет выбирать подходящий вариант для конкретных
            потребностей.
          </p>

          <p className="main-text-p">
            <b className="title-top">Крепления </b> - они часто оснащены креплениями, резинками или
            люверсами для удобного крепления к различным поверхностям.
          </p>
          <h4 className="zhbi-tittle-main">Использование:</h4>

          <p className="main-text-p">
            <b className="title-top">Транспортировка грузов </b> - тарпаулины широко используются
            для покрытия грузов на грузовых автомобилях, прицепах, кораблях и других транспортных
            средствах.
          </p>

          <p className="main-text-p">
            <b className="title-top">Строительство </b> - они могут применяться на строительных
            площадках для защиты строительных материалов от погодных условий.
          </p>

          <p className="main-text-p">
            <b className="title-top">Кемпинг и отдых </b> - используются для создания временного
            укрытия при кемпинге или других активностях на открытом воздухе.
          </p>
          <p className="main-text-p">
            <b className="title-top">Тарпаулины </b> представляют собой универсальное и удобное
            средство для защиты различных грузов и материалов от внешних факторов, обеспечивая им
            дополнительную безопасность и сохранность.
          </p>
          <div className="card">
            <Link to="/tent-tarpaulin120">
              <img src={assets.tentParapulin120} alt="" />
              <p>Тент тарпаулин 120гр/м2</p>
            </Link>
            <Link to="/tent-tarpaulin180">
              <img src={assets.tentParapulin180} alt="" />
              <p>Тент тарпаулин 180гр/м2</p>
            </Link>
            <Link to="/tent-tarpaulin70">
              <img src={assets.tentParapulin70} alt="" />
              <p>Тент тарпаулин 70гр/м2</p>
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default TentTarpaulin;
