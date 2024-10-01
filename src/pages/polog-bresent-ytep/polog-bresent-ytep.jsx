import './polog-bresent-ytep.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Asaid from '../../components/Asaid/Asaid';
import { assets } from '../../assets/assets';

function PologBresentYtep() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <h3 class="title-example">Полог брезентовый утепленный зимний</h3>
          <div className="card">
            <Link to="/polog-bresent-ytep-6x8">
              <img src={assets.pologBresentYtep} alt="" />
              <p>Полог брезентовый 6 x 8 м. утепленный</p>
            </Link>
            <Link to="/polog-bresent-ytep-4x6">
              <img src={assets.pologBresentYtep} alt="" />
              <p>Полог брезентовый 4 x 6 м. утепленный</p>
            </Link>
            <Link to="/polog-bresent-ytep-5x10">
              <img src={assets.pologBresentYtep} alt="" />
              <p>Полог брезентовый 5 x 10 м. утепленный</p>
            </Link>
            <Link to="/polog-bresent-ytep-3x5">
              <img src={assets.pologBresentYtep} alt="" />
              <p>Полог брезентовый 3 x 5 м. утепленный</p>
            </Link>
            <Link to="/polog-bresent-ytep-10x10">
              <img src={assets.pologBresentYtep} alt="" />
              <p>Полог брезентовый 10 x 10 м. утепленный</p>
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default PologBresentYtep;
