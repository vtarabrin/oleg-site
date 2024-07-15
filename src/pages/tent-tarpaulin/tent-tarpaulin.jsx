import './tent-tarpaulin.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Asaid from '../../components/Asaid/Asaid';

function TentTarpaulin() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <h3 class="title-example">Тент тарпаулин</h3>
          <p className="main-text-p">
            Тент тарпаулин — это вид покрытия, которое частоиспользуется для защиты грузов и
            материалов от внешних воздействий.
          </p>
          <h4 className="zhbi-tittle-main">Преимущества:</h4>
          <h4 className="zhbi-tittle-main-h3">Прочность</h4>
          <p className="main-text-p">
            Тарпаулины обычно изготовлены из прочного материала, который обеспечивает надежную
            защиту грузов от повреждений.
          </p>
          <h4 className="zhbi-tittle-main-h3">Водонепроницаемость</h4>
          <p className="main-text-p">
            Они защищают грузы от дождя, снега и влаги, помогая сохранить их сухими. - Устойчивость
            к ультрафиолету: некоторые тарпаулины обладают способностью защищать грузы от
            воздействия ультрафиолетовых лучей, предотвращая их повреждение.
          </p>
          <h4 className="zhbi-tittle-main-h3">Легкость</h4>
          <p className="main-text-p">
            Тарпаулины легко устанавливаются, складываются и транспортируются, что делает их
            удобными в использовании.
          </p>
          <h4 className="zhbi-tittle-main">Особенности:</h4>
          <h4 className="zhbi-tittle-main-h3">Различные размеры и цвета</h4>
          <p className="main-text-p">
            Тарпаулины доступны в различных размерах и цветах, что позволяет выбирать подходящий
            вариант для конкретных потребностей.
          </p>
          <h4 className="zhbi-tittle-main-h3">Крепления</h4>
          <p className="main-text-p">
            Они часто оснащены креплениями, резинками или люверсами для удобного крепления к
            различным поверхностям.
          </p>
          <h4 className="zhbi-tittle-main">Использование:</h4>
          <h4 className="zhbi-tittle-main-h3">Транспортировка грузов</h4>

          <p className="main-text-p">
            Тарпаулины широко используются для покрытия грузов на грузовых автомобилях, прицепах,
            кораблях и других транспортных средствах.
          </p>
          <h4 className="zhbi-tittle-main-h3">Строительство</h4>
          <p className="main-text-p">
            Они могут применяться на строительных площадках для защиты строительных материалов от
            погодных условий.
          </p>
          <h4 className="zhbi-tittle-main-h3">Кемпинг и отдых на природе</h4>
          <p className="main-text-p">
            Используются для создания временного укрытия при кемпинге или других активностях на
            открытом воздухе.
          </p>
          <p className="main-text-p">
            Тарпаулины представляют собой универсальное и удобное средство для защиты различных
            грузов и материалов от внешних факторов, обеспечивая им дополнительную безопасность и
            сохранность.
          </p>
          <div className="card">
            <Link to="/pdk">
              <img src="https://brezent.su/image/cache/catalog/category/1-98x100.jpg.webp" alt="" />
              <p>Тент тарпаулин 120гр/м2</p>
            </Link>
            <Link to="/kolco">
              <img src="https://brezent.su/image/cache/catalog/category/1-98x100.jpg.webp" alt="" />
              <p>Тент тарпаулин 180гр/м2</p>
            </Link>
            <Link to="/ppk">
              <img src="https://brezent.su/image/cache/catalog/category/1-98x100.jpg.webp" alt="" />
              <p>Тент тарпаулин 70гр/м2</p>
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default TentTarpaulin;
