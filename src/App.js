import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About/About';
import Contacts from './pages/Contacts/Contacts';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import Zhbi from './pages/Zhbi/Zhbi';
import PologBresent from './pages/polog-bresent/polog-bresent';
import TentOxford from './pages/tent-oxford/tent-oxford';
import TentPvx from './pages/tent-pvx/tent-pvx';
import TentTarpaulin from './pages/tent-tarpaulin/tent-tarpaulin';
import BitumNeft from './pages/bitum-neft/bitum-neft';
import KaskaStroitel from './pages/kaska-stroitel/kaska-stroitel';
import KolodecZazemleniya from './pages/kolodec-zazemleniya/kolodec-zazemleniya';
import KomplktVik from './pages/komplekt-vik/komplekt-vik';
import KomplektWablonSvarwik from './pages/komplekt-wablon-svarwik/komplekt-wablon-svarwik';
import Luki from './pages/luki/luki';
import PlitaBetonnaya from './pages/plita-betonnaya/plita-betonnaya';
import SignalLenta from './pages/signal-lenta/signal-lenta';
import YkazatelTablica from './pages/ykazatel-tablica/ykazatel-tablica';
import ZamerStolbiki from './pages/zamer-stolbiki/zamer-stolbiki';
import BetonPlitkaKabel from './pages/beton-plitka-kabel/beton-plitka-kabel';
import BetonPlitkaKabelDanger from './pages/beton-plitka-kabel-danger/beton-plitka-kabel-danger';
import BetonPlitkaKabel2 from './pages/beton-plitka-kabel2/beton-plitka-kabel2';
import Kolca from './pages/kolca/kolca';
import Pdk from './pages/pdk/pdk';
import PlitkaPZK from './pages/plitka-pzk/plitka-pzk';
import PlitkaYbk5 from './pages/plitka-ybk5/plitka-ybk5';
import PologBresentOgne from './pages/polog-bresent-ogne/polog-bresent-ogne';
import PologBresentVoda from './pages/polog-bresent-voda/polog-bresent-voda';
import PologBresentYtep from './pages/polog-bresent-ytep/polog-bresent-ytep';
import Ppk from './pages/ppk/ppk';
import TentOxford210PU from './pages/tent-oxford-210pu/tent-oxford-210pu';
import TentOxford420PU from './pages/tent-oxford-420pu/tent-oxford-420pu';
import TentOxfordYtep from './pages/tent-oxford-ytep/tent-oxford-ytep';
import VikBazaKomplekt from './pages/vik-baza-komplekt/vik-baza-komplekt';
import VikExpert from './pages/vik-expert/vik-expert';
import VikExpertComplect from './pages/vik-expert-complect/vik-expert-complect';
import VikNaks from './pages/vik-naks/vik-naks';
import VikTransneft from './pages/vik-transneft/vik-transneft';
import VikYniversalKomplekt from './pages/vik-yniversal-komplekt/vik-yniversal-komplekt';
import Ywk1 from './pages/ywk1/ywk1';
import Yws2 from './pages/yws2/yws2';
import Yws3 from './pages/yws3/yws3';
import Yws4 from './pages/yws4/yws4';
import KomplektVik from './pages/komplekt-vik/komplekt-vik';
import TentTarpaulin120 from './pages/tent-tarpaulin120/tent-tarpaulin120';
import TentTarpaulin180 from './pages/tent-tarpaulin180/tent-tarpaulin180';
import TentTarpaulin70 from './pages/tent-tarpaulin70/tent-tarpaulin70';
import TentOxford210PU4x6 from './pages/tent-oxford-210pu/tent-oxford-210pu-4x6';
import TentOxford210PU6x8 from './pages/tent-oxford-210pu/tent-oxford-210pu-6x8';
import TentOxford210PU5x10 from './pages/tent-oxford-210pu/tent-oxford-210pu-5x10';
import TentOxford210PU3x5 from './pages/tent-oxford-210pu/tent-oxford-210pu-3x5';
import TentOxford210PU25x3 from './pages/tent-oxford-210pu/tent-oxford-210pu-25x3';
import TentOxford420PU27x54 from './pages/tent-oxford-420pu/tent-oxford-420pu-27x54';
import TentOxford420PU4x6 from './pages/tent-oxford-420pu/tent-oxford-420pu-4x6';
import TentOxford420PU5x10 from './pages/tent-oxford-420pu/tent-oxford-420pu-5x10';
import TentOxford420PU6x8 from './pages/tent-oxford-420pu/tent-oxford-420pu-6x8';
import TentOxford420PU25x3 from './pages/tent-oxford-420pu/tent-oxford-420pu-25x3';
import TentOxford420PU27x45 from './pages/tent-oxford-420pu/tent-oxford-420pu-27x45';
import TentOxford420PU27x58 from './pages/tent-oxford-420pu/tent-oxford-420pu-27x58';
import TentOxford420PU27x68 from './pages/tent-oxford-420pu/tent-oxford-420pu-27x68';
import TentOxford420PU3x5 from './pages/tent-oxford-420pu/tent-oxford-420pu-3x5';
import TentOxfordYtep4203x5 from './pages/tent-oxford-ytep/tent-oxford-ytep-420-3x5';
import TentOxfordYtep4204x6 from './pages/tent-oxford-ytep/tent-oxford-ytep-420-4x6';
import TentOxfordYtep4206x8 from './pages/tent-oxford-ytep/tent-oxford-ytep-420-6x8';
import TentOxfordYtep42025x3 from './pages/tent-oxford-ytep/tent-oxford-ytep-420-25x3';
import TentOxfordYtep2103x5 from './pages/tent-oxford-ytep/tent-oxford-ytep-210-3x5';
import TentOxfordYtep2106x8 from './pages/tent-oxford-ytep/tent-oxford-ytep-210-6x8';
import TentTarpaulin704x6 from './pages/tent-tarpaulin70/tent-tarpaulin70-4x6';
import TentTarpaulin706x8 from './pages/tent-tarpaulin70/tent-tarpaulin70-6x8';
import TentTarpaulin706x10 from './pages/tent-tarpaulin70/tent-tarpaulin70-6x10';
import TentTarpaulin708x10 from './pages/tent-tarpaulin70/tent-tarpaulin70-8x10';
import TentTarpaulin708x12 from './pages/tent-tarpaulin70/tent-tarpaulin70-8x12';
import TentTarpaulin7010x12 from './pages/tent-tarpaulin70/tent-tarpaulin70-10x12';
import TentTarpaulin7010x15 from './pages/tent-tarpaulin70/tent-tarpaulin70-10x15';
import TentTarpaulin7015x20 from './pages/tent-tarpaulin70/tent-tarpaulin70-15x20';
import TentTarpaulin1204x6 from './pages/tent-tarpaulin120/tent-tarpaulin120-4x6';
import TentTarpaulin1204x8 from './pages/tent-tarpaulin120/tent-tarpaulin120-4x8';
import TentTarpaulin1205x6 from './pages/tent-tarpaulin120/tent-tarpaulin120-5x6';
import TentTarpaulin1206x8 from './pages/tent-tarpaulin120/tent-tarpaulin120-6x8';
import TentTarpaulin1206x10 from './pages/tent-tarpaulin120/tent-tarpaulin120-6x10';
import TentTarpaulin1208x10 from './pages/tent-tarpaulin120/tent-tarpaulin120-8x10';
import TentTarpaulin12010x12 from './pages/tent-tarpaulin120/tent-tarpaulin120-10x12';
import TentTarpaulin12010x15 from './pages/tent-tarpaulin120/tent-tarpaulin120-10x15';
import TentTarpaulin12010x20 from './pages/tent-tarpaulin120/tent-tarpaulin120-10x20';
import TentTarpaulin12015x15 from './pages/tent-tarpaulin120/tent-tarpaulin120-15x15';
import TentTarpaulin12015x20 from './pages/tent-tarpaulin120/tent-tarpaulin120-15x20';
import TentTarpaulin12020x20 from './pages/tent-tarpaulin120/tent-tarpaulin120-20x20';
import TentTarpaulin1802x3 from './pages/tent-tarpaulin180/tent-tarpaulin180-2x3';
import TentTarpaulin1803x4 from './pages/tent-tarpaulin180/tent-tarpaulin180-3x4';
import TentTarpaulin1803x5 from './pages/tent-tarpaulin180/tent-tarpaulin180-3x5';
import TentTarpaulin1803x6 from './pages/tent-tarpaulin180/tent-tarpaulin180-3x6';
import TentTarpaulin1804x6 from './pages/tent-tarpaulin180/tent-tarpaulin180-4x6';
import TentTarpaulin18010x12 from './pages/tent-tarpaulin180/tent-tarpaulin180-10x12';
import TentTarpaulin18010x15 from './pages/tent-tarpaulin180/tent-tarpaulin180-10x15';
import TentTarpaulin18010x20 from './pages/tent-tarpaulin180/tent-tarpaulin180-10x20';
import TentTarpaulin18015x15 from './pages/tent-tarpaulin180/tent-tarpaulin180-15x15';
import TentTarpaulin18020x20 from './pages/tent-tarpaulin180/tent-tarpaulin180-20x20';
import TentTarpaulin18020x30 from './pages/tent-tarpaulin180/tent-tarpaulin180-20x30';
import TentTarpaulin18015x20 from './pages/tent-tarpaulin180/tent-tarpaulin180-15x20';
import PologBresentOgne3x5 from './pages/polog-bresent-ogne/polog-bresent-ogne-3x5';
import PologBresentOgne3x6 from './pages/polog-bresent-ogne/polog-bresent-ogne-3x6';
import PologBresentOgne4x6 from './pages/polog-bresent-ogne/polog-bresent-ogne-4x6';
import PologBresentOgne5x10 from './pages/polog-bresent-ogne/polog-bresent-ogne-5x10';
import PologBresentOgne6x8 from './pages/polog-bresent-ogne/polog-bresent-ogne-6x8';
import PologBresentOgne25x3 from './pages/polog-bresent-ogne/polog-bresent-ogne-25x3';
import PologBresentOgne27x45 from './pages/polog-bresent-ogne/polog-bresent-ogne-27x45';
import PologBresentOgne27x54 from './pages/polog-bresent-ogne/polog-bresent-ogne-27x54';
import PologBresentOgne27x58 from './pages/polog-bresent-ogne/polog-bresent-ogne-27x58';
import PologBresentOgne27x68 from './pages/polog-bresent-ogne/polog-bresent-ogne-27x68';
import PologBresentVoda3x5 from './pages/polog-bresent-voda/polog-bresent-voda-3x5';
import PologBresentVoda4x6 from './pages/polog-bresent-voda/polog-bresent-voda-4x6';
import PologBresentVoda5x10 from './pages/polog-bresent-voda/polog-bresent-voda-5x10';
import PologBresentVoda6x8 from './pages/polog-bresent-voda/polog-bresent-voda-6x8';
import PologBresentVoda27x45 from './pages/polog-bresent-voda/polog-bresent-voda-27x45';
import PologBresentVoda27x68 from './pages/polog-bresent-voda/polog-bresent-voda-27x68';
import PologBresentYtep3x5 from './pages/polog-bresent-ytep/polog-bresent-ytep-3x5';
import PologBresentYtep4x6 from './pages/polog-bresent-ytep/polog-bresent-ytep-4x6';
import PologBresentYtep5x10 from './pages/polog-bresent-ytep/polog-bresent-ytep-5x10';
import PologBresentYtep6x8 from './pages/polog-bresent-ytep/polog-bresent-ytep-6x8';
import PologBresentYtep10x10 from './pages/polog-bresent-ytep/polog-bresent-ytep-10x10';
import KolcaOpornoe6 from './pages/kolca/kolca-opornoe-6';
import KolcaStenovie73 from './pages/kolca/kolca-stenovie-73';
import KolcaStenovie103 from './pages/kolca/kolca-stenovie-103';
import KolcaStenovie106 from './pages/kolca/kolca-stenovie-106';
import KolcaStenovie153 from './pages/kolca/kolca-stenovie-153';
import KolcaStenovie156 from './pages/kolca/kolca-stenovie-156';
import KolcaStenovie159 from './pages/kolca/kolca-stenovie-159';
import KolcaStenovie203 from './pages/kolca/kolca-stenovie-203';
import KolcaStenovie206 from './pages/kolca/kolca-stenovie-206';
import KolcaStenovie209 from './pages/kolca/kolca-stenovie-209';

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/zhbi" element={<Zhbi />} />
          <Route path="/polog-bresent" element={<PologBresent />} />
          <Route path="/tent-oxford" element={<TentOxford />} />
          <Route path="/tent-tarpaulin" element={<TentTarpaulin />} />
          <Route path="/tent-tarpaulin120" element={<TentTarpaulin120 />} />
          <Route path="/tent-tarpaulin180" element={<TentTarpaulin180 />} />
          <Route path="/tent-tarpaulin70" element={<TentTarpaulin70 />} />
          <Route path="/tent-pvx" element={<TentPvx />} />
          <Route path="/bitum-neft" element={<BitumNeft />} />
          <Route path="/kaska-stroitel" element={<KaskaStroitel />} />
          <Route path="/kolodec-zazemleniya" element={<KolodecZazemleniya />} />
          <Route path="/komplekt-vik" element={<KomplktVik />} />
          <Route path="/komplekt-wablon-svarwik" element={<KomplektWablonSvarwik />} />
          <Route path="/luki" element={<Luki />} />
          <Route path="/plita-betonnaya" element={<PlitaBetonnaya />} />
          <Route path="/signal-lenta" element={<SignalLenta />} />
          <Route path="/ykazatel-tablica" element={<YkazatelTablica />} />
          <Route path="/zamer-stolbiki" element={<ZamerStolbiki />} />
          <Route path="/beton-plitka-kabel" element={<BetonPlitkaKabel />} />
          <Route path="/beton-plitka-kabel-danger" element={<BetonPlitkaKabelDanger />} />
          <Route path="/beton-plitka-kabel2" element={<BetonPlitkaKabel2 />} />
          <Route path="/bitum-neft" element={<BitumNeft />} />
          <Route path="/kolca" element={<Kolca />} />
          <Route path="/komplekt-vik" element={<KomplektVik />} />
          <Route path="/komplekt-wablon-svarwik" element={<KomplektWablonSvarwik />} />
          <Route path="/pdk" element={<Pdk />} />
          <Route path="/plitka-pzk" element={<PlitkaPZK />} />
          <Route path="/plitka-ybk5" element={<PlitkaYbk5 />} />
          <Route path="/polog-bresent-ogne" element={<PologBresentOgne />} />
          <Route path="/polog-bresent-voda" element={<PologBresentVoda />} />
          <Route path="/polog-bresent-ytep" element={<PologBresentYtep />} />
          <Route path="/ppk" element={<Ppk />} />
          <Route path="/tent-oxford-210pu" element={<TentOxford210PU />} />
          <Route path="/tent-oxford-420pu" element={<TentOxford420PU />} />
          <Route path="/tent-oxford-ytep" element={<TentOxfordYtep />} />
          <Route path="/vik-baza-komplekt" element={<VikBazaKomplekt />} />
          <Route path="/vik-expert-complect" element={<VikExpert />} />
          <Route path="/vik-expert-complect" element={<VikExpertComplect />} />
          <Route path="/vik-naks" element={<VikNaks />} />
          <Route path="/vik-transneft" element={<VikTransneft />} />
          <Route path="/vik-yniversal-komplekt" element={<VikYniversalKomplekt />} />
          <Route path="/ywk1" element={<Ywk1 />} />
          <Route path="/yws2" element={<Yws2 />} />
          <Route path="/yws3" element={<Yws3 />} />
          <Route path="/yws4" element={<Yws4 />} />
          <Route path="/tent-oxford-210pu-4x6" element={<TentOxford210PU4x6 />} />
          <Route path="/tent-oxford-210pu-25x3" element={<TentOxford210PU25x3 />} />
          <Route path="/tent-oxford-210pu-3x5" element={<TentOxford210PU3x5 />} />
          <Route path="/tent-oxford-210pu-5x10" element={<TentOxford210PU5x10 />} />
          <Route path="/tent-oxford-210pu-6x8" element={<TentOxford210PU6x8 />} />
          <Route path="/tent-oxford-420pu-3x5" element={<TentOxford420PU3x5 />} />
          <Route path="/tent-oxford-420pu-27x54" element={<TentOxford420PU27x54 />} />
          <Route path="/tent-oxford-420pu-4x6" element={<TentOxford420PU4x6 />} />
          <Route path="/tent-oxford-420pu-5x10" element={<TentOxford420PU5x10 />} />
          <Route path="/tent-oxford-420pu-6x8" element={<TentOxford420PU6x8 />} />
          <Route path="/tent-oxford-420pu-25x3" element={<TentOxford420PU25x3 />} />
          <Route path="/tent-oxford-420pu-27x45" element={<TentOxford420PU27x45 />} />
          <Route path="/tent-oxford-420pu-27x58" element={<TentOxford420PU27x58 />} />
          <Route path="/tent-oxford-420pu-27x68" element={<TentOxford420PU27x68 />} />
          <Route path="/tent-oxford-ytep-210-3x5" element={<TentOxfordYtep2103x5 />} />
          <Route path="/tent-oxford-ytep-210-6x8" element={<TentOxfordYtep2106x8 />} />
          <Route path="/tent-oxford-ytep-420-3x5" element={<TentOxfordYtep4203x5 />} />
          <Route path="/tent-oxford-ytep-420-4x6" element={<TentOxfordYtep4204x6 />} />
          <Route path="/tent-oxford-ytep-420-6x8" element={<TentOxfordYtep4206x8 />} />
          <Route path="/tent-oxford-ytep-420-25x3" element={<TentOxfordYtep42025x3 />} />
          <Route path="/tent-tarpaulin70-4x6" element={<TentTarpaulin704x6 />} />
          <Route path="/tent-tarpaulin70-6x8" element={<TentTarpaulin706x8 />} />
          <Route path="/tent-tarpaulin70-6x10" element={<TentTarpaulin706x10 />} />
          <Route path="/tent-tarpaulin70-8x10" element={<TentTarpaulin708x10 />} />
          <Route path="/tent-tarpaulin70-8x12" element={<TentTarpaulin708x12 />} />
          <Route path="/tent-tarpaulin70-10x12" element={<TentTarpaulin7010x12 />} />
          <Route path="/tent-tarpaulin70-10x15" element={<TentTarpaulin7010x15 />} />
          <Route path="/tent-tarpaulin70-15x20" element={<TentTarpaulin7015x20 />} />
          <Route path="/tent-tarpaulin120-4x6" element={<TentTarpaulin1204x6 />} />
          <Route path="/tent-tarpaulin120-4x8" element={<TentTarpaulin1204x8 />} />
          <Route path="/tent-tarpaulin120-5x6" element={<TentTarpaulin1205x6 />} />
          <Route path="/tent-tarpaulin120-6x8" element={<TentTarpaulin1206x8 />} />
          <Route path="/tent-tarpaulin120-6x10" element={<TentTarpaulin1206x10 />} />
          <Route path="/tent-tarpaulin120-8x10" element={<TentTarpaulin1208x10 />} />
          <Route path="/tent-tarpaulin120-10x12" element={<TentTarpaulin12010x12 />} />
          <Route path="/tent-tarpaulin120-10x15" element={<TentTarpaulin12010x15 />} />
          <Route path="/tent-tarpaulin120-10x20" element={<TentTarpaulin12010x20 />} />
          <Route path="/tent-tarpaulin120-15x15" element={<TentTarpaulin12015x15 />} />
          <Route path="/tent-tarpaulin120-15x20" element={<TentTarpaulin12015x20 />} />
          <Route path="/tent-tarpaulin120-20x20" element={<TentTarpaulin12020x20 />} />
          <Route path="/tent-tarpaulin180-2x3" element={<TentTarpaulin1802x3 />} />
          <Route path="/tent-tarpaulin180-3x4" element={<TentTarpaulin1803x4 />} />
          <Route path="/tent-tarpaulin180-3x5" element={<TentTarpaulin1803x5 />} />
          <Route path="/tent-tarpaulin180-3x6" element={<TentTarpaulin1803x6 />} />
          <Route path="/tent-tarpaulin180-4x6" element={<TentTarpaulin1804x6 />} />
          <Route path="/tent-tarpaulin180-10x12" element={<TentTarpaulin18010x12 />} />
          <Route path="/tent-tarpaulin180-10x15" element={<TentTarpaulin18010x15 />} />
          <Route path="/tent-tarpaulin180-10x20" element={<TentTarpaulin18010x20 />} />
          <Route path="/tent-tarpaulin180-15x15" element={<TentTarpaulin18015x15 />} />
          <Route path="/tent-tarpaulin180-20x20" element={<TentTarpaulin18020x20 />} />
          <Route path="/tent-tarpaulin180-20x30" element={<TentTarpaulin18020x30 />} />
          <Route path="/tent-tarpaulin180-15x20" element={<TentTarpaulin18015x20 />} />
          <Route path="/polog-bresent-ogne-3x5" element={<PologBresentOgne3x5 />} />
          <Route path="/polog-bresent-ogne-3x6" element={<PologBresentOgne3x6 />} />
          <Route path="/polog-bresent-ogne-4x6" element={<PologBresentOgne4x6 />} />
          <Route path="/polog-bresent-ogne-5x10" element={<PologBresentOgne5x10 />} />
          <Route path="/polog-bresent-ogne-6x8" element={<PologBresentOgne6x8 />} />
          <Route path="/polog-bresent-ogne-25x3" element={<PologBresentOgne25x3 />} />
          <Route path="/polog-bresent-ogne-27x45" element={<PologBresentOgne27x45 />} />
          <Route path="/polog-bresent-ogne-27x54" element={<PologBresentOgne27x54 />} />
          <Route path="/polog-bresent-ogne-27x58" element={<PologBresentOgne27x58 />} />
          <Route path="/polog-bresent-ogne-27x68" element={<PologBresentOgne27x68 />} />
          <Route path="/polog-bresent-voda-3x5" element={<PologBresentVoda3x5 />} />
          <Route path="/polog-bresent-voda-4x6" element={<PologBresentVoda4x6 />} />
          <Route path="/polog-bresent-voda-5x10" element={<PologBresentVoda5x10 />} />
          <Route path="/polog-bresent-voda-6x8" element={<PologBresentVoda6x8 />} />
          <Route path="/polog-bresent-voda-27x45" element={<PologBresentVoda27x45 />} />
          <Route path="/polog-bresent-voda-27x68" element={<PologBresentVoda27x68 />} />
          <Route path="/polog-bresent-ytep-3x5" element={<PologBresentYtep3x5 />} />
          <Route path="/polog-bresent-ytep-4x6" element={<PologBresentYtep4x6 />} />
          <Route path="/polog-bresent-ytep-5x10" element={<PologBresentYtep5x10 />} />
          <Route path="/polog-bresent-ytep-6x8" element={<PologBresentYtep6x8 />} />
          <Route path="/polog-bresent-ytep-10x10" element={<PologBresentYtep10x10 />} />
          <Route path="/kolca-opornoe-6" element={<KolcaOpornoe6 />} />
          <Route path="/kolca-stenovie-73" element={<KolcaStenovie73 />} />
          <Route path="/kolca-stenovie-103" element={<KolcaStenovie103 />} />
          <Route path="/kolca-stenovie-106" element={<KolcaStenovie106 />} />
          <Route path="/kolca-stenovie-153" element={<KolcaStenovie153 />} />
          <Route path="/kolca-stenovie-156" element={<KolcaStenovie156 />} />
          <Route path="/kolca-stenovie-159" element={<KolcaStenovie159 />} />
          <Route path="/kolca-stenovie-203" element={<KolcaStenovie203 />} />
          <Route path="/kolca-stenovie-206" element={<KolcaStenovie206 />} />
          <Route path="/kolca-stenovie-209" element={<KolcaStenovie209 />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
