import './pdk.css';
import React from 'react';
import Asaid from '../../components/Asaid/Asaid';
import { assets } from '../../assets/assets';

function Ppk152() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <h3 class="title-example">Плита перекрытия колодца</h3>
          <div className="product-cart">
            <div className="product-cart-left">
              <img src={assets.pp152} alt="" />
            </div>
            <div className="product-cart-right">
              <h4 className="zhbi-tittle-main">Плита перекрытия колодца 1ПП 15-2 ГОСТ 8020-2016</h4>
              <p className="zhbi-tittle-main-h3">Характеристики:</p>
              <p className="main-text-p">• Вид железобетонного изделия - крышка</p>
              <p className="main-text-p">• Высота 15 см</p>
              <p className="main-text-p">• Диаметр отверстия 70 см</p>
              <p className="main-text-p">• Диаметр 168 см</p>
              <p className="main-text-p">• Марка изделий ПП 15-2</p>
              <p className="main-text-p">• Масса 650 кг</p>
              <p className="main-text-p">• Объём 0.27 м3</p>
              <br />
              <p className="zhbi-tittle-main">Цена: по запросу</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Ppk152;
