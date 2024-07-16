import './kolca.css';
import React from 'react';
import Asaid from '../../components/Asaid/Asaid';
import { assets } from '../../assets/assets';

function KolcaStenovie206() {
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
              <h4 className="zhbi-tittle-main">Кольца ЖБИ стеновые КС 20-6</h4>
              <p className="zhbi-tittle-main-h3">Характеристики:</p>
              <p className="main-text-p">• Масса 1000 кг</p>
              <p className="main-text-p">• Объем 1900 л</p>
              <p className="main-text-p">• Размеры 220*200*60*10 см</p>
              <br />
              <p className="zhbi-tittle-main">Цена: 5000 Рублей</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default KolcaStenovie206;