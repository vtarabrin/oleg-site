import './kolodec-zazemleniya.css';
import React from 'react';
import Asaid from '../../components/Asaid/Asaid';
import { assets } from '../../assets/assets';

function KolodecZazem() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <h3 class="title-example">Колодцы заземления</h3>
          <div className="product-cart">
            <div className="product-cart-left">
              <img src={assets.KolodecZazem} alt="" />
            </div>
            <div className="product-cart-right">
              <h4 className="zhbi-tittle-main">Колодец заземления</h4>
              <p className="zhbi-tittle-main-h3">Характеристики:</p>
              <p className="main-text-p">• Бетонный колодец предназначен для установки над вертикальной частью электрода (глубина погружения не более 50 см). Облегчает обслуживание электрода, проведение замеров его параметров.</p>
              <p className="main-text-p">• Размер наружный : 390х390х260 мм</p>
              <p className="main-text-p">• Размер внутренний: 320х320х200 мм</p>
              <p className="main-text-p">• Марка бетона: М 200</p>
              <p className="main-text-p">• Цвет : серый</p>
              <p className="main-text-p">• Вес: 46 кг</p>
              <p className="main-text-p">• Инспекционный бетонный колодец  подходит для многих видов заземления и молниезащитных установок.</p>
              <br />
              <p className="zhbi-tittle-main">Цена: по запросу</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default KolodecZazem;
