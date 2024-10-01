import './tent-oxford-420pu.css';
import React from 'react';
import Asaid from '../../components/Asaid/Asaid';
import { assets } from '../../assets/assets';

function TentOxford420PU27x68() {
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
              <h4 className="zhbi-tittle-main">Полог oxford 420 гр/м2 2.7 х 6.8 м с люверсами</h4>
              <p className="zhbi-tittle-main-h3">Характеристики:</p>
              <p className="main-text-p">• Люверсы по периметру — есть</p>
              <p className="main-text-p">
                • Свойства и сферы применения — Усиленный, С люверсами, Полог на Камаз, Для кузова
                Iveco; MAN; Volvo; Scania, Для кузова самосвала, Укрывной
              </p>
              <p className="main-text-p">• Размер — 2.7x6.8</p>
              <p className="main-text-p">• Плотность (гр/м2) — 375</p>
              <br />
              <p className="zhbi-tittle-main">Цена: по запросу</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default TentOxford420PU27x68;
