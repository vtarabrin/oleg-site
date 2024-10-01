import './polog-bresent-voda.css';
import React from 'react';
import Asaid from '../../components/Asaid/Asaid';
import { assets } from '../../assets/assets';

function PologBresentVoda3x5() {
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
              <h4 className="zhbi-tittle-main">Тент полог брезентовый ВО 3 х 5 м с люверсами</h4>
              <p className="zhbi-tittle-main-h3">Характеристики:</p>
              <p className="main-text-p">• Люверсы по периметру — есть</p>
              <p className="main-text-p">
                • Свойства и сферы применения — Полог на Камаз, Для кузова Iveco; MAN; Volvo;
                Scania, Для кузова самосвала, Укрывной, С люверсами, На контейнер
              </p>
              <p className="main-text-p">• Размер — 3х5</p>
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

export default PologBresentVoda3x5;
