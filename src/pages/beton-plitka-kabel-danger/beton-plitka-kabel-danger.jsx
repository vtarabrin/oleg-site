import './beton-plitka-kabel-danger.css';
import React from 'react';
import Asaid from '../../components/Asaid/Asaid';
import { assets } from '../../assets/assets';

function BetonPlitkaKabelDanger() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <h3 class="title-example">Плитка бетонная для защиты кабеля "DANGER - ОПАСНО"</h3>
          <div className="product-cart">
            <div className="product-cart-left">
              <img src={assets.danger} alt="" />
            </div>
            <div className="product-cart-right">
              <h4 className="zhbi-tittle-main">
                Плитка бетонная для защиты кабеля "DANGER - ОПАСНО"
              </h4>
              <p className="zhbi-tittle-main-h3">Характеристики:</p>
              <p className="main-text-p">• Страна производитель Казахстан</p>
              <p className="main-text-p">• Высота 300 мм</p>
              <p className="main-text-p">• Длина 600 мм</p>
              <p className="main-text-p">• Количество в упаковке 60 шт</p>
              <p className="main-text-p">• Материал изделия Бетон</p>
              <p className="main-text-p">• Состояние Новое</p>
              <p className="main-text-p">• Способ изготовления Вибролитье</p>
              <p className="main-text-p">• Цвет Серый</p>
              <p className="main-text-p">• Ширина 50 мм</p>
              <p className="main-text-p">• Плитка бетонная сигнальная с надписью DANGER/ОПАСНО</p>
              <br />
              <p className="zhbi-tittle-main">Цена: по запросу</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default BetonPlitkaKabelDanger;
