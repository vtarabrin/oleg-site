import './polog-bresent-ogne.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Asaid from '../../components/Asaid/Asaid';

function PologBresentOgne() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <h3 class="title-example">Полог брезентовый огнеупорный</h3>

          <div className="card">
            <Link to="/pdk">
              <img src="https://brezent.su/image/cache/catalog/category/1-98x100.jpg.webp" alt="" />
              <p>Полог брезентовый 4 x 6 м. огнеупорный с люверсами</p>
            </Link>
            <Link to="/kolco">
              <img src="https://brezent.su/image/cache/catalog/category/1-98x100.jpg.webp" alt="" />
              <p>Полог брезентовый 2.5 x 3 м. огнеупорный с люверсами</p>
            </Link>
            <Link to="/ppk">
              <img src="https://brezent.su/image/cache/catalog/category/1-98x100.jpg.webp" alt="" />
              <p>Полог брезентовый 5 x 10 м. огнеупорный</p>
            </Link>
            <Link to="/ppk">
              <img src="https://brezent.su/image/cache/catalog/category/1-98x100.jpg.webp" alt="" />
              <p>Полог брезентовый на самосвал 2.7 x 5.8 м. огнеупорный</p>
            </Link>
            <Link to="/ppk">
              <img src="https://brezent.su/image/cache/catalog/category/1-98x100.jpg.webp" alt="" />
              <p>Полог брезентовый на самосвал 2.7 x 6.8 м. огнеупорный</p>
            </Link>
            <Link to="/ppk">
              <img src="https://brezent.su/image/cache/catalog/category/1-98x100.jpg.webp" alt="" />
              <p>Полог брезентовый 2.7 x 4.5 м. огнеупорный (на контейнер 8 кубов)</p>
            </Link>
            <Link to="/ppk">
              <img src="https://brezent.su/image/cache/catalog/category/1-98x100.jpg.webp" alt="" />
              <p>Полог брезентовый 2.7 x 5.4 м. огнеупорный на самосвал</p>
            </Link>
            <Link to="/ppk">
              <img src="https://brezent.su/image/cache/catalog/category/1-98x100.jpg.webp" alt="" />
              <p>Полог брезентовый 3 x 6 м. огнеупорный</p>
            </Link>
            <Link to="/ppk">
              <img src="https://brezent.su/image/cache/catalog/category/1-98x100.jpg.webp" alt="" />
              <p>Полог брезентовый 6 x 8 м. огнеупорный</p>
            </Link>
            <Link to="/ppk">
              <img src="https://brezent.su/image/cache/catalog/category/1-98x100.jpg.webp" alt="" />
              <p>Полог брезентовый 3 x 5 м. огнеупорный</p>
              <p className="price">1000 Тенге</p>
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default PologBresentOgne;
