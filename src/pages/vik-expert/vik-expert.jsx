import React from 'react';
import Asaid from '../../components/Asaid/Asaid';
import { assets } from '../../assets/assets';

function VikExpert() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <h3 class="title-example">Комплект сварщика</h3>
          <div className="product-cart">
            <div className="product-cart-left">
              <img src={assets.VikExpert} alt="" />
            </div>
            <div className="product-cart-right">
              <h4 className="zhbi-tittle-main">
                ВИК ЭКСПЕРТ НК - комплект визуально-измерительного контроля
              </h4>
              <p className="zhbi-tittle-main-h3">Комплект поставки:</p>
              <p className="main-text-p">• линейка стальная 150 мм;</p>
              <p className="main-text-p">• штангенциркуль ШЦ I-125-0,1 ГОСТ 166-89;</p>
              <p className="main-text-p">• угольник поверочный УП 160х100 кл.1;</p>
              <p className="main-text-p">• шаблон радиусный №1;</p>
              <p className="main-text-p">• шаблон радиусный №3;</p>
              <p className="main-text-p">• набор щупов №4 70 мм;</p>
              <p className="main-text-p">
                • <b>универсальный шаблон сварщика УШС-4;</b>
              </p>
              <p className="main-text-p">
                • <b>катетомер КМС-3-16;</b>
              </p>
              <p className="main-text-p">• универсальный шаблон Красовского УШК-1;</p>
              <p className="main-text-p">• лупа измерительная ЛИ-3-10х;</p>
              <p className="main-text-p">• лупа просмотровая с подсветкой ЛПП-1-3/8х;</p>
              <p className="main-text-p">• лупа складная просмотровая ЛП-1-8x;</p>
              <p className="main-text-p">• рулетка 3 м;</p>
              <p className="main-text-p">• светодиодный LED фонарик;</p>
              <p className="main-text-p">• маркер универсальный (белый);</p>
              <p className="main-text-p">• мел термостойкий;</p>
              <p className="main-text-p">• зеркало с телескопической ручкой;</p>
              <p className="main-text-p">• фирменнная сумка-папка;</p>
              <p className="main-text-p">• паспорт;</p>
              <p className="main-text-p">• свидетельство о калибровке комплекта.</p>
              <br />
              <p className="zhbi-tittle-main">Цена: по запросу</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default VikExpert;
