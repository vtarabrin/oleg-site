import './beton-plitka-kabel2.css';
import React from 'react';
import Asaid from '../../components/Asaid/Asaid';
import { assets } from '../../assets/assets';

function Bpk30030050() {
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
              <h4 className="zhbi-tittle-main">Бетонная плитка для защиты кабеля 300*300*50</h4>
              <p className="zhbi-tittle-main-h3">Характеристики:</p>
              <p className="main-text-p">• Высота 300</p>
              <p className="main-text-p">• Марка бетона В30 </p>
              <p className="main-text-p">• Материал изделия Бетон не армированный</p>
              <p className="main-text-p">• Цвет Серый</p>
              <p className="main-text-p">• Вес 1 плитки 11 кг</p>
              <p className="main-text-p">• Длина 300 мм</p>
              <p className="main-text-p">• Толщина плитки 50 мм</p>
              <p className="main-text-p">• Вес 1 поддона с плиткой 1076 кг</p>
              <p className="main-text-p">• Упаковка стрейч пленка, стреппинг лента</p>
              <p className="main-text-p">• Количество на паллете 96 шт.</p>
              <br />
              <p className="zhbi-tittle-main">Цена: по запросу</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Bpk30030050;
