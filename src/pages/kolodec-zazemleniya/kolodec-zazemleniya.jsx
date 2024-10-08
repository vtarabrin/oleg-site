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
            Колодцы заземления - это специальные конструкции, предназначенные для создания
            заземляющих систем. Они играют важную роль в обеспечении безопасности электрических
            систем и оборудования. Вот некоторая информация о преимуществах, особенностях и
            использовании колодцев заземления:
          </p>
          <h4 className="zhbi-tittle-main">Преимущества:</h4>
          <h4 className="zhbi-tittle-main-h3">Безопасность</h4>
          <p className="main-text-p">
            Правильно установленный и подключенный колодец заземления помогает защитить людей от
            поражения электрическим током при возникновении коротких замыканий или перенапряжений.
          </p>
          <h4 className="zhbi-tittle-main-h3">Защита оборудования</h4>
          <p className="main-text-p">
            Заземление помогает предотвратить повреждение электрического оборудования и систем из-за
            статического электричества, молнии или других электрических неполадок.
          </p>
          <h4 className="zhbi-tittle-main-h3">Соблюдение нормативов</h4>
          <p className="main-text-p">
            Использование колодцев заземления позволяет соответствовать требованиям нормативных
            документов и стандартов безопасности.
          </p>
          <h4 className="zhbi-tittle-main">Особенности:</h4>
          <h4 className="zhbi-tittle-main-h3">Материалы</h4>
          <p className="main-text-p">
            Колодцы заземления могут быть изготовлены из различных материалов, таких как металл,
            бетон или специальные композитные материалы, в зависимости от конкретных условий
            эксплуатации.
          </p>
          <h4 className="zhbi-tittle-main-h3">Глубина установки</h4>
          <p className="main-text-p">
            Для обеспечения надежного контакта с почвой, колодцы заземления устанавливают на
            определенной глубине, которая может зависеть от климатических условий и состава почвы.
          </p>
          <h4 className="zhbi-tittle-main-h3">Проводники</h4>
          <p className="main-text-p">
            В колодце заземления устанавливаются специальные проводники, которые обеспечивают
            надежное соединение с заземляющей системой.
          </p>
          <h4 className="zhbi-tittle-main">Использование:</h4>
          <h4 className="zhbi-tittle-main-h3">Промышленные объекты</h4>
          <p className="main-text-p">
            в промышленных предприятиях колодцы заземления используются для обеспечения безопасности
            работы электрооборудования и защиты
          </p>
          <h4 className="zhbi-tittle-main-h3">Строительство</h4>
          <p className="main-text-p">
            в строительстве колодцы заземления могут быть использованы для временной заземляющей
            системы при выполнении сварочных работ или других электротехнических операций.
          </p>
          <h4 className="zhbi-tittle-main-h3">Электростанции и подстанции</h4>
          <p className="main-text-p">
            в энергетических объектах колодцы заземления играют важную роль в обеспечении надежной
            работы систем электроснабжения.
          </p>
          <p className="main-text-p">
            Колодцы заземления являются важным элементом инфраструктуры для обеспечения безопасности
            и надежности электрических систем.
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
