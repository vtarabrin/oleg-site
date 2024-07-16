import './tent-tarpaulin180.css';
import React from 'react';
import Asaid from '../../components/Asaid/Asaid';
import { assets } from '../../assets/assets';

function TentTarpaulin1803x6() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <h3 class="title-example">Тент тарпаулин 180 гр/м2</h3>
          <div className="product-cart">
            <div className="product-cart-left">
              <img src={assets.tentOxford420PU} alt="" />
            </div>
            <div className="product-cart-right">
              <h4 className="zhbi-tittle-main">3 х 6 м. - Тент тарпаулин 180 гр/м2</h4>
              <p className="zhbi-tittle-main-h3">Характеристики:</p>
              <p className="main-text-p">• Люверсы по периметру — есть</p>
              <p className="main-text-p">
                • Свойства и сферы применения — С люверсами, Укрывной, Для крыши, От солнца, Для
                бетона, Для строительных лесов, Морозостойкий, Укрытие от осадков, Хозяйственный,
                Полиэтиленовый, Универсальный, Туристический, Защитный, Усиленный, На скутер, На
                дачу
              </p>
              <p className="main-text-p">• Размер — 3х6</p>
              <p className="main-text-p">• Плотность (гр/м2) — 180</p>
              <br />
              <p className="zhbi-tittle-main">Цена: 5000 Рублей</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default TentTarpaulin1803x6;
