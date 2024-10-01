import React from 'react';
import Asaid from '../../components/Asaid/Asaid';
import { assets } from '../../assets/assets';

function TablicaMarkerStolb() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <h3 class="title-example">Указательные таблички</h3>
          <div className="product-cart">
            <div className="product-cart-left">
              <img src={assets.YkazatelTablica} alt="" />
            </div>
            <div className="product-cart-right">
              <h4 className="zhbi-tittle-main">Таблички для маркерного столбика</h4>
              <p className="zhbi-tittle-main-h3">Характеристики:</p>
              <p className="main-text-p">• Ширина 70 мм</p>
              <p className="main-text-p">• Длина 95 мм</p>
              <br />
              <p className="zhbi-tittle-main">Цена: по запросу</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default TablicaMarkerStolb;
