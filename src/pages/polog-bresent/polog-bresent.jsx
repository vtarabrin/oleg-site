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
            <b className="title-top">Полог брезентовый </b> - это специальное покрытие,
            изготовленное из прочной брезентовой ткани, которое используется для защиты грузов и
            материалов от воздействия внешних факторов.
          </p>
          <h4 className="zhbi-tittle-main">Преимущества:</h4>
          <p className="main-text-p">
            <b className="title-top">Прочность </b> - брезентовая ткань обладает высокой прочностью,
            что позволяет ей выдерживать различные нагрузки и защищать грузы от повреждений.
          </p>

          <p className="main-text-p">
            <b className="title-top">Водонепроницаемость </b> - брезентовый полог защищает грузы от
            дождя, снега и влаги, сохраняя их сухими во время транспортировки или хранения.
          </p>
          <p className="main-text-p">
            <b className="title-top">Устойчивость к ультрафиолету </b> - некоторые брезентовые
            пологи обладают способностью защищать грузы от воздействия ультрафиолетовых лучей, что
            особенно важно при длительном хранении на открытом воздухе.
          </p>
          <p className="main-text-p">
            <b className="title-top">Легкость </b> - брезентовые пологи легко устанавливаются и
            снимаются, что делает их удобными в использовании.
          </p>
          <h4 className="zhbi-tittle-main">Особенности:</h4>

          <p className="main-text-p">
            <b className="title-top">Различные размеры </b> - брезентовые пологи доступны в
            различных размерах, что позволяет выбирать подходящий вариант для конкретных грузов или
            материалов.
          </p>

          <p className="main-text-p">
            <b className="title-top">Крепления </b> - они обычно оснащены креплениями или карабинами
            для удобного крепления к транспортным средствам или другим поверхностям.
          </p>
          <h4 className="zhbi-tittle-main">Использование:</h4>

          <p className="main-text-p">
            <b className="title-top">Транспортировка грузов </b> - брезентовые пологи широко
            используются для защиты грузов во время их транспортировки на грузовых автомобилях,
            прицепах и железнодорожных вагонах.
          </p>

          <p className="main-text-p">
            <b className="title-top">Строительство </b> - они также могут применяться на
            строительных площадках для защиты материалов от погодных условий.
          </p>

          <p className="main-text-p">
            <b className="title-top">Хранения </b> - брезентовые пологи могут использоваться для
            временного или длительного хранения грузов на открытом воздухе.
          </p>
          <p className="main-text-p">
            В целом, <b className="title-top">брезентовые пологи </b> представляют собой удобное и
            эффективное средство для защиты грузов и материалов от различных неблагоприятных условий
            во время их транспортировки, хранения или использования.
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
      j
    </div>
  );
}

export default PologBresent;
