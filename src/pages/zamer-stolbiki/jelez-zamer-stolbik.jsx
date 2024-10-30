import './zamer-stolbiki.css';
import React from 'react';
import Asaid from '../../components/Asaid/Asaid';
import { assets } from '../../assets/assets';

function JelezZamerStolbik() {
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
                src={assets.JelezZamerStolbik}
                style={{ height: 250, width: 150 }}
              />
            </div>
            <div className="product-cart-right">
              <h4 className="zhbi-tittle-main">Железобетонные замерные столбики</h4>
              <p className="zhbi-tittle-main-h3">Характеристики:</p>
              <p className="main-text-p">• Бетон армированный</p>
              <p className="main-text-p">• Высота, 75 см</p>
              <p className="main-text-p">• Марка бетона B20</p>
              <p className="main-text-p">• Масса, 32.5 кг</p>
              <br />
              <p className="zhbi-tittle-main">Цена: по запросу</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default JelezZamerStolbik;
