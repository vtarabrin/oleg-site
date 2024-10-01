import './kolodec-zazemleniya.css';
import React from 'react';
import Asaid from '../../components/Asaid/Asaid';
import { assets } from '../../assets/assets';

function InspectKolodecZazem() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <h3 class="title-example">Колодцы заземления</h3>
          <div className="product-cart">
            <div className="product-cart-left">
              <img src={assets.InspectKolodecZazem} alt="" />
            </div>
            <div className="product-cart-right">
              <h4 className="zhbi-tittle-main">Инспекционный колодец заземления</h4>
              <p className="zhbi-tittle-main-h3">Характеристики:</p>
              <p className="main-text-p">• Размер 320х192х146 мм</p>
              <p className="main-text-p">• Вес: 30 кг</p>
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

export default InspectKolodecZazem;
