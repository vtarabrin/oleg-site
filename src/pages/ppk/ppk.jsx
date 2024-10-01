import './ppk.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Asaid from '../../components/Asaid/Asaid';
import { assets } from '../../assets/assets';

function Ppk() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <h3 class="title-example">Плиты перекрытия колодцев</h3>
          <div className="card">
            <Link to="/pdk">
              <img src={assets.pp102} alt="" />
              <p>Плита перекрытия колодца ПП 10-2 ГОСТ 8020-2016</p>
            </Link>
            <Link to="/kolco">
              <img src={assets.pp152} alt="" />
              <p>Плита перекрытия колодца 1ПП 15-2 ГОСТ 8020-2016</p>
            </Link>
            <Link to="/ppk">
              <img src={assets.pp20} alt="" />
              <p>Плита перекрытия колодца 1ПП 20-1 ГОСТ 8020-2016</p>
            </Link>
            <Link to="/ppk">
              <img src={assets.pp20} alt="" />
              <p>Плита перекрытия колодца 1ПП 20-2 ГОСТ 8020-2016</p>
            </Link>
            <Link to="/ppk">
              <img src={assets.pp10} alt="" />
              <p>Плита перекрытия колодца ПП 10</p>
            </Link>
            <Link to="/ppk">
              <img src={assets.pp15} alt="" />
              <p>Плита перекрытия колодца ПП 15</p>
            </Link>
            <Link to="/ppk">
              <img src={assets.pp20} alt="" />
              <p>Плита перекрытия колодца ПП 20</p>
            </Link>
            <Link to="/ppk">
              <img src={assets.pp20} alt="" />
              <p>Плита перекрытия колодца ПП 23</p>
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Ppk;
