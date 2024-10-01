import './tent-oxford-210pu.css';
import React from 'react';
import Asaid from '../../components/Asaid/Asaid';
import { assets } from '../../assets/assets';

function TentOxford210PU4x6() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <h3 class="title-example">Тент оксфорд 210PU</h3>
          <div className="product-cart">
            <div className="product-cart-left">
              <img src={assets.tentOxford210PU} alt="" />
            </div>
            <div className="product-cart-right">
              <h4 className="zhbi-tittle-main">Тент oxford 210 гр/м2 4 х 6 м с люверсами</h4>
              <p className="zhbi-tittle-main-h3">Характеристики:</p>
              <p className="main-text-p">• Люверсы по периметру — есть</p>
              <p className="main-text-p">• Свойства и сферы применения — С люверсами, Укрывной</p>
              <p className="main-text-p">• Размер — 4х6</p>
              <p className="main-text-p">• Плотность (гр/м2) — 110</p>
              <br />
              <p className="zhbi-tittle-main">Цена: по запросу</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default TentOxford210PU4x6;
