import './Main.css';
import { Link } from 'react-router-dom';
import React from 'react';
import Asaid from '../Asaid/Asaid';

function Main() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <div className="main-tittle">
            <span className="main-tittle-inner">Каталог товаров</span>
          </div>
          <div className="card">
            <Link to="/polog-bresent">
              <img src="https://brezent.su/image/cache/catalog/category/1-98x100.jpg.webp" alt="" />
              <p>Полог брезентовый</p>
            </Link>
            <Link to="/tent-oxford">
              <img src="https://brezent.su/image/cache/catalog/category/1-98x100.jpg.webp" alt="" />
              <p>Тент Оксфорд</p>
            </Link>
            <Link to="/tent-parapulin">
              <img src="https://brezent.su/image/cache/catalog/category/1-98x100.jpg.webp" alt="" />
              <p>Тент Тарпаулин</p>
            </Link>
            <Link to="/tent-pvx">
              <img src="https://brezent.su/image/cache/catalog/category/1-98x100.jpg.webp" alt="" />
              <p>Тенты ПВХ</p>
            </Link>
            <Link to="/tent-pvx">
              <img src="https://brezent.su/image/cache/catalog/category/1-98x100.jpg.webp" alt="" />
              <p>Тенты ПВХ</p>
            </Link>
            <Link to="/tent-pvx">
              <img src="https://brezent.su/image/cache/catalog/category/1-98x100.jpg.webp" alt="" />
              <p>Тенты ПВХ</p>
            </Link>
            <Link to="/zhbi">
              <img src="https://brezent.su/image/cache/catalog/category/1-98x100.jpg.webp" alt="" />
              <p>ЖБИ</p>
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Main;
