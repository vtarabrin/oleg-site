import React from 'react';
import './bitum-neft.css';
import { Link } from 'react-router-dom';
import Asaid from '../../components/Asaid/Asaid';
import { assets } from '../../assets/assets';

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
          <p className="main-text-p">
            <b className="title-top"> Устойчивость к химическим воздействиям </b> - битумы обладают
            химической стойкостью, что позволяет им противостоять воздействию различных химических
            веществ, таких как кислоты, щелочи и нефтепродукты.
          </p>
          <p className="main-text-p">
            <b className="title-top"> Долговечность </b>- юитумы являются долговечными материалами,
            способными выдерживать экстремальные температуры, ультрафиолетовое излучение и
            механические нагрузки, что делает их идеальным выбором для дорожных покрытий и других
            строительных проектов.
          </p>
          <p className="main-text-p">
            <b className="title-top"> Удобство применения </b> - битумы легко наносятся и
            обрабатываются, что делает их удобными в использовании при строительстве и ремонте
            различных объектов.
          </p>
          <h4 className="zhbi-tittle-main">Особенности:</h4>
          <p className="main-text-p">
            <b className="title-top"> Вязкость </b> - битумы обладают высокой вязкостью при
            комнатной температуре, что позволяет им быть гибкими и приспосабливаться к форме и
            структуре поверхности, на которую они наносятся.
          </p>
          <p className="main-text-p">
            <b className="title-top"> Термопластичность </b> - битумы обладают свойством
            термопластичности, то есть они могут быть нагреты и переработаны без потери своих
            характеристик, что делает их удобными для использования в различных процессах.
          </p>
          <p className="main-text-p">
            <b className="title-top"> Чернота </b> - битумы имеют темный цвет, что позволяет им
            поглощать солнечное излучение и обеспечивать теплоизоляцию.
          </p>
          <h4 className="zhbi-tittle-main">Использование:</h4>
          <p className="main-text-p">
            <b className="title-top"> Дорожные покрытия </b> - битумы широко используются для
            строительства и ремонта дорожных покрытий. Они образуют прочный и гибкий слой, способный
            выдерживать нагрузки транспорта и изменения температуры.
          </p>
          <p className="main-text-p">
            <b className="title-top">Гидроизоляция </b> - битумы применяются для гидроизоляции
            различных конструкций, таких как кровли, подвалы, бассейны и другие объекты, где
            требуется защита от влаги.
          </p>
          <p className="main-text-p">
            <b className="title-top"> Промышленные покрытия </b> - битумы используются для создания
            защитных покрытий на металлических поверхностях, чтобы предотвратить коррозию и
            повреждения.
          </p>
          <p className="main-text-p">
            <b className="title-top"> Производство материалов </b> - битумы используются в
            производстве различных материалов, таких как кровельные материалы, изоляционные
            материалы, клеи и другие.
          </p>
          <p className="main-text-p">
            <b className="title-top"> Битумы нефтяные </b> являются важным строительным материалом,
            обладающим рядом преимуществ и широким спектром применения в различных отраслях.
          </p>
          <div className="card">
            <Link to="/bitum-mg40x70">
              <img src={assets.BitumNeft} alt="" />
              <p>Битум МГ 40/70</p>
            </Link>
            <Link to="/bitum-mgo70x130">
              <img src={assets.BitumNeft} alt="" />
              <p>Битум МГО 70/130</p>
            </Link>
            <Link to="/bitum-mgo130x200">
              <img src={assets.BitumNeft} alt="" />
              <p>Битум МГО 130/200</p>
            </Link>
            <Link to="/bitum-mgo40x70">
              <img src={assets.BitumNeft} alt="" />
              <p>Битум МГО 40/70</p>
            </Link>
            <Link to="/bitum-mg70x130">
              <img src={assets.BitumNeft} alt="" />
              <p>Битум МГ 70/130</p>
            </Link>
            <Link to="/bitum-mg130x200">
              <img src={assets.BitumNeft} alt="" />
              <p>Битум МГ 130/200</p>
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default BitumNeft;
