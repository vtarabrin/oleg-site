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
            Замерные столбики — это специальные конструкции, используемые для проведения измерений и
            определения точек на местности. Они являются важным инструментом для геодезических работ
            и имеют несколько преимуществ, особенностей и областей применения.
          </p>
          <h4 className="zhbi-tittle-main">Преимущества:</h4>
          <h4 className="zhbi-tittle-main-h3"> Удобство и точность</h4>
          <p className="main-text-p">
            замерные столбики предоставляют удобный способ определения точек на местности с высокой
            степенью точности.
          </p>
          <h4 className="zhbi-tittle-main-h3">Долговечность</h4>
          <p className="main-text-p">
            они обычно изготавливаются из материалов, которые устойчивы к воздействию окружающей
            среды, таких как нержавеющая сталь или бетон.
          </p>
          <h4 className="zhbi-tittle-main-h3"> Видимость</h4>
          <p className="main-text-p">
            они часто окрашивают ярким цветом или имеют отражающую полосу для лучшей видимости даже
            при плохих погодных условиях или ночью.
          </p>
          <h4 className="zhbi-tittle-main-h3"> Легкость обнаружения</h4>
          <p className="main-text-p">
            благодаря своему высокому профилю и хорошей видимости, замерные столбики легко
            обнаружить дистанционными инструментами или при проведении аэрофотосъемки.
          </p>
          <h4 className="zhbi-tittle-main">Особенности:</h4>
          <h4 className="zhbi-tittle-main-h3">Маркации</h4>
          <p className="main-text-p">
            на поверхности замерного столбика часто нанесены различные метки (цифры, линии), которые
            помогают геодезистам быстрее определить нужную точку или выполнить нужное измерение.
          </p>
          <h4 className="zhbi-tittle-main-h3">Размеры</h4>
          <p className="main-text-p">
            размеры замерных столбиков могут различаться в зависимости от требуемой точности работ.
            Они могут быть как достаточно компактными (несколько сантиметров), так и достаточно
            высокими (несколько метров).
          </p>
          <h4 className="zhbi-tittle-main-h3">Крепление</h4>
          <p className="main-text-p">
            все замерные столбики должны быть правильно закреплены на своих позициях для защиты от
            перемещений или повреждений.
          </p>
          <h4 className="zhbi-tittle-main">Использование:</h4>
          <h4 className="zhbi-tittle-main-h3">Границы участков</h4>
          <p className="main-text-p">
            они используются для создания физического представления границ участков при выполнении
            границевых работ.
          </p>
          <h4 className="zhbi-tittle-main-h3">Топография и картография</h4>
          <p className="main-text-p">
            они служат в качестве опорных пунктов при создании топографических карт, карт высотной
            привязки или других рельефных моделей.
          </p>
          <h4 className="zhbi-tittle-main-h3">Инженерное строительство</h4>
          <p className="main-text-p">
            использование замасированных вертикальных заглублённый железобетонный основания поможет
            получить данные по скорости осадок фундмента
          </p>
          <p className="main-text-p">
            Главная задача заключается в том, чтобы помечать ключевые границы объектов на местности
            для последующего анализа данных.
          </p>
          <div className="card">
            <Link to="/jelez-zamer-stolbik">
              <img src={assets.JelezZamerStolbik} alt="" />
              <p>Железобетонные замерные столбики</p>
            </Link>
            <Link to="/zamer-stolb-24">
              <img src={assets.ZamerStolb24} alt="" />
              <p>Замерный указательный столбик 2,4 метра</p>
            </Link>
            <Link to="/zamer-stolbik">
              <img src={assets.ZamerStolb24} alt="" />
              <p>Замерный указательный столбик</p>
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default ZamerStolbiki;
