import './tent-oxford-420pu.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Asaid from '../../components/Asaid/Asaid';
import { assets } from '../../assets/assets';

function TentOxford420PU() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <h3 className="title-example">Тент оксфорд 420 PU+</h3>
          <div className="card">
            <Link to="/tent-oxford-420pu-4x6">
              <img src={assets.tentOxford420PU} alt="" />
              <p>Тент оксфорд 420PU+ - 4 x 6 м. </p>
              <p className="price">1000тенге</p>
            </Link>
            <Link to="/tent-oxford-420pu-25x3">
              <img src={assets.tentOxford420PU} alt="" />
              <p>Тент оксфорд 420PU+ - 2.5 x 3 м. </p>
              <p className="price">1000тенге</p>
            </Link>
            <Link to="/tent-oxford-420pu-3x5">
              <img src={assets.tentOxford420PU} alt="" />
              <p>Тент оксфорд 420PU+ - 3 x 5 м. </p>
              <p className="price">1000тенге</p>
            </Link>
            <Link to="/tent-oxford-420pu-5x10">
              <img src={assets.tentOxford420PU} alt="" />
              <p>Тент оксфорд 420PU+ - 5 x 10 м. </p>
              <p className="price">1000тенге</p>
            </Link>
            <Link to="/tent-oxford-420pu-6x8">
              <img src={assets.tentOxford420PU} alt="" />
              <p>Тент оксфорд 420PU+ - 6 x 8 м. </p>
              <p className="price">1000тенге</p>
            </Link>
            <Link to="/tent-oxford-420pu-27x45">
              <img src={assets.tentOxford420PU} alt="" />
              <p>Тент оксфорд 420PU+ - 2.7 x 4.5 м. </p>
              <p className="price">1000тенге</p>
            </Link>
            <Link to="/tent-oxford-420pu-27x54">
              <img src={assets.tentOxford420PU} alt="" />
              <p>Тент оксфорд 420PU+ - 2.7 x 5.4 м. </p>
              <p className="price">1000тенге</p>
            </Link>
            <Link to="/tent-oxford-420pu-27x58">
              <img src={assets.tentOxford420PU} alt="" />
              <p>Тент оксфорд 420PU+ - 2.7 x 5.8 м. </p>
              <p className="price">1000тенге</p>
            </Link>
            <Link to="/tent-oxford-420pu-27x68">
              <img src={assets.tentOxford420PU} alt="" />
              <p>Тент оксфорд 420PU+ - 2.7 x 6.8 м. </p>
              <p className="price">1000тенге</p>
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default TentOxford420PU;
