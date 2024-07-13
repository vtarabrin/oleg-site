import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import './Home.css';
import React from 'react';

function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <Main />
      </div>
    </>
  );
}

export default Home;
