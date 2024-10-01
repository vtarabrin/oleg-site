import './pdk.css';
import React from 'react';
import Asaid from '../../components/Asaid/Asaid';
import { assets } from '../../assets/assets';

function Ppk102() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <h3 class="title-example">Плита перекрытия колодца</h3>
          <div className="product-cart">
            <div className="product-cart-left">
              <img src={assets.pp102} alt="" />
            </div>
            <div className="product-cart-right">
              <h4 className="zhbi-tittle-main">Плита перекрытия колодца ПП 10-2 ГОСТ 8020-2016</h4>
              <p className="zhbi-tittle-main-h3">Характеристики:</p>
              <p className="main-text-p">• Вид железобетонного изделия - крышка</p>
              <p className="main-text-p">• Диаметр 100 см</p>
              <p className="main-text-p">• Марка изделий ПП 10-2</p>
              <br />
              <p className="zhbi-tittle-main">Цена: по запросу</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Ppk102;
