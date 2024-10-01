import './polog-bresent-voda.css';
import React from 'react';
import Asaid from '../../components/Asaid/Asaid';
import { assets } from '../../assets/assets';

function PologBresentVoda5x10() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <h3 class="title-example">Полог брезентовый водоупорный</h3>
          <div className="product-cart">
            <div className="product-cart-left">
              <img src={assets.pologBresentVoda} alt="" />
            </div>
            <div className="product-cart-right">
              <h4 className="zhbi-tittle-main">Полог брезентовый ВО 5 х 10 м с люверсами</h4>
              <p className="zhbi-tittle-main-h3">Характеристики:</p>
              <p className="main-text-p">• Люверсы по периметру — есть</p>
              <p className="main-text-p">
                • Свойства и сферы применения — Для строительных лесов, Для бетона, Укрывной
              </p>
              <p className="main-text-p">• Размер — 5х10</p>
              <p className="main-text-p">• Плотность (гр/м2) — 450</p>
              <p className="main-text-p">• Пропитка — водоотталкивающая</p>
              <br />
              <p className="zhbi-tittle-main">Цена: по запросу</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default PologBresentVoda5x10;
