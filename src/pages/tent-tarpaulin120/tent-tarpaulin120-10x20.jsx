import './tent-tarpaulin120.css';
import React from 'react';
import Asaid from '../../components/Asaid/Asaid';
import { assets } from '../../assets/assets';

function TentTarpaulin12010x20() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <h3 class="title-example">Тент тарпаулин универсальный 120гр/м2</h3>
          <div className="product-cart">
            <div className="product-cart-left">
              <img src={assets.tentParapulin70} alt="" />
            </div>
            <div className="product-cart-right">
              <h4 className="zhbi-tittle-main">
                10 х 20 м. - Тент тарпаулин 120 гр/м2 с люверсами
              </h4>
              <p className="zhbi-tittle-main-h3">Характеристики:</p>
              <p className="main-text-p">• Люверсы по периметру — есть</p>
              <p className="main-text-p">
                • Свойства и сферы применения — С люверсами, Укрывной, Для крыши, От солнца, Для
                бетона, Для строительных лесов, Морозостойкий, Укрытие от осадков, Хозяйственный,
                Полиэтиленовый, Универсальный, Защитный
              </p>
              <p className="main-text-p">• Размер — 10х20</p>
              <p className="main-text-p">• Плотность (гр/м2) — 120</p>
              <br />
              <p className="zhbi-tittle-main">Цена: 5000 Рублей</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default TentTarpaulin12010x20;