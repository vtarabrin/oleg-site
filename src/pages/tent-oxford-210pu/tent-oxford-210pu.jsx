import './tent-oxford-210pu.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Asaid from '../../components/Asaid/Asaid';
import { assets } from '../../assets/assets';

function TentOxford210PU() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <h3 class="title-example">Тент оксфорд 210PU</h3>
          <div className="card">
            <Link to="/tent-oxford-210pu-4x6">
              <img src={assets.tentOxford210PU} alt="" />
              <p>Тент оксфорд 210PU - 4 x 6 м. </p>
              <p className="price">1000тенге</p>
            </Link>
            <Link to="/tent-oxford-210pu-25x3">
              <img src={assets.tentOxford210PU} alt="" />
              <p>Тент оксфорд 210PU - 2.5 x 3 м. </p>
              <p className="price">1000тенге</p>
            </Link>
            <Link to="/tent-oxford-210pu-3x5">
              <img src={assets.tentOxford210PU} alt="" />
              <p>Тент оксфорд 210PU - 3 x 5 м. </p>
              <p className="price">1000тенге</p>
            </Link>
            <Link to="/tent-oxford-210pu-5x10">
              <img src={assets.tentOxford210PU} alt="" />
              <p>Тент оксфорд 210PU - 5 x 10 м. </p>
              <p className="price">1000тенге</p>
            </Link>
            <Link to="/tent-oxford-210pu-6x8">
              <img src={assets.tentOxford210PU} alt="" />
              <p>Тент оксфорд 210PU - 6 x 8 м. </p>
              <p className="price">1000тенге</p>
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default TentOxford210PU;
