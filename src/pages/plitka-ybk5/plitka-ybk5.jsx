import './plitka-ybk5.css';
import React from 'react';
import Asaid from '../../components/Asaid/Asaid';
import { assets } from '../../assets/assets';

function PlitkaYbk5() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <h3 class="title-example">Плитка бетонная для защиты кабеля</h3>
          <div className="product-cart">
            <div className="product-cart-left">
              <img src={assets.ybk5} alt="" />
            </div>
            <div className="product-cart-right">
              <h4 className="zhbi-tittle-main">Плитка УБК 5</h4>
              <p className="zhbi-tittle-main-h3">Характеристики:</p>
              <p className="main-text-p">• Высота 495</p>
              <p className="main-text-p">• Длина 955 мм</p>
              <p className="main-text-p">• Материал изделия Бетон</p>
              <p className="main-text-p">• Толщина плитки 60 мм</p>
              <br />
              <p className="zhbi-tittle-main">Цена: по запросу</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default PlitkaYbk5;
