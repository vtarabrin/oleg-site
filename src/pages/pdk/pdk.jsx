import './pdk.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Asaid from '../../components/Asaid/Asaid';
import { assets } from '../../assets/assets';

function Pdk() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <h3 class="title-example">Плита днища колодца</h3>
          <div className="card">
            <Link to="/pdk10">
              <img src={assets.pdk10} alt="" />
              <p>Плита днища колодца ПН 10 ГОСТ 8020-2016</p>
            </Link>
            <Link to="/pdk15">
              <img src={assets.pdk15} alt="" />
              <p>Плита днища колодца ПН 15 ГОСТ 8020-2016</p>
            </Link>
            <Link to="/pdk20">
              <img src={assets.pdk20} alt="" />
              <p>Плита днища колодца ПН 20 ГОСТ 8020-2016</p>
            </Link>
            <Link to="/pdk23">
              <img src={assets.pdk20} alt="" />
              <p>Плита днища колодца ПН 23</p>
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Pdk;
