import './polog-bresent-voda.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Asaid from '../../components/Asaid/Asaid';
import { assets } from '../../assets/assets';

function PologBresentVoda() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <h3 class="title-example">Полог брезентовый водоупорный</h3>

          <div className="card">
            <Link to="/polog-bresent-voda-4x6">
              <img src={assets.pologBresentVoda} alt="" />
              <p>Полог брезентовый 4 x 6 м. водоупорный</p>
              <p className="price">1000 Тенге</p>
            </Link>
            <Link to="/polog-bresent-voda-27x45">
              <img src={assets.pologBresentVoda} alt="" />
              <p>Полог брезентовый 2.7 x 4.5 м. водоупорный</p>
              <p className="price">1000 Тенге</p>
            </Link>
            <Link to="/polog-bresent-voda-27x68">
              <img src={assets.pologBresentVoda} alt="" />
              <p>Полог брезентовый 2.7 x 6.8 м. водоупорный</p>
              <p className="price">1000 Тенге</p>
            </Link>
            <Link to="/polog-bresent-voda-3x5">
              <img src={assets.pologBresentVoda} alt="" />
              <p>Полог брезентовый 3 x 5 м. водоупорный</p>
              <p className="price">1000 Тенге</p>
          
            </Link>
            <Link to="/polog-bresent-voda-6x8">
              <img src={assets.pologBresentVoda} alt="" />
              <p>Полог брезентовый 6 x 8 м. водоупорный</p>
              <p className="price">1000 Тенге</p>
            </Link>
            <Link to="/polog-bresent-voda-5x10">
              <img src={assets.pologBresentVoda} alt="" />
              <p>Полог брезентовый 5 x 10 м. водоупорный</p>
              <p className="price">1000 Тенге</p>
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default PologBresentVoda;
