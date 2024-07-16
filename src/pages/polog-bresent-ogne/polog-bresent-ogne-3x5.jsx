import './polog-bresent-ogne.css';
import React from 'react';
import Asaid from '../../components/Asaid/Asaid';
import { assets } from '../../assets/assets';

function PologBresentOgne3x5() {
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
              <h4 className="zhbi-tittle-main">Полог брезентовый ОП 3 х 5 м с люверсами</h4>
              <p className="zhbi-tittle-main-h3">Характеристики:</p>
              <p className="main-text-p">• Люверсы по периметру — есть</p>
              <p className="main-text-p">
                • Свойства и сферы применения — Полог на Камаз, Для кузова Iveco; MAN; Volvo; Scania, Для кузова самосвала, Укрывной, Негорючий, С люверсами, Для асфальта
              </p>
              <p className="main-text-p">• Размер — 3х5</p>
              <p className="main-text-p">• Плотность (гр/м2) — 450</p>
              <p className="main-text-p">• Пропитка — огнеупорная</p>
              <br />
              <p className="zhbi-tittle-main">Цена: 5000 Рублей</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default PologBresentOgne3x5;
