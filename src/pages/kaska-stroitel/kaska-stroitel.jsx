import React from 'react';
import './kaska-stroitel.css';
import Asaid from '../../components/Asaid/Asaid';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';

function KaskaStroitel() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <h3 class="title-example">Каски строительные</h3>
          <h4 className="zhbi-tittle-main">Преимущества:</h4>

          <p className="main-text-p">
            <b className="title-top"> Защита головы </b> - каски строительные предназначены для
            защиты головы от ударов и других механических воздействий, которые могут возникнуть на
            стройплощадке.
          </p>
          <p className="main-text-p">
            <b className="title-top"> Удобство </b> - каски строительные легкие и удобные в
            использовании, что позволяет рабочим комфортно работать в течение длительного времени.
          </p>
          <p className="main-text-p">
            <b className="title-top"> Регулируемость </b> - каски строительные обычно имеют
            регулируемые ремни, которые позволяют настроить каску на нужный размер и обеспечить
            максимальную защиту головы.
          </p>
          <p className="main-text-p">
            <b className="title-top"> Вентиляция </b> - некоторые каски строительные имеют
            встроенную вентиляцию, которая обеспечивает комфортную температуру и воздухообмен внутри
            каски.
          </p>
          <h4 className="zhbi-tittle-main">Особенности:</h4>
          <p className="main-text-p">
            <b className="title-top"> Материал </b> - каски строительные обычно изготавливаются из
            прочных материалов, таких как пластик, стекловолокно или металл, чтобы обеспечить
            максимальную защиту головы.
          </p>
          <p className="main-text-p">
            <b className="title-top"> Дизайн </b> - каски строительные имеют специальный дизайн,
            который обеспечивает максимальную защиту головы и лица, а также позволяет рабочим
            свободно двигаться и работать.
          </p>
          <p className="main-text-p">
            <b className="title-top"> Цвет </b> - каски строительные часто имеют яркий цвет, чтобы
            обеспечить видимость рабочего на стройплощадке и предотвратить несчастные случаи.
          </p>
          <h4 className="zhbi-tittle-main">Использование:</h4>
          <p className="main-text-p">
            <b className="title-top"> Строительство </b> - каски строительные широко используются на
            стройплощадках для защиты головы рабочих от ударов и других механических воздействий.
          </p>
          <p className="main-text-p">
            <b className="title-top"> Ремонтные работы </b> - каски строительные также используются
            при проведении ремонтных работ, чтобы обеспечить безопасность рабочих.
          </p>
          <p className="main-text-p">
            <b className="title-top"> Промышленность </b> - каски строительные могут использоваться
            в различных отраслях промышленности, где требуется защита головы от механических
            воздействий.
          </p>
          <p className="main-text-p">
            <b className="title-top"> Каски строительные </b> являются важным элементом защиты для
            рабочих на стройплощадке и широко используются в различных отраслях промышленности.
          </p>
          <div className="card">
            <Link to="/kaska1">
              <img src={assets.Kaska1} alt="" />
              <p>Защитная каска РОСОМЗ СОМЗ-55 FavoriT Trek RAPID, белая 75617</p>
            </Link>
            <Link to="/kaska2">
              <img src={assets.Kaska2} alt="" />
              <p>Защитная каска РОСОМЗ СОМЗ-55 FavoriT Trek, красная 75116</p>
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default KaskaStroitel;
