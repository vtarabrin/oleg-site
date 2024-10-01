import './pdk.css';
import React from 'react';
import Asaid from '../../components/Asaid/Asaid';
import { assets } from '../../assets/assets';

function Pdk15() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <h3 class="title-example">Плита днища колодца</h3>
          <div className="product-cart">
            <div className="product-cart-left">
              <img src={assets.pdk15} alt="" />
            </div>
            <div className="product-cart-right">
              <h4 className="zhbi-tittle-main">Плита днища колодца ПН 15 ГОСТ 8020-2016</h4>
              <p className="zhbi-tittle-main-h3">Характеристики:</p>
              <p className="main-text-p">• Вид железобетонного изделия - днище</p>
              <p className="main-text-p">• Масса - 680 кг</p>
              <p className="main-text-p">• Размеры 17012 см</p>
              <br />
              <p className="zhbi-tittle-main">Цена: по запросу</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Pdk15;
