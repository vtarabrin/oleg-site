import './tent-oxford-ytep.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Asaid from '../../components/Asaid/Asaid';
import { assets } from '../../assets/assets';

function TentOxfordYtep() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <h3 class="title-example">Утепленный тент оксфорд</h3>
          <div className="card">
            <Link to="/tent-oxford-ytep-420-4x6">
              <img src={assets.tentOxford420PUYtep} alt="" />
              <p>Тент оксфорд утепленный 420PU+ - 4 x 6 м. </p>
              <p className="price">1000тенге</p>
            </Link>
            <Link to="/tent-oxford-ytep-420-25x3">
              <img src={assets.tentOxford420PUYtep} alt="" />
              <p>Тент оксфорд утепленный 420PU+ - 2.5 x 3 м. </p>
              <p className="price">1000тенге</p>
            </Link>
            <Link to="/tent-oxford-ytep-210-3x5">
              <img src={assets.tentOxford210PUYtep} alt="" />
              <p>Тент оксфорд утепленный 210PU - 3 x 5 м. </p>
              <p className="price">1000тенге</p>
            </Link>
            <Link to="/tent-oxford-ytep-420-3x5">
              <img src={assets.tentOxford420PUYtep} alt="" />
              <p>Тент оксфорд утепленный 420PU+ - 3 x 5 м. </p>
              <p className="price">1000тенге</p>
            </Link>
            <Link to="/tent-oxford-ytep-210-6x8">
              <img src={assets.tentOxford210PUYtep} alt="" />
              <p>Тент оксфорд утепленный 210PU - 6 x 8 м. </p>
              <p className="price">1000тенге</p>
            </Link>
            <Link to="/tent-oxford-ytep-420-6x8">
              <img src={assets.tentOxford420PUYtep} alt="" />
              <p>Тент оксфорд утепленный 420PU+ - 6 x 8 м. </p>
              <p className="price">1000тенге</p>
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default TentOxfordYtep;
