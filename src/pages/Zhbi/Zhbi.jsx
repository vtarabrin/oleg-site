import './Zhbi.css';
import Asaid from '../../components/Asaid/Asaid';
import React from 'react';
import { Link } from 'react-router-dom';

function Zhbi() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <h3 class="title-example">Железобетонные изделия</h3>
          <div className="card">
            <Link to="/pdk">
              <img src="https://brezent.su/image/cache/catalog/category/1-98x100.jpg.webp" alt="" />
              <p>Плиты днища колодца</p>
            </Link>
            <Link to="/kolco">
              <img src="https://brezent.su/image/cache/catalog/category/1-98x100.jpg.webp" alt="" />
              <p>Кольца</p>
            </Link>
            <Link to="/ppk">
              <img src="https://brezent.su/image/cache/catalog/category/1-98x100.jpg.webp" alt="" />
              <p>Плита перекрытия колодцев</p>
            </Link>
            <Link to="/pd">
              <img src="https://brezent.su/image/cache/catalog/category/1-98x100.jpg.webp" alt="" />
              <p>Плита дорожная</p>
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Zhbi;
