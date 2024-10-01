import './tent-oxford-ytep.css';
import React from 'react';
import Asaid from '../../components/Asaid/Asaid';
import { assets } from '../../assets/assets';

function TentOxfordYtep42025x3() {
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
              <h4 className="zhbi-tittle-main">
                Утепленный тент oxford 420 гр/м2 2,5 х 3 м с люверсами
              </h4>
              <p className="zhbi-tittle-main-h3">Характеристики:</p>
              <p className="main-text-p">• Люверсы по периметру — есть</p>
              <p className="main-text-p">
                • Свойства и сферы применения — Полог на ворота, Занавеска
              </p>
              <p className="main-text-p">• Размер — 2.5х3</p>
              <p className="main-text-p">• Плотность (гр/м2) — 420</p>
              <p className="main-text-p">• Утеплитель — синтепон</p>
              <br />
              <p className="zhbi-tittle-main">Цена: по запросу</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default TentOxfordYtep42025x3;
