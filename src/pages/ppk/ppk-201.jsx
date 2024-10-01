import './pdk.css';
import React from 'react';
import Asaid from '../../components/Asaid/Asaid';
import { assets } from '../../assets/assets';

function Ppk201() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <h3 class="title-example">Плита перекрытия колодца</h3>
          <div className="product-cart">
            <div className="product-cart-left">
              <img src={assets.pp20} alt="" />
            </div>
            <div className="product-cart-right">
              <h4 className="zhbi-tittle-main">Плита перекрытия колодца 1ПП 20-1 ГОСТ 8020-2016</h4>
              <p className="zhbi-tittle-main-h3">Характеристики:</p>
              <p className="main-text-p">• Вид железобетонного изделия - крышка</p>
              <p className="main-text-p">• Марка бетона - М300</p>
              <p className="main-text-p">• Высота 16 см</p>
              <p className="main-text-p">• Диаметр отверстия 70 см</p>
              <p className="main-text-p">• Диаметр 220 см</p>
              <p className="main-text-p">• Марка изделий ПП 20-1</p>
              <p className="main-text-p">• Масса 1300 кг</p>
              <br />
              <p className="zhbi-tittle-main">Цена: по запросу</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Ppk201;
