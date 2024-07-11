import React from 'react';
import Asaid from '../../components/Asaid/Asaid';
import './About.css';

function About() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <div className="main-tittle">
            <span className="main-tittle-inner">О нас</span>
          </div>
          <div className="about-info">
            <span className="about-span">BBBBBBBBB</span>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default About;
