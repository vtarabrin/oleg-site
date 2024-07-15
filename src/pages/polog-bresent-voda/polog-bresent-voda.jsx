import './polog-bresent-voda.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Asaid from '../../components/Asaid/Asaid';

function PologBresentVoda() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <h3 class="title-example">Полог брезентовый водоупорный</h3>
          
          <div className="card">
            <Link to="/pdk">
              <img src="https://brezent.su/image/cache/catalog/category/1-98x100.jpg.webp" alt="" />
              <p>Полог брезентовый</p>
            </Link>
            <Link to="/kolco">
              <img src="https://brezent.su/image/cache/catalog/category/1-98x100.jpg.webp" alt="" />
              <p>Полог брезентовый</p>
            </Link>
            <Link to="/ppk">
              <img src="https://brezent.su/image/cache/catalog/category/1-98x100.jpg.webp" alt="" />
              <p>Полог брезентовый</p>
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default PologBresentVoda;
