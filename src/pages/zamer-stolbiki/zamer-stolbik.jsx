import './zamer-stolbiki.css';
import React from 'react';
import Asaid from '../../components/Asaid/Asaid';
import { assets } from '../../assets/assets';

function ZamerStolbik() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <h3 class="title-example">Замерные столбики</h3>
          <div className="product-cart">
            <div className="product-cart-left">
              <img
                className="photo"
                src={assets.ZamerStolb24}
                style={{ height: 250, width: 150 }}
              />
            </div>
            <div className="product-cart-right">
              <h4 className="zhbi-tittle-main">Замерный указательный столбик</h4>
              <p className="zhbi-tittle-main-h3">Характеристики:</p>
              <p className="main-text-p">• Высота, 120 см</p>
              <p className="main-text-p">• Диаметр арматуры, 12 мм</p>
              <p className="main-text-p">• Марка бетона М 400</p>
              <p className="main-text-p">• Ширина, 12 см</p>
              <br />
              <p className="zhbi-tittle-main">Цена: по запросу</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default ZamerStolbik;