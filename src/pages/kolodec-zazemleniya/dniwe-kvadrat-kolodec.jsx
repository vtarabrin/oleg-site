import React from 'react';
import Asaid from '../../components/Asaid/Asaid';
import { assets } from '../../assets/assets';

function DniweKvadratKolodec() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <h3 class="title-example">Колодцы заземления</h3>
          <div className="product-cart">
            <div className="product-cart-left">
              <img src={assets.DniweKvadratKolodec} alt="" />
            </div>
            <div className="product-cart-right">
              <h4 className="zhbi-tittle-main">
                Днище к квадратному колодцу (армированное d10 мм)
              </h4>
              <p className="zhbi-tittle-main-h3">Характеристики:</p>
              <p className="main-text-p">• Вид железобетонного изделия Днище</p>
              <p className="main-text-p">• Масса, кг 1700</p>
              <p className="main-text-p">• Размеры, см 225*225*120</p>
              <br />
              <p className="zhbi-tittle-main">Цена: по запросу</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default DniweKvadratKolodec;
