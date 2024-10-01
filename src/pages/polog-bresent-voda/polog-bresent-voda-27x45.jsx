import './polog-bresent-voda.css';
import React from 'react';
import Asaid from '../../components/Asaid/Asaid';
import { assets } from '../../assets/assets';

function PologBresentVoda27x45() {
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
              <h4 className="zhbi-tittle-main">
                Полог брезентовый водоупорный ВО 2.7 х 4.5 м на 8-кубовый бункер
              </h4>
              <p className="zhbi-tittle-main-h3">Характеристики:</p>
              <p className="main-text-p">
                • Свойства и сферы применения — На Камаз, На MAN; Volvo, Для кузова самосвала,
                Укрывной, С люверсами, На контейнер
              </p>
              <p className="main-text-p">• Размер — 2.7х4.5</p>
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

export default PologBresentVoda27x45;
