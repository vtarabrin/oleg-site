import React from 'react';
import Asaid from '../../components/Asaid/Asaid';
import { assets } from '../../assets/assets';

function Kaska2() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <h3 class="title-example">Каски строительные</h3>
          <div className="product-cart">
            <div className="product-cart-left">
              <img src={assets.Kaska2} alt="" />
            </div>
            <div className="product-cart-right">
              <h4 className="zhbi-tittle-main">
                Защитная каска РОСОМЗ СОМЗ-55 FavoriT Trek, красная 75116
              </h4>
              <p className="zhbi-tittle-main-h3">Технические характеристики защитной каски </p>
              <p className="main-text-p">
                • Регулировка оголовья, <b>храповый механизм</b>
              </p>
              <p className="main-text-p">
                • Тип, <b>каска</b>
              </p>
              <p className="main-text-p">
                • Цвет <b>Белый</b>
              </p>
              <p className="main-text-p">
                • Материал, <b>Termotrek</b>
              </p>
              <p className="main-text-p">
                • Размер оголовья, <b>51-65 см</b>
              </p>
              <p className="main-text-p">
                • Люминисцентные свойства, <b>нет</b>
              </p>
              <p className="main-text-p">
                • Крючки для крепления пелерины, <b>да</b>
              </p>
              <p className="main-text-p">
                • Защита от поражения электрическим током, <b>нет</b>
              </p>
              <p className="main-text-p">
                • Вентиляция, <b>есть</b>
              </p>
              <p className="main-text-p">
                • Наличие амортизации, <b>есть</b>
              </p>
              <p className="main-text-p">
                • С щитком, <b>нет</b>
              </p>
              <p className="main-text-p">
                • С козырьком, <b>есть</b>
              </p>
              <p className="main-text-p">
                • С полями, <b>нет</b>
              </p>
              <p className="main-text-p">
                • Количество точек крепления лент оголовья, <b>6</b>
              </p>
              <p className="main-text-p">
                • Диапазон рабочих температур, <b>от -30 до +50 °С</b>
              </p>
              <p className="main-text-p">
                • Вес нетто, <b>0.223 кг</b>
              </p>
              <br />
              <p className="zhbi-tittle-main">Цена: по запросу</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Kaska2;
