import './tent-tarpaulin70.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Asaid from '../../components/Asaid/Asaid';
import { assets } from '../../assets/assets';

function TentTarpaulin70() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <h3 class="title-example">Тент тарпаулин универсальный 70 гр/м2</h3>
          <div className="card">
            <Link to="/tent-tarpaulin70-10x12">
              <img src={assets.tentParapulin70} alt="" />
              <p>Тент укрывной тарпаулин 70 гр/м2 - 10 х 12 м.</p>
            </Link>
            <Link to="/tent-tarpaulin70-10x15">
              <img src={assets.tentParapulin70} alt="" />
              <p>Тент укрывной тарпаулин 70 гр/м2 - 10 х 15 м.</p>
            </Link>
            <Link to="/tent-tarpaulin70-15x20">
              <img src={assets.tentParapulin70} alt="" />
              <p>Тент укрывной тарпаулин 70 гр/м2 - 15 х 20 м.</p>
            </Link>
            <Link to="/tent-tarpaulin70-4x6">
              <img src={assets.tentParapulin70} alt="" />
              <p>Тент укрывной тарпаулин 70 гр/м2 - 4 х 6 м.</p>
            </Link>
            <Link to="/tent-tarpaulin70-6x10">
              <img src={assets.tentParapulin70} alt="" />
              <p>Тент укрывной тарпаулин 70 гр/м2 - 6 х 10 м.</p>
            </Link>
            <Link to="/tent-tarpaulin70-6x8">
              <img src={assets.tentParapulin70} alt="" />
              <p>Тент укрывной тарпаулин 70 гр/м2 - 6 х 8 м.</p>
            </Link>
            <Link to="/tent-tarpaulin70-8x10">
              <img src={assets.tentParapulin70} alt="" />
              <p>Тент укрывной тарпаулин 70 гр/м2 - 8 х 10 м.</p>
            </Link>
            <Link to="/tent-tarpaulin70-8x12">
              <img src={assets.tentParapulin70} alt="" />
              <p>Тент укрывной тарпаулин 70 гр/м2 - 8 х 12 м.</p>
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default TentTarpaulin70;
