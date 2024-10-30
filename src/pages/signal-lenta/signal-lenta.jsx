import React from 'react';
import './signal-lenta.css';
import Asaid from '../../components/Asaid/Asaid';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';

function SignalLenta() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <h3 class="title-example">Сигнальные ленты</h3>
          <h4 className="zhbi-tittle-main">Преимущества:</h4>
          <p className="main-text-p">
            <b className="title-top">Видимость </b> - сигнальные ленты обеспечивают высокую
            видимость благодаря ярким цветам, что делает их эффективным средством для обозначения
            опасных зон, рабочих мест или ограниченных зон.
          </p>
          <p className="main-text-p">
            <b className="title-top"> Видимость </b> - использование ярких сигнальных лент помогает
            предотвратить несчастные случаи, обозначая опасные участки или предупреждая о наличии
            опасности.
          </p>
          <p className="main-text-p">
            <b className="title-top"> Универсальность </b> - сигнальные ленты могут быть
            использованы в различных отраслях, таких как производство, строительство, автомобильная
            промышленность, а также для организации безопасности на дорогах и в общественных местах.
          </p>
          <h4 className="zhbi-tittle-main">Особенности:</h4>
          <p className="main-text-p">
            <b className="title-top"> Яркие цвета </b> - сигнальные ленты обычно изготовлены из
            материалов ярких цветов, таких как красный, оранжевый, желтый или зеленый, чтобы
            обеспечить хорошую видимость.
          </p>
          <p className="main-text-p">
            <b className="title-top"> Гибкость </b> - некоторые сигнальные ленты могут быть гибкими
            и удобными в использовании, что позволяет легко размещать их в нужных местах.
          </p>
          <p className="main-text-p">
            <b className="title-top"> Долговечность </b> - качественные сигнальные ленты обладают
            свойствами устойчивости к воздействию внешних факторов, таких как погода или
            ультрафиолетовые лучи.
          </p>
          <h4 className="zhbi-tittle-main">Использование:</h4>
          <p className="main-text-p">
            <b className="title-top"> Промышленная безопасность </b> - сигнальные ленты используются
            для обозначения опасных зон, предупреждения о рисках и ограничения доступа к
            определенным участкам на производственных объектах.
          </p>
          <p className="main-text-p">
            <b className="title-top"> Дорожная безопасность </b> - на дорогах сигнальные ленты
            применяются для обозначения рабочих зон, ограничения скорости или предупреждения об
            опасности.
          </p>
          <p className="main-text-p">
            <b className="title-top"> Аварийная ситуация </b> - сигнальные ленты используются для
            обозначения места аварии или других чрезвычайных ситуаций.
          </p>
          <p className="main-text-p">
            <b className="title-top"> Сигнальные ленты </b> играют важную роль в обеспечении
            безопасности и предупреждении о возможных опасностях в различных областях
            промышленности, дорожного движения и общественной безопасности.
          </p>
          <div className="card">
            <Link to="/lenta-signal">
              <img src={assets.LentaSignal} alt="" />
              <p>Сигнальная лента</p>
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default SignalLenta;
