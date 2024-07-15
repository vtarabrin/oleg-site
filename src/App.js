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
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
