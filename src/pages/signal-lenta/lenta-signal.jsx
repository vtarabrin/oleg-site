import './signal-lenta.css';
import React from 'react';
import Asaid from '../../components/Asaid/Asaid';
import { assets } from '../../assets/assets';

function LentaSignal() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <h3 class="title-example">Сигнальная лента</h3>
          <div className="product-cart">
            <div className="product-cart-left">
              <img src={assets.LentaSignal} alt="" />
            </div>
            <div className="product-cart-right">
              <h4 className="zhbi-tittle-main">Сигнальная лента</h4>
              <p className="zhbi-tittle-main-h3">Сигнальная лента. Наименование, ширина, длина:</p>
              <p className="main-text-p">• Сигнальная лента ЛСЭ красная 150 100</p>
              <p className="main-text-p">• Сигнальная лента ЛСЭ красная 250 100</p>
              <p className="main-text-p">• Сигнальная лента ЛСЭ красная 300 100</p>
              <p className="main-text-p">• Сигнальная лента ЛСЭ красная 450 100</p>
              <p className="main-text-p">• Сигнальная лента ЛСЭ красная 600 100</p>
              <p className="main-text-p">• Сигнальная лента ЛСЭ красная 750 100</p>
              <p className="main-text-p">• Сигнальная лента ЛСЭ красная 900 100</p>
              <p className="main-text-p">• Сигнальная лента ЛСО желтая 40 500</p>
              <p className="main-text-p">• Сигнальная лента ЛСО желтая 70 500</p>
              <p className="main-text-p">• Сигнальная лента ЛСС оранжевая 40 250</p>
              <p className="main-text-p">• Сигнальная лента ЛСС оранжевая 50 250</p>
              <p className="main-text-p">• Сигнальная лента ЛСС оранжевая 75 250</p>
              <p className="main-text-p">• Сигнальная лента ЛСС оранжевая 100 250</p>
              <p className="main-text-p">• Сигнальная лента ЛСГ черно-желтая 200 250</p>
              <p className="main-text-p">• Сигнальная лента ЛСГ красно-черная 200 250</p>
              <p className="main-text-p">
                • Сигнальная лента ЛСГ металлизированная (детекционная) 1 проводник 200 250
              </p>
              <p className="main-text-p">
                • Сигнальная лента ЛСГ металлизированная (детекционная) 2 проводника 200 251
              </p>
              <p className="main-text-p">• Сигнальная лента ЛСТ 200 250</p>
              <p className="main-text-p">
                • Сигнальная лента ЛСТ металлизированная (детекционная) 1 проводник 200 150
              </p>
              <p className="main-text-p">• Сигнальная лента ЛСК 200 250</p>
              <p className="main-text-p">
                • Сигнальная лента ЛСК металлизированная (детекционная) 1 проводник 200 150
              </p>
              <p className="main-text-p">• Сигнальная лента ЛСВ 200 250</p>
              <p className="main-text-p">
                • Сигнальная лента ЛСВ металлизированная (детекционная) 1 проводник 200 150
              </p>
              <p className="main-text-p">
                • Сигнальная лента "Внимание Водопровод" детекционная 1 проводник 200 250
              </p>
              <br />
              <p className="zhbi-tittle-main">Цена: 5000 Рублей</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default LentaSignal;
