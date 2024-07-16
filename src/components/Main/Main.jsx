import './Main.css';
import { Link } from 'react-router-dom';
import React from 'react';
import Asaid from '../Asaid/Asaid';
import { assets } from '../../assets/assets';

function Main() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <div className="main-tittle">
            <span className="main-tittle-inner">Каталог товаров</span>
          </div>
          <div className="card">
            <Link to="/polog-bresent">
              <img src={assets.pologBresentOgne} alt="" />
              <p>Полог брезентовый</p>
            </Link>
            <Link to="/tent-tarpaulin">
              <img src={assets.tentParapulin180} alt="" />
              <p>Тент Тарпаулин</p>
            </Link>
            <Link to="/tent-oxford">
              <img src={assets.tentOxford420PU} alt="" />
              <p>Тент Оксфорд</p>
            </Link>
            <Link to="/zhbi">
              <img src={assets.kolca} alt="" />
              <p>ЖБИ кольца</p>
            </Link>
            <Link to="/beton-plitka-kabel">
              <img src="https://brezent.su/image/cache/catalog/category/1-98x100.jpg.webp" alt="" />
              <p>Бетонная плитка для защиты кабеля</p>
            </Link>
            <Link to="/zamer-stolbiki">
              <img src="https://brezent.su/image/cache/catalog/category/1-98x100.jpg.webp" alt="" />
              <p>Замерные столбики</p>
            </Link>
            <Link to="/kolodec-zazemleniya">
              <img src="https://brezent.su/image/cache/catalog/category/1-98x100.jpg.webp" alt="" />
              <p>Колодцы заземления</p>
            </Link>
            <Link to="/plita-betonnaya">
              <img src="https://brezent.su/image/cache/catalog/category/1-98x100.jpg.webp" alt="" />
              <p>Плиты бетонные</p>
            </Link>
            <Link to="/luki">
              <img src="https://brezent.su/image/cache/catalog/category/1-98x100.jpg.webp" alt="" />
              <p>Люки</p>
            </Link>
            <Link to="/signal-lenta">
              <img src="https://brezent.su/image/cache/catalog/category/1-98x100.jpg.webp" alt="" />
              <p>Сигнальная лента</p>
            </Link>
            <Link to="/ykazatel-tablica">
              <img src="https://brezent.su/image/cache/catalog/category/1-98x100.jpg.webp" alt="" />
              <p>Указательные таблички</p>
            </Link>
            <Link to="/bitum-neft">
              <img src="https://brezent.su/image/cache/catalog/category/1-98x100.jpg.webp" alt="" />
              <p>Битумы нефтяные</p>
            </Link>
            <Link to="/kaska-stroitel">
              <img src="https://brezent.su/image/cache/catalog/category/1-98x100.jpg.webp" alt="" />
              <p>Каски строительные</p>
            </Link>
            <Link to="/komplekt-vik">
              <img src="https://brezent.su/image/cache/catalog/category/1-98x100.jpg.webp" alt="" />
              <p>Комплект визуально-измерительного контроля ВИК</p>
            </Link>
            <Link to="/komplekt-wablon-svarwik">
              <img src="https://brezent.su/image/cache/catalog/category/1-98x100.jpg.webp" alt="" />
              <p>Комплект и шаблоны сварщика</p>
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Main;
