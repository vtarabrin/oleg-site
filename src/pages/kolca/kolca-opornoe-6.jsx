import './kolca.css';
import React from 'react';
import Asaid from '../../components/Asaid/Asaid';
import { assets } from '../../assets/assets';

function KolcaOpornoe6() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <h3 class="title-example">Кольцо опорное</h3>
          <div className="product-cart">
            <div className="product-cart-left">
              <img src={assets.kolcaOpornoe} alt="" />
            </div>
            <div className="product-cart-right">
              <h4 className="zhbi-tittle-main">Кольцо опорное КО-6</h4>
              <p className="zhbi-tittle-main-h3">Характеристики:</p>
              <p className="main-text-p">• Диаметр отверстия 58 см</p>
              <p className="main-text-p">• Диаметр 84 см</p>
              <p className="main-text-p">• Марка изделий КО 6</p>
              <p className="main-text-p">• Масса 50 кг </p>
              <p className="main-text-p">• Размеры 580*840*70 см</p>
              <br />
              <p className="zhbi-tittle-main">Цена: по запросу</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default KolcaOpornoe6;
