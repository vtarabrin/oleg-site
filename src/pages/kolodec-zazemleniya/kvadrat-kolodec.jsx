import './kolodec-zazemleniya.css';
import React from 'react';
import Asaid from '../../components/Asaid/Asaid';
import { assets } from '../../assets/assets';

function KvadratKolodec() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <h3 class="title-example">Колодцы заземления</h3>
          <div className="product-cart">
            <div className="product-cart-left">
              <img src={assets.KvadratKolodec} alt="" />
            </div>
            <div className="product-cart-right">
              <h4 className="zhbi-tittle-main">Квадратный колодец (армированный d 10мм)</h4>
              <p className="zhbi-tittle-main-h3">Характеристики:</p>
              <p className="main-text-p">• Размеры, 225*225*200*200*120 см</p>
              <p className="main-text-p">• Масса, 3500 кг</p>
              <p className="main-text-p">• Объем, 4800 л</p>
              <p className="main-text-p">• Вид железобетонного изделия, колодец</p>
              <br />
              <p className="zhbi-tittle-main">Цена: по запросу</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default KvadratKolodec;
