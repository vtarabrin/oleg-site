import './beton-plitka-kabel2.css';
import React from 'react';
import Asaid from '../../components/Asaid/Asaid';
import { assets } from '../../assets/assets';

function Bpk50025060() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <h3 class="title-example">Плита днища колодца</h3>
          <div className="product-cart">
            <div className="product-cart-left">
              <img src={assets.betonPlitkaKabel} alt="" />
            </div>
            <div className="product-cart-right">
              <h4 className="zhbi-tittle-main">Бетонная плитка для защиты кабеля 500*250*60</h4>
              <p className="zhbi-tittle-main-h3">Характеристики:</p>
              <p className="main-text-p">• Высота 250</p>
              <p className="main-text-p">• Длина 500</p>
              <p className="main-text-p">• Цвет Серый</p>
              <p className="main-text-p">• Марка бетона В30 </p>
              <p className="main-text-p">• Материал изделия Бетон не армированный</p>
              <p className="main-text-p">• Вес 1 плитки 12 кг</p>
              <p className="main-text-p">• Толщина плитки 60 мм</p>
              <p className="main-text-p">• Вес 1 поддона с плиткой 1460 кг</p>
              <p className="main-text-p">• Упаковка стрейч пленка, стреппинг лента</p>
              <p className="main-text-p">• Количество на паллете 80 шт.</p>
              <br />
              <p className="zhbi-tittle-main">Цена: по запросу</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Bpk50025060;
