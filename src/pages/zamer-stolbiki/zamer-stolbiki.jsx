import React from 'react';
import './zamer-stolbiki.css';
import Asaid from '../../components/Asaid/Asaid';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';

function ZamerStolbiki() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <h3 class="title-example">Замерные столбики</h3>
          <p className="main-text-p">
            <b className="title-top">Замерные столбики </b> — это специальные конструкции,
            используемые для проведения измерений и определения точек на местности. Они являются
            важным инструментом для геодезических работ и имеют несколько преимуществ, особенностей
            и областей применения.
          </p>
          <h4 className="zhbi-tittle-main">Преимущества:</h4>
          <p className="main-text-p">
            <b className="title-top">Удобство и точность </b> - замерные столбики предоставляют
            удобный способ определения точек на местности с высокой степенью точности.
          </p>

          <p className="main-text-p">
            <b className="title-top">Долговечность </b> - они обычно изготавливаются из материалов,
            которые устойчивы к воздействию окружающей среды, таких как нержавеющая сталь или бетон.
          </p>
          <p className="main-text-p">
            <b className="title-top">Видимость </b> — они часто окрашивают ярким цветом или имеют
            отражающую полосу для лучшей видимости даже при плохих погодных условиях или ночью.
          </p>
          <p className="main-text-p">
            <b className="title-top">Легкость обнаружения </b> — благодаря своему высокому профилю и
            хорошей видимости, замерные столбики легко обнаружить дистанционными инструментами или
            при проведении аэрофотосъемки.
          </p>
          <h4 className="zhbi-tittle-main">Особенности:</h4>
          <p className="main-text-p">
            <b className="title-top">Маркирации </b> — на поверхности замерного столбика часто
            нанесены различные метки (цифры, линии), которые помогают геодезистам быстрее определить
            нужную точку или выполнить нужное измерение.
          </p>
          <p className="main-text-p">
            <b className="title-top">Размеры</b> — размеры замерных столбиков могут различаться в
            зависимости от требуемой точности работ. Они могут быть как достаточно компактными
            (несколько сантиметров), так и достаточно высокими (несколько метров).
          </p>
          <p className="main-text-p">
            <b className="title-top">Крепление</b> — все замерные столбики должны быть правильно
            закреплены на своих позициях для защиты от перемещений или повреждений.
          </p>
          <h4 className="zhbi-tittle-main">Использование:</h4>

          <p className="main-text-p">
            <b className="title-top">Границы участков</b> — они используются для создания
            физического представления границ участков при выполнении границевых работ.
          </p>
          <p className="main-text-p">
            <b className="title-top">Топография и картография</b> — они служат в качестве опорных
            пунктов при создании топографических карт, карт высотной привязки или других рельефных
            моделей.
          </p>
          <p className="main-text-p">
            <b className="title-top">Инженерное строительство</b> — использование замасированных
            вертикальных заглублённый железобетонный основания поможет получить данные по скорости
            осадок фундмента
          </p>
          <p className="main-text-p">
            Главная задача заключается в том, чтобы помечать ключевые границы объектов на местности
            для последующего анализа данных.
          </p>
          <div className="card">
            <Link to="/jelez-zamer-stolbik">
              <img
                className="photo"
                src={assets.JelezZamerStolbik}
                style={{ height: 150, width: 60 }}
              />
              <p>Железобетонные замерные столбики</p>
            </Link>
            <Link to="/zamer-stolb-24">
              <img className="photo" src={assets.ZamerStolb24} style={{ height: 150, width: 60 }} />
              <p>Замерный указательный столбик 2,4 метра</p>
            </Link>
            <Link to="/zamer-stolbik">
              <img className="photo" src={assets.ZamerStolb24} style={{ height: 150, width: 60 }} />
              <p>Замерный указательный столбик</p>
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default ZamerStolbiki;
