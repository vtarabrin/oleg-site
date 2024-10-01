import React from 'react';
import Asaid from '../../components/Asaid/Asaid';
import { assets } from '../../assets/assets';

function BitumMG130x200() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <h3 class="title-example">Битумы</h3>
          <div className="product-cart">
            <div className="product-cart-left">
              <img src={assets.BitumNeft} alt="" />
            </div>
            <div className="product-cart-right">
              <h4 className="zhbi-tittle-main">Битум МГ 130/200</h4>
              <p className="zhbi-tittle-main-h3">
                Физико - химические показатели жидкого дорожного битума МГ 130/200{' '}
              </p>
              <p className="main-text-p">
                • Условная вязкость по вискозиметру с отверстием 5 мм при 60°C, <b>с 131-200</b>
              </p>
              <p className="main-text-p">
                • Количество испарившегося разжижителя, %, <b>не менее 5</b>
              </p>
              <p className="main-text-p">
                • Температура размягчения остатка после определения количества испарившегося
                разжижителя, °C, <b>не ниже 30</b>
              </p>
              <p className="main-text-p">
                • Температура вспышки, определяемая в открытом тигле, °C, <b>не ниже 110</b>
              </p>
              <p className="main-text-p">
                • Испытание и сцепление с мрамором или с песком{' '}
                <b>Выдерживает в соответствии с контрольным образцом № 2</b>
              </p>
              <br />
              <p className="zhbi-tittle-main">Цена: по запросу</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default BitumMG130x200;
