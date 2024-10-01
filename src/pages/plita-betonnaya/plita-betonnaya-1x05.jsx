import './plita-betonnaya.css';
import React from 'react';
import Asaid from '../../components/Asaid/Asaid';
import { assets } from '../../assets/assets';

function PlitaBetonnaya1x05() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <h3 class="title-example">Плиты бетонные</h3>
          <div className="product-cart">
            <div className="product-cart-left">
              <img src={assets.betonPlitkaKabel} alt="" />
            </div>
            <div className="product-cart-right">
              <h4 className="zhbi-tittle-main">Плита бетонная 1х0,5 м армированная</h4>
              <p className="zhbi-tittle-main-h3">Характеристики:</p>
              <p className="main-text-p">• Вес упаковки 820 кг</p>
              <p className="main-text-p">• Высота 50 мм</p>
              <p className="main-text-p">• Длина 500 мм</p>
              <p className="main-text-p">• Количество в упаковке 20 шт</p>
              <p className="main-text-p">• Морозостойкость F150</p>
              <p className="main-text-p">• Состояние Новое</p>
              <p className="main-text-p">• Цвет Серый</p>
              <p className="main-text-p">• Ширина 500 мм</p>
              <br />
              <p className="zhbi-tittle-main">Цена: по запросу</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default PlitaBetonnaya1x05;
