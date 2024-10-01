import './luki.css';
import React from 'react';
import Asaid from '../../components/Asaid/Asaid';
import { assets } from '../../assets/assets';

function LukBeton() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <h3 class="title-example">Люки</h3>
          <div className="product-cart">
            <div className="product-cart-left">
              <img src={assets.LukBeton} alt="" />
            </div>
            <div className="product-cart-right">
              <h4 className="zhbi-tittle-main">Люк бетонный</h4>
              <p className="zhbi-tittle-main-h3">Характеристики:</p>
              <p className="main-text-p">• Масса, кг 100</p>
              <p className="main-text-p">• Материал люка Бетонная смесь</p>
              <p className="main-text-p">• Размеры, см 840*840*70</p>
              <br />
              <p className="zhbi-tittle-main">Цена: по запросу</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default LukBeton;
