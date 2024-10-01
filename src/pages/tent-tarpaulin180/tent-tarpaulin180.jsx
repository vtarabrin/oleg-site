import './tent-tarpaulin180.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Asaid from '../../components/Asaid/Asaid';
import { assets } from '../../assets/assets';

function TentTarpaulin180() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <h3 class="title-example">Тент тарпаулин 180 гр/м2</h3>
          <div className="card">
            <Link to="/tent-tarpaulin180-4x6">
              <img src={assets.tentParapulin180} alt="" />
              <p>Тент тарпаулин 180гр/м2 - 4 x 6 м. </p>
            </Link>
            <Link to="/tent-tarpaulin180-10x12">
              <img src={assets.tentParapulin180} alt="" />
              <p>Тент тарпаулин 180гр/м2 - 10 x 12 м. </p>
            </Link>
            <Link to="/tent-tarpaulin180-10x15">
              <img src={assets.tentParapulin180} alt="" />
              <p>Тент тарпаулин 180гр/м2 - 10 x 15 м. </p>
            </Link>
            <Link to="/tent-tarpaulin180-10x20">
              <img src={assets.tentParapulin180} alt="" />
              <p>Тент тарпаулин 180гр/м2 - 10 x 20 м. </p>
            </Link>
            <Link to="/tent-tarpaulin180-15x15">
              <img src={assets.tentParapulin180} alt="" />
              <p>Тент тарпаулин 180гр/м2 - 15 x 15 м. </p>
            </Link>
            <Link to="/tent-tarpaulin180-15x20">
              <img src={assets.tentParapulin180} alt="" />
              <p>Тент тарпаулин 180гр/м2 - 15 x 20 м. </p>
            </Link>
            <Link to="/tent-tarpaulin180-2x3">
              <img src={assets.tentParapulin180} alt="" />
              <p>Тент тарпаулин 180гр/м2 - 2 x 3 м. </p>
            </Link>
            <Link to="/tent-tarpaulin180-20x20">
              <img src={assets.tentParapulin180} alt="" />
              <p>Тент тарпаулин 180гр/м2 - 20 x 20 м. </p>
            </Link>
            <Link to="/tent-tarpaulin180-20x30">
              <img src={assets.tentParapulin180} alt="" />
              <p>Тент тарпаулин 180гр/м2 - 20 x 30 м. </p>
            </Link>
            <Link to="/tent-tarpaulin180-3x4">
              <img src={assets.tentParapulin180} alt="" />
              <p>Тент тарпаулин 180гр/м2 - 3 x 4 м. </p>
            </Link>
            <Link to="/tent-tarpaulin180-3x5">
              <img src={assets.tentParapulin180} alt="" />
              <p>Тент тарпаулин 180гр/м2 - 3 x 5 м. </p>
            </Link>
            <Link to="/tent-tarpaulin180-3x6">
              <img src={assets.tentParapulin180} alt="" />
              <p>Тент тарпаулин 180гр/м2 - 3 x 6 м. </p>
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default TentTarpaulin180;
