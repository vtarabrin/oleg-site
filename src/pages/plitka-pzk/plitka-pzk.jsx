import './plitka-pzk.css';
import React from 'react';
import Asaid from '../../components/Asaid/Asaid';
import { assets } from '../../assets/assets';

function PlitkaPZK() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <h3 class="title-example">Плитка бетонная для защиты кабеля </h3>
          <div className="product-cart">
            <div className="product-cart-left">
              <img src={assets.pzk} alt="" />
            </div>
            <div className="product-cart-right">
              <h4 className="zhbi-tittle-main">Плитка ПЗК</h4>
              <p className="zhbi-tittle-main-h3">Характеристики:</p>
              <p className="main-text-p">• Вес одной упаковки 1.6 кг</p>
              <p className="main-text-p">• Вид элемента Плитка</p>
              <p className="main-text-p">• Длина плитки 240 мм</p>
              <p className="main-text-p">• Толщина плитки 16 мм</p>
              <p className="main-text-p">• Ширина плитки 480 мм</p>
              <p className="main-text-p">• Количество плиток в одной упаковке 640</p>
              <p className="main-text-p">• Материал изделия полимерно песчанная смесь</p>
              <br />
              <p className="zhbi-tittle-main">Цена: по запросу</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default PlitkaPZK;
