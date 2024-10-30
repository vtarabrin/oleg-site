import React from 'react';
import './kolodec-zazemleniya.css';
import Asaid from '../../components/Asaid/Asaid';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';

function KolodecZazemleniya() {
  return (
    <div className="main">
      <div className="main-inner">
        <Asaid />
        <aside className="aside-right">
          <h3 class="title-example">Колодцы заземления</h3>
          <p className="main-text-p">
            <b className="title-top">Колодцы заземления</b> - это специальные конструкции,
            предназначенные для создания заземляющих систем. Они играют важную роль в обеспечении
            безопасности электрических систем и оборудования. Вот некоторая информация о
            преимуществах, особенностях и использовании колодцев заземления:
          </p>
          <h4 className="zhbi-tittle-main">Преимущества:</h4>

          <p className="main-text-p">
            <b className="title-top">Безопасность</b> — правильно установленный и подключенный
            колодец заземления помогает защитить людей от поражения электрическим током при
            возникновении коротких замыканий или перенапряжений.
          </p>
          <p className="main-text-p">
            <b className="title-top">Защита оборудования</b> — заземление помогает предотвратить
            повреждение электрического оборудования и систем из-за статического электричества,
            молнии или других электрических неполадок.
          </p>
          <p className="main-text-p">
            <b className="title-top">Соблюдение нормативов</b> — использование колодцев заземления
            позволяет соответствовать требованиям нормативных документов и стандартов безопасности.
          </p>
          <h4 className="zhbi-tittle-main">Особенности:</h4>
          <p className="main-text-p">
            <b className="title-top">Материалы</b> — колодцы заземления могут быть изготовлены из
            различных материалов, таких как металл, бетон или специальные композитные материалы, в
            зависимости от конкретных условий эксплуатации.
          </p>
          <p className="main-text-p">
            <b className="title-top">Глубина установки</b> — для обеспечения надежного контакта с
            почвой, колодцы заземления устанавливают на определенной глубине, которая может зависеть
            от климатических условий и состава почвы.
          </p>
          <p className="main-text-p">
            <b className="title-top">Проводники</b> — в колодце заземления устанавливаются
            специальные проводники, которые обеспечивают надежное соединение с заземляющей системой.
          </p>
          <h4 className="zhbi-tittle-main">Использование:</h4>
          <p className="main-text-p">
            <b className="title-top">Промышленные объекты</b> — в промышленных предприятиях колодцы
            заземления используются для обеспечения безопасности работы электрооборудования и защиты
          </p>
          <p className="main-text-p">
            <b className="title-top">Строительство</b> — в строительстве колодцы заземления могут
            быть использованы для временной заземляющей системы при выполнении сварочных работ или
            других электротехнических операций.
          </p>
          <p className="main-text-p">
            <b className="title-top">Электростанции и подстанции</b> — в энергетических объектах
            колодцы заземления играют важную роль в обеспечении надежной работы систем
            электроснабжения.
          </p>
          <p className="main-text-p">
            <b className="title-top">Колодцы заземления</b> — являются важным элементом
            инфраструктуры для обеспечения безопасности и надежности электрических систем.
          </p>
          <div className="card">
            <Link to="/kolodec-zazem-bet">
              <img src={assets.KolodecZazemBet} alt="" />
              <p>Колодец для заземления бетонный</p>
            </Link>
            <Link to="/kolodec-zazem">
              <img src={assets.KolodecZazemBet} alt="" />
              <p>Колодец заземления</p>
            </Link>
            <Link to="/inspect-kolodec-zazem">
              <img src={assets.InspectKolodecZazem} alt="" />
              <p>Инспекционный колодец заземления</p>
            </Link>
            <Link to="/kvadrat-kolodec">
              <img src={assets.KvadratKolodec} alt="" />
              <p>Квадратный колодец (армированный d 10мм)</p>
            </Link>
            <Link to="/dniwe-kvadrat-kolodec">
              <img src={assets.DniweKvadratKolodec} alt="" />
              <p>Днище к квадратному колоду (армированное d10 мм)</p>
            </Link>
            <Link to="/kriwka-kvadrat-kolodec">
              <img src={assets.KriwkaKvadratKolodec} alt="" />
              <p>Крышка к квадратному колодцу</p>
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default KolodecZazemleniya;
