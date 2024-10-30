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
              <img src={assets.betonPlitkaKabel} alt="" />
              <br />
              <p>Бетонная плитка для защиты кабеля</p>
            </Link>
            <Link to="/zamer-stolbiki">
              <img
                className="photo"
                src={assets.ZamerStolb24}
                style={{ height: 170, width: 100 }}
              />
              <p>Замерные столбики</p>
            </Link>
            <Link to="/kolodec-zazemleniya">
              <img src={assets.InspectKolodecZazem} alt="" />
              <br />
              <p>Колодцы заземления</p>
            </Link>
            <Link to="/plita-betonnaya">
              <img src={assets.PlitaBeton} alt="" />
              <br />
              <p>Плиты бетонные</p>
            </Link>
            <Link to="/luki">
              <img src={assets.LukBeton} alt="" />
              <br />
              <p>Люки</p>
            </Link>
            <Link to="/signal-lenta">
              <img src={assets.LentaSignal} alt="" />
              <br />
              <p>Сигнальная лента</p>
            </Link>
            <Link to="/ykazatel-tablica">
              <img src={assets.YkazatelTablica} alt="" />
              <br />
              <p>Указательные таблички</p>
            </Link>
            <Link to="/bitum-neft">
            <img
                className="photo"
                src={assets.BitumNeft}
                style={{ height: 150, width: 150 }}
              />
              <br />
              <p>Битумы нефтяные</p>
            </Link>
            <Link to="/kaska-stroitel">
              <img src={assets.KaskaStroitel} alt="" />
              <p>Каски строительные</p>
            </Link>
            <Link to="/komplekt-vik">
              <img src={assets.VikBazaKomplekt} alt="" />
              <p>Комплект визуально-измерительного контроля ВИК</p>
            </Link>
            
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Main;
