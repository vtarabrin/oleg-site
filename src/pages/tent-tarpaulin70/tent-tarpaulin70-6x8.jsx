import './tent-tarpaulin70.css';
import React from 'react';
import Asaid from '../../components/Asaid/Asaid';
import { assets } from '../../assets/assets';

function TentTarpaulin706x8() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <h3 class="title-example">Тент тарпаулин универсальный 70гр/м2</h3>
          <div className="product-cart">
            <div className="product-cart-left">
              <img src={assets.tentParapulin70} alt="" />
            </div>
            <div className="product-cart-right">
              <h4 className="zhbi-tittle-main">
                6 х 8 м. - Строительный укрывной тент универсальный 70 гр/м2 с люверсами
              </h4>
              <p className="zhbi-tittle-main-h3">Характеристики:</p>
              <p className="main-text-p">• Люверсы по периметру — есть</p>
              <p className="main-text-p">
                • Свойства и сферы применения — С люверсами, Укрывной, Для крыши, От солнца, Для
                бетона, Для строительных лесов, Морозостойкий, Укрытие от осадков, Хозяйственный,
                Полиэтиленовый, Универсальный, Туристический, Защитный, На скутер, На дачу
              </p>
              <p className="main-text-p">• Размер — 6х8</p>
              <p className="main-text-p">• Плотность (гр/м2) — 70</p>
              <br />
              <p className="zhbi-tittle-main">Цена: по запросу</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default TentTarpaulin706x8;
