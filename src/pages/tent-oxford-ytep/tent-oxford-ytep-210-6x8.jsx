import './tent-oxford-ytep.css';
import React from 'react';
import Asaid from '../../components/Asaid/Asaid';
import { assets } from '../../assets/assets';

function TentOxfordYtep2106x8() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <h3 class="title-example">Тент оксфорд 420PU+</h3>
          <div className="product-cart">
            <div className="product-cart-left">
              <img src={assets.tentOxford420PU} alt="" />
            </div>
            <div className="product-cart-right">
              <h4 className="zhbi-tittle-main">Утепленный тент oxford 210 гр/м2 6 х 8 м с люверсами</h4>
              <p className="zhbi-tittle-main-h3">Характеристики:</p>
              <p className="main-text-p">• Люверсы по периметру — есть</p>
              <p className="main-text-p">
                • Свойства и сферы применения — Зимний, Термомат, Для бетона, Для строительных
                лесов, Полиэтиленовый, С люверсами, Морозостойкий, Теплый, Укрывной
              </p>
              <p className="main-text-p">• Размер — 6х8</p>
              <p className="main-text-p">• Плотность (гр/м2) — 210</p>
              <p className="main-text-p">• Утеплитель — синтепон</p>
              <br />
              <p className="zhbi-tittle-main">Цена: 5000 Рублей</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default TentOxfordYtep2106x8;
