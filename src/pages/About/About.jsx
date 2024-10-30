import React from 'react';
import Asaid from '../../components/Asaid/Asaid';
import './About.css';

function About() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <div className="main-tittle">
            <span className="main-tittle-inner">О нас</span>
          </div>
          <div className="about-info">
            <span className="about-span">
              <p className="main-text-about">
                Компания ТОО "УралПромСнаб" была образована в 2018 году, с целью предоставления
                качественных услуг в области комплексных поставок для нефтегазодобывающих
                предприятий Республики Казахстан.
              </p>
              <p className="main-text-about">
                За прошедшее время мы зарекомендовали себя как надежного и качественного партнера.
                Для нас всегда были важны три аспекта в работе:
              </p>
              <ul className="main-text-ul">
                <li>• Качество,</li>
                <li>• Скорость,</li>
                <li>• Стоимость.</li>
              </ul>
              <p className="main-text-about">
                Это позволило заслужить доверие и уважение наших партнеров и клиентов. За прошедшие
                годы было реализовано более 1 000 контрактов на поставку оборудование и материалов.
              </p>
              <p className="main-text-about">
                Наша компания осуществляет целый комплекс мероприятий, связанных с закупкой и
                поставкой товаров в Казахстан. Сюда входит и поиск необходимого товара из России,
                доставка товара до склада Покупателя в Казахстан.
              </p>
              <p className="main-text-about">
                Такое комплексное решение крайне выгодно предприятиям, желающим приобрести товар в
                России.
              </p>
            </span>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default About;
