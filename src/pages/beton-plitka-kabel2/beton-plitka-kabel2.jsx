import './beton-plitka-kabel2.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Asaid from '../../components/Asaid/Asaid';
import { assets } from '../../assets/assets';

function BetonPlitkaKabel2() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <h3 class="title-example">Бетонная плитка для защиты кабеля</h3>
          <div className="card">
            <Link to="/bpk-300-300-50">
              <img src={assets.betonPlitkaKabel} alt="" />
              <p>Бетонная плитка для защиты кабеля 300*300*50 мм</p>
            </Link>
            <Link to="/bpk-500-200-50">
              <img src={assets.betonPlitkaKabel} alt="" />
              <p>Бетонная плитка для защиты кабеля 500*200*50 мм</p>
            </Link>
            <Link to="/bpk-500-250-60">
              <img src={assets.betonPlitkaKabel} alt="" />
              <p>Бетонная плитка для защиты кабеля 500*250*60 мм</p>
            </Link>
            <Link to="/bpk-600-300-40">
              <img src={assets.betonPlitkaKabel} alt="" />
              <p>Бетонная плитка для защиты кабеля 600*300*40 мм</p>
            </Link>
            <Link to="/bpk-600-300-50">
              <img src={assets.betonPlitkaKabel} alt="" />
              <p>Бетонная плитка для защиты кабеля 600*300*50 мм</p>
            </Link>
            <Link to="/bpk-600-600-35">
              <img src={assets.betonPlitkaKabel} alt="" />
              <p>Бетонная плитка для защиты кабеля 600*300*35 мм</p>
            </Link>
            <Link to="/bpk-900-230-50">
              <img src={assets.betonPlitkaKabel} alt="" />
              <p>Бетонная плитка для защиты кабеля 900*230*50 мм</p>
            </Link>
            <Link to="/bpk-900-300-50">
              <img src={assets.betonPlitkaKabel} alt="" />
              <p>Бетонная плитка для защиты кабеля 900*300*50 мм</p>
            </Link>
            <Link to="/bpk-914-150-50">
              <img src={assets.betonPlitkaKabel} alt="" />
              <p>Бетонная плитка для защиты кабеля 914*150*50 мм</p>
            </Link>
            <Link to="/bpk-914-305-50">
              <img src={assets.betonPlitkaKabel} alt="" />
              <p>Бетонная плитка для защиты кабеля 914*305*50 мм</p>
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default BetonPlitkaKabel2;
