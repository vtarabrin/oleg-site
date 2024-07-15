import React from 'react';
import './bitum-neft.css';
import { Link } from 'react-router-dom';
import Asaid from '../../components/Asaid/Asaid';

function BitumNeft() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <h3 class="title-example">Битумы нефтяные</h3>
          <h4 className="zhbi-tittle-main">Преимущества:</h4>
          <h4 className="zhbi-tittle-main-h3">Водонепроницаемость</h4>
          <p className="main-text-p">
            Битумы обладают отличной водонепроницаемостью, что делает их идеальным материалом для
            гидроизоляции различных конструкций, таких как кровли, дорожные покрытия и другие.
          </p>
          <h4 className="zhbi-tittle-main-h3">Устойчивость к химическим воздействиям</h4>
          <p className="main-text-p">
            Битумы обладают химической стойкостью, что позволяет им противостоять воздействию
            различных химических веществ, таких как кислоты, щелочи и нефтепродукты.
          </p>
          <h4 className="zhbi-tittle-main-h3">Долговечность</h4>
          <p className="main-text-p">
            Битумы являются долговечными материалами, способными выдерживать экстремальные
            температуры, ультрафиолетовое излучение и механические нагрузки, что делает их идеальным
            выбором для дорожных покрытий и других строительных проектов.
          </p>
          <h4 className="zhbi-tittle-main-h3">Удобство применения</h4>
          <p className="main-text-p">
            Битумы легко наносятся и обрабатываются, что делает их удобными в использовании при
            строительстве и ремонте различных объектов.
          </p>
          <h4 className="zhbi-tittle-main">Особенности:</h4>
          <h4 className="zhbi-tittle-main-h3">Вязкость</h4>
          <p className="main-text-p">
            Битумы обладают высокой вязкостью при комнатной температуре, что позволяет им быть
            гибкими и приспосабливаться к форме и структуре поверхности, на которую они наносятся.
          </p>
          <h4 className="zhbi-tittle-main-h3">Термопластичность</h4>
          <p className="main-text-p">
            Битумы обладают свойством термопластичности, то есть они могут быть нагреты и
            переработаны без потери своих характеристик, что делает их удобными для использования в
            различных процессах.
          </p>
          <h4 className="zhbi-tittle-main-h3">Чернота</h4>
          <p className="main-text-p">
            Битумы имеют темный цвет, что позволяет им поглощать солнечное излучение и обеспечивать
            теплоизоляцию.
          </p>
          <h4 className="zhbi-tittle-main">Использование:</h4>
          <h4 className="zhbi-tittle-main-h3">Дорожные покрытия</h4>
          <p className="main-text-p">
            Битумы широко используются для строительства и ремонта дорожных покрытий. Они образуют
            прочный и гибкий слой, способный выдерживать нагрузки транспорта и изменения
            температуры.
          </p>
          <h4 className="zhbi-tittle-main-h3">Гидроизоляция</h4>
          <p className="main-text-p">
            Битумы применяются для гидроизоляции различных конструкций, таких как кровли, подвалы,
            бассейны и другие объекты, где требуется защита от влаги.
          </p>
          <h4 className="zhbi-tittle-main-h3">Промышленные покрытия</h4>
          <p className="main-text-p">
            Битумы используются для создания защитных покрытий на металлических поверхностях, чтобы
            предотвратить коррозию и повреждения.
          </p>
          <h4 className="zhbi-tittle-main-h3">Производство материалов</h4>
          <p className="main-text-p">
            Битумы используются в производстве различных материалов, таких как кровельные материалы,
            изоляционные материалы, клеи и другие.
          </p>
          <p className="main-text-p">
            Битумы нефтяные являются важным строительным материалом, обладающим рядом преимуществ и
            широким спектром применения в различных отраслях.
          </p>
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

export default BitumNeft;
