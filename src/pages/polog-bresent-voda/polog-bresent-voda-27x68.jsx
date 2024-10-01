import './polog-bresent-voda.css';
import React from 'react';
import Asaid from '../../components/Asaid/Asaid';
import { assets } from '../../assets/assets';

function PologBresentVoda27x68() {
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
              <h4 className="zhbi-tittle-main">Полог брезентовый ВО 2.7х6.8 м на самосвал КАМАЗ</h4>
              <p className="zhbi-tittle-main-h3">Характеристики:</p>
              <p className="main-text-p">• Люверсы по периметру — есть</p>
              <p className="main-text-p">
                • Свойства и сферы применения — На MAN; Volvo, Для кузова самосвала, На Камаз,
                Укрывной, С люверсами, На контейнер, На Scania, На Шакман, На трехосный полуприцеп,
                На четырехосный полуприцеп
              </p>
              <p className="main-text-p">• Размер — 2.7х6.8</p>
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

export default PologBresentVoda27x68;
