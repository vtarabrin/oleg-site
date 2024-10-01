import './tent-oxford-ytep.css';
import React from 'react';
import Asaid from '../../components/Asaid/Asaid';
import { assets } from '../../assets/assets';

function TentOxfordYtep2103x5() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <h3 class="title-example">Тент оксфорд 420PU+</h3>
          <div className="product-cart">
            <div className="product-cart-left">
              <img src={assets.tentOxford210PUYtep} alt="" />
            </div>
            <div className="product-cart-right">
              <h4 className="zhbi-tittle-main">Утепленный тент oxford 210 гр/м2 3 х 5 м с люверсами</h4>
              <p className="zhbi-tittle-main-h3">Характеристики:</p>
              <p className="main-text-p">• Люверсы по периметру — есть</p>
              <p className="main-text-p">• Размер — 3х5</p>
              <p className="main-text-p">• Плотность (гр/м2) — 210</p>
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

export default TentOxfordYtep2103x5;
