import './Main.css';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <div className="main">
      <div className="main-inner">
        <aside className="aside-left">
          <div className="main-tittle">
            <span className="main-tittle-inner">Меню</span>
          </div>
          <ul className="main-left">
            <li className="li-left">
              <p>
                <Link to="/contacts">Диски</Link>
              </p>
            </li>
            <li className="li-left">
              <p>
                <Link to="/contacts">Диски</Link>
              </p>
            </li>
            <li className="li-left">
              <p>
                <Link to="/contacts">Диски</Link>
              </p>
            </li>
            <li className="li-left">
              <p>
                <Link to="/contacts">Диски</Link>
              </p>
            </li>
          </ul>
        </aside>
        <aside className="aside-right">
          <div className="main-tittle">
            <span className="main-tittle-inner">Каталог товаров</span>
          </div>

          <div className="card">
            <Link to="/contacts">
              <img src="https://brezent.su/image/cache/catalog/category/1-98x100.jpg.webp" alt="" />
              <p>Диски</p>
            </Link>
            <Link to="/contacts">
              <img src="https://brezent.su/image/cache/catalog/category/1-98x100.jpg.webp" alt="" />
              <p>Диски</p>
            </Link>
            <Link to="/contacts">
              <img src="https://brezent.su/image/cache/catalog/category/1-98x100.jpg.webp" alt="" />
              <p>Диски</p>
            </Link>
            <Link to="/contacts">
              <img src="https://brezent.su/image/cache/catalog/category/1-98x100.jpg.webp" alt="" />
              <p>Диски</p>
            </Link>
            <Link to="/contacts">
              <img src="https://brezent.su/image/cache/catalog/category/1-98x100.jpg.webp" alt="" />
              <p>Диски</p>
            </Link>
            

          </div>
        </aside>
      </div>
    </div>
  );
}

export default Main;
