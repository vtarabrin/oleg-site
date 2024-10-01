import './kolodec-zazemleniya.css';
import React from 'react';
import Asaid from '../../components/Asaid/Asaid';
import { assets } from '../../assets/assets';

function KriwkaKvadratKolodec() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <h3 class="title-example">Колодцы заземления</h3>
          <div className="product-cart">
            <div className="product-cart-left">
              <img src={assets.KriwkaKvadratKolodec} alt="" />
            </div>
            <div className="product-cart-right">
              <h4 className="zhbi-tittle-main">Крышка к квадратному колодцу</h4>
              <p className="zhbi-tittle-main-h3">Характеристики:</p>
              <p className="main-text-p">• Размеры, 225*225*160 см</p>
              <p className="main-text-p">• Масса, 2000 кг</p>
              <p className="main-text-p">• Вид железобетонного изделия, крышка</p>
              <br />
              <p className="zhbi-tittle-main">Цена: по запросу</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default KriwkaKvadratKolodec;
