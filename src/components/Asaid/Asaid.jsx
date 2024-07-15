import './Asaid.css';
import { Link } from 'react-router-dom';
import React from 'react';

function Asaid() {
  return (
    <aside className="aside-left">
      <div className="main-tittle">
        <span className="main-tittle-inner">Меню</span>
      </div>
      <ul className="main-left">
        <li className="li-left">
          <Link to="/polog-bresent">Полог брезентовый</Link>
          <ul className="sub-menu">
            <li>
              <Link to="/polog-bresent-ogne">Полог брезентовый огнеупорный</Link>
            </li>
            <li>
              <Link to="/polog-bresent-voda">Полог брезентовый водоупорный</Link>
            </li>
            <li>
              <Link to="/polog-bresent-ytep">Полог брезентовый утепленный</Link>
            </li>
          </ul>
        </li>
        <li className="li-left">
          <Link to="/tent-tarpaulin">Тент тарпаулин</Link>
        </li>
        <li className="li-left">
          <Link to="/tent-oxford">Тент оксфорд</Link>
          <ul className="sub-menu">
            <li>
              <Link to="/tent-oxford-210pu">Тент оксфорд 210PU</Link>
            </li>
            <li>
              <Link to="/tent-oxford-420pu">Тент оксфорд 420PU +</Link>
            </li>
            <li>
              <Link to="/tent-oxford-ytep">Утепленный тент оксфорд</Link>
            </li>
          </ul>
        </li>
        <li className="li-left">
          <li>
            <Link to="/zhbi">ЖБИ кольца</Link>
            <ul className="sub-menu">
              <li>
                <Link to="/pdk">Плита днища колодца</Link>
              </li>
              <li>
                <Link to="/kolca">Кольца </Link>
              </li>
              <li>
                <Link to="/ppk">Плита перекрытия колодцев</Link>
              </li>
            </ul>
          </li>
        </li>
        <li className="li-left">
          <li>
            <Link to="/beton-plitka-kabel">Бетонная плитка для защиты кабеля</Link>
            <ul className="sub-menu">
              <li>
                <Link to="/beton-plitka-kabel2">Бетонная плитка для защиты кабеля</Link>
              </li>
              <li>
                <Link to="/beton-plitka-kabel-danger">
                  Плитка бетонная для защиты кабеля "DANGER - ОПАСНО"
                </Link>
              </li>
              <li>
                <Link to="plitka-pzk">Плитка ПЗК</Link>
              </li>
              <li>
                <Link to="plitka-ybk5">Плитка УБК 5</Link>
              </li>
            </ul>
          </li>
        </li>
        <li className="li-left">
          <li>
            <Link to="/zamer-stolbiki">Замерные столбики</Link>
          </li>
        </li>
        <li className="li-left">
          <li>
            <Link to="/kolodec-zazemleniya">Колодцы заземления</Link>
          </li>
        </li>
        <li className="li-left">
          <li>
            <Link to="/plita-betonnaya">Плиты бетонные</Link>
          </li>
        </li>
        <li className="li-left">
          <li>
            <Link to="/luki">Люки</Link>
          </li>
        </li>
        <li className="li-left">
          <li>
            <Link to="/signal-lenta">Сигнальная лента</Link>
          </li>
        </li>
        <li className="li-left">
          <li>
            <Link to="/ykazatel-tablica">Указательные таблички</Link>
          </li>
        </li>
        <li className="li-left">
          <li>
            <Link to="/bitum-neft">Битумы нефтяные</Link>
          </li>
        </li>
        <li className="li-left">
          <li>
            <Link to="/kaska-stroitel">Каски строительные</Link>
          </li>
        </li>
        <li className="li-left">
          <li>
            <Link to="/komplekt-vik">Комплект визуально-измерительного контроля ВИК</Link>
            <ul className="sub-menu">
              <li>
                <Link to="/vik-expert">ВИК эксперт НК</Link>
              </li>
              <li>
                <Link to="/vik-baza-komplekt">ВИК базовый комплект</Link>
              </li>
              <li>
                <Link to="/vik-naks">ВИК НАКС</Link>
              </li>
              <li>
                <Link to="/vik-yniversal-komplekt">ВИК универсальный комплект</Link>
              </li>
              <li>
                <Link to="/vik-expert-complect">ВИК экспертный комплект</Link>
              </li>
              <li>
                <Link to="/vik-transneft">ВИК Транснефть</Link>
              </li>
            </ul>
          </li>
        </li>
        <li className="li-left">
          <li>
            <Link to="/komplekt-wablon-svarwik">Комплект и шаблоны сварщика</Link>
            <ul className="sub-menu">
              <li>
                <Link to="/ywk1">Универсальный шаблон Красовского УШК-1</Link>
              </li>
              <li>
                <Link to="/yws2">Универсальный шаблон сварщика УШС-2</Link>
              </li>
              <li>
                <Link to="/yws3">Универсальный шаблон сварщика УШС-3</Link>
              </li>
              <li>
                <Link to="/yws4">Универсальный шаблон сварщика УШС-4</Link>
              </li>
            </ul>
          </li>
        </li>
      </ul>
    </aside>
  );
}

export default Asaid;
