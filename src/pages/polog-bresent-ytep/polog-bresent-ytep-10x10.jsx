import './polog-bresent-ytep.css';
import React from 'react';
import Asaid from '../../components/Asaid/Asaid';
import { assets } from '../../assets/assets';

function PologBresentYtep10x10() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <h3 class="title-example">Полог брезентовый утепленный зимний</h3>
          <div className="product-cart">
            <div className="product-cart-left">
              <img src={assets.pologBresentYtep} alt="" />
            </div>
            <div className="product-cart-right">
              <h4 className="zhbi-tittle-main">
                Полог брезентовый утепленный 10 х 10 м с люверсами
              </h4>
              <p className="zhbi-tittle-main-h3">Характеристики:</p>
              <p className="main-text-p">• Люверсы по периметру — есть</p>
              <p className="main-text-p">• Размер — 10х10</p>
              <p className="main-text-p">• Утеплитель — изолон 5мм</p>
              <br />
              <p className="zhbi-tittle-main">Цена: 5000 Рублей</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default PologBresentYtep10x10;
