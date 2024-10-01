import './polog-bresent-ogne.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Asaid from '../../components/Asaid/Asaid';
import { assets } from '../../assets/assets';

function PologBresentOgne() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <h3 class="title-example">Полог брезентовый огнеупорный</h3>

          <div className="card">
            <Link to="/polog-bresent-ogne-4x6">
              <img src={assets.pologBresentOgne} alt="" />
              <p>Полог брезентовый 4 x 6 м. огнеупорный с люверсами</p>
            </Link>
            <Link to="/polog-bresent-ogne-25x3">
              <img src={assets.pologBresentOgne} alt="" />
              <p>Полог брезентовый 2.5 x 3 м. огнеупорный с люверсами</p>
            </Link>
            <Link to="/polog-bresent-ogne-5x10">
              <img src={assets.pologBresentOgne} alt="" />
              <p>Полог брезентовый 5 x 10 м. огнеупорный</p>
            </Link>
            <Link to="/polog-bresent-ogne-27x58">
              <img src={assets.pologBresentOgne} alt="" />
              <p>Полог брезентовый на самосвал 2.7 x 5.8 м. огнеупорный</p>
            </Link>
            <Link to="/polog-bresent-ogne-27x68">
              <img src={assets.pologBresentOgne} alt="" />
              <p>Полог брезентовый на самосвал 2.7 x 6.8 м. огнеупорный</p>
            </Link>
            <Link to="/polog-bresent-ogne-27x45">
              <img src={assets.pologBresentOgne} alt="" />
              <p>Полог брезентовый 2.7 x 4.5 м. огнеупорный (на контейнер 8 кубов)</p>
            </Link>
            <Link to="/polog-bresent-ogne-27x54">
              <img src={assets.pologBresentOgne} alt="" />
              <p>Полог брезентовый 2.7 x 5.4 м. огнеупорный на самосвал</p>
            </Link>
            <Link to="/polog-bresent-ogne-3x6">
              <img src={assets.pologBresentOgne} alt="" />
              <p>Полог брезентовый 3 x 6 м. огнеупорный</p>
            </Link>
            <Link to="/polog-bresent-ogne-6x8">
              <img src={assets.pologBresentOgne} alt="" />
              <p>Полог брезентовый 6 x 8 м. огнеупорный</p>
            </Link>
            <Link to="/polog-bresent-ogne-3x5">
              <img src={assets.pologBresentOgne} alt="" />
              <p>Полог брезентовый 3 x 5 м. огнеупорный</p>
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default PologBresentOgne;
