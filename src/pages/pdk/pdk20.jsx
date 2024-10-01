import './pdk.css';
import React from 'react';
import Asaid from '../../components/Asaid/Asaid';
import { assets } from '../../assets/assets';

function Pdk20() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <h3 class="title-example">Плита днища колодца</h3>
          <div className="product-cart">
            <div className="product-cart-left">
              <img src={assets.pdk20} alt="" />
            </div>
            <div className="product-cart-right">
              <h4 className="zhbi-tittle-main">Плита днища колодца ПН 20 ГОСТ 8020-2016</h4>
              <p className="zhbi-tittle-main-h3">Характеристики:</p>
              <p className="main-text-p">• Вид железобетонного изделия - днище</p>
              <p className="main-text-p">• Масса - 1200 кг</p>
              <p className="main-text-p">• Внешний диаметр 2200 мм</p>
              <p className="main-text-p">• Водонепроницаемость бетона W4</p>
              <p className="main-text-p">• Высота 120 мм</p>
              <p className="main-text-p">• Марка бетона М200</p>
              <p className="main-text-p">• Морозоустойчивость F100</p>
              <br />
              <p className="zhbi-tittle-main">Цена: по запросу</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Pdk20;
