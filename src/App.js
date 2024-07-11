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
import TentParapulin from './pages/tent-parapulin/tent-parapulin';
import TentPvx from './pages/tent-pvx/tent-pvx';
import Kolco from './pages/kolco/kolco';
import Pd from './pages/pd/pd';
import Pdk from './pages/pdk/pdk';
import Ppk from './pages/ppk/ppk';

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
          <Route path="/polog-bresent" element={<PologBresent />} />
          <Route path="/tent-oxford" element={<TentOxford />} />
          <Route path="/tent-parapulin" element={<TentParapulin />} />
          <Route path="/tent-pvx" element={<TentPvx />} />
          <Route path="/zhbi" element={<Zhbi />} />
          <Route path="/kolco" element={<Kolco />} />
          <Route path="/pd" element={<Pd />} />
          <Route path="/pdk" element={<Pdk />} />
          <Route path="/ppk" element={<Ppk />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
