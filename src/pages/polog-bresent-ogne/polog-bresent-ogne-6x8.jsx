import './polog-bresent-ogne.css';
import React from 'react';
import Asaid from '../../components/Asaid/Asaid';
import { assets } from '../../assets/assets';

function PologBresentOgne6x8() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <h3 class="title-example">Полог брезентовый огнеупорный</h3>
          <div className="product-cart">
            <div className="product-cart-left">
              <img src={assets.pologBresentOgne} alt="" />
            </div>
            <div className="product-cart-right">
              <h4 className="zhbi-tittle-main">Полог брезентовый ОП 6 х 8 м с люверсами</h4>
              <p className="zhbi-tittle-main-h3">Характеристики:</p>
              <p className="main-text-p">• Люверсы по периметру — есть</p>
              <p className="main-text-p">
                • Свойства и сферы применения — Для строительных лесов, Для бетона, Укрывной,
                Негорючий, С люверсами
              </p>
              <p className="main-text-p">• Размер — 6х8</p>
              <p className="main-text-p">• Плотность (гр/м2) — 450</p>
              <p className="main-text-p">• Пропитка — огнеупорная</p>
              <br />
              <p className="zhbi-tittle-main">Цена: по запросу</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default PologBresentOgne6x8;
