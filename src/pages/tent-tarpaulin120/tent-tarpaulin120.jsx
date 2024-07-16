import './tent-tarpaulin120.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Asaid from '../../components/Asaid/Asaid';
import { assets } from '../../assets/assets';

function TentTarpaulin120() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <h3 class="title-example">Тент тарпаулин универсальный 120гр/м2</h3>
          <div className="card">
            <Link to="/tent-tarpaulin120-4x6">
              <img src={assets.tentParapulin120} alt="" />
              <p>Тент строительный тарпаулин 120гр/м2 - 4 x 6 м. </p>
              <p className="price">1000тенге</p>
            </Link>
            <Link to="/tent-tarpaulin120-4x8">
              <img src={assets.tentParapulin120} alt="" />
              <p>Тент строительный тарпаулин 120гр/м2 - 4 x 8 м. </p>
              <p className="price">1000тенге</p>
            </Link>
            <Link to="/tent-tarpaulin120-5x6">
              <img src={assets.tentParapulin120} alt="" />
              <p>Тент строительный тарпаулин 120гр/м2 - 5 x 6 м. </p>
              <p className="price">1000тенге</p>
            </Link>
            <Link to="/tent-tarpaulin120-6x8">
              <img src={assets.tentParapulin120} alt="" />
              <p>Тент строительный тарпаулин 120гр/м2 - 6 x 8 м. </p>
              <p className="price">1000тенге</p>
            </Link>
            <Link to="/tent-tarpaulin120-6x10">
              <img src={assets.tentParapulin120} alt="" />
              <p>Тент строительный тарпаулин 120гр/м2 - 6 x 10 м. </p>
              <p className="price">1000тенге</p>
            </Link>
            <Link to="/tent-tarpaulin120-8x10">
              <img src={assets.tentParapulin120} alt="" />
              <p>Тент строительный тарпаулин 120гр/м2 - 8 x 10 м. </p>
              <p className="price">1000тенге</p>
            </Link>
            <Link to="/tent-tarpaulin120-10x12">
              <img src={assets.tentParapulin120} alt="" />
              <p>Тент строительный тарпаулин 120гр/м2 - 10 x 12 м. </p>
              <p className="price">1000тенге</p>
            </Link>
            <Link to="/tent-tarpaulin120-10x15">
              <img src={assets.tentParapulin120} alt="" />
              <p>Тент строительный тарпаулин 120гр/м2 - 10 x 15 м. </p>
              <p className="price">1000тенге</p>
            </Link>
            <Link to="/tent-tarpaulin120-10x20">
              <img src={assets.tentParapulin120} alt="" />
              <p>Тент строительный тарпаулин 120гр/м2 - 10 x 20 м. </p>
              <p className="price">1000тенге</p>
            </Link>
            <Link to="/tent-tarpaulin120-15x15">
              <img src={assets.tentParapulin120} alt="" />
              <p>Тент строительный тарпаулин 120гр/м2 - 15 x 15 м. </p>
              <p className="price">1000тенге</p>
            </Link>
            <Link to="/tent-tarpaulin120-15x20">
              <img src={assets.tentParapulin120} alt="" />
              <p>Тент строительный тарпаулин 120гр/м2 - 15 x 20 м. </p>
              <p className="price">1000тенге</p>
            </Link>
            <Link to="/tent-tarpaulin120-20x20">
              <img src={assets.tentParapulin120} alt="" />
              <p>Тент строительный тарпаулин 120гр/м2 - 20 x 20 м. </p>
              <p className="price">1000тенге</p>
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default TentTarpaulin120;
