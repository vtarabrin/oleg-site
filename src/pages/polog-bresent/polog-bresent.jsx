import './polog-bresent.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Asaid from '../../components/Asaid/Asaid';
import { assets } from '../../assets/assets';

function PologBresent() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <h3 class="title-example">Полог брезентовый</h3>
          <p className="main-text-p">
            Полог брезентовый - это специальное покрытие, изготовленное из прочной брезентовой
            ткани, которое используется для защиты грузов и материалов от воздействия внешних
            факторов.
          </p>
          <h4 className="zhbi-tittle-main">Преимущества:</h4>
          <h4 className="zhbi-tittle-main-h3">Прочность</h4>
          <p className="main-text-p">
            брезентовая ткань обладает высокой прочностью, что позволяет ей выдерживать различные
            нагрузки и защищать грузы от повреждений.
          </p>
          <h4 className="zhbi-tittle-main-h3">Водонепроницаемость</h4>
          <p className="main-text-p">
            брезентовый полог защищает грузы от дождя, снега и влаги, сохраняя их сухими во время
            транспортировки или хранения.
          </p>
          <h4 className="zhbi-tittle-main-h3"> Устойчивость к ультрафиолету</h4>
          <p className="main-text-p">
            некоторые брезентовые пологи обладают способностью защищать грузы от воздействия
            ультрафиолетовых лучей, что особенно важно при длительном хранении на открытом воздухе.
          </p>
          <h4 className="zhbi-tittle-main-h3"> Легкость</h4>
          <p className="main-text-p">
            брезентовые пологи легко устанавливаются и снимаются, что делает их удобными в
            использовании.
          </p>
          <h4 className="zhbi-tittle-main">Особенности:</h4>
          <h4 className="zhbi-tittle-main-h3">Различные размеры</h4>
          <p className="main-text-p">
            брезентовые пологи доступны в различных размерах, что позволяет выбирать подходящий
            вариант для конкретных грузов или материалов.
          </p>
          <h4 className="zhbi-tittle-main-h3">Крепления</h4>
          <p className="main-text-p">
            они обычно оснащены креплениями или карабинами для удобного крепления к транспортным
            средствам или другим поверхностям.
          </p>
          <h4 className="zhbi-tittle-main">Использование:</h4>
          <h4 className="zhbi-tittle-main-h3">Транспортировка грузов</h4>
          <p className="main-text-p">
            брезентовые пологи широко используются для защиты грузов во время их транспортировки на
            грузовых автомобилях, прицепах и железнодорожных вагонах.
          </p>
          <h4 className="zhbi-tittle-main-h3">Строительство</h4>
          <p className="main-text-p">
            они также могут применяться на строительных площадках для защиты материалов от погодных
            условий.
          </p>
          <h4 className="zhbi-tittle-main-h3"> Хранение</h4>
          <p className="main-text-p">
            брезентовые пологи могут использоваться для временного или длительного хранения грузов
            на открытом воздухе.
          </p>
          <p className="main-text-p">
            В целом, брезентовые пологи представляют собой удобное и эффективное средство для защиты
            грузов и материалов от различных неблагоприятных условий во время их транспортировки,
            хранения или использования.
          </p>
          <div className="card">
            <Link to="/polog-bresent-ogne">
              <img src={assets.pologBresentOgne} alt="" />
              <p>Полог брезентовый огнеупорный</p>
            </Link>
            <Link to="/polog-bresent-voda">
              <img src={assets.pologBresentVoda} alt="" />
              <p>Полог брезентовый водоупорный</p>
            </Link>
            <Link to="/polog-bresent-ytep">
              <img src={assets.pologBresentYtep} alt="" />
              <p>Полог брезентовый утепленный</p>
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default PologBresent;
