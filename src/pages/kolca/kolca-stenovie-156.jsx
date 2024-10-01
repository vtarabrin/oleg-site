import './kolca.css';
import React from 'react';
import Asaid from '../../components/Asaid/Asaid';
import { assets } from '../../assets/assets';

function KolcaStenovie156() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <h3 class="title-example">Кольцо стеновые</h3>
          <div className="product-cart">
            <div className="product-cart-left">
              <img src={assets.kolcaOpornoe} alt="" />
            </div>
            <div className="product-cart-right">
              <h4 className="zhbi-tittle-main">Кольца ЖБИ стеновые КС 15-6</h4>
              <p className="zhbi-tittle-main-h3">Характеристики:</p>
              <p className="main-text-p">• Масса 700 кг</p>
              <p className="main-text-p">• Объем 1000 л</p>
              <p className="main-text-p">• Размеры 170*150*60*90 см</p>
              <br />
              <p className="zhbi-tittle-main">Цена: по запросу</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default KolcaStenovie156;
