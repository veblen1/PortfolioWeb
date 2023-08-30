import React, { useState } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './App.css';

import HomeSection from './component/Home.tsx';
import WebSection from './component/Web.tsx';
import MobileSection from './component/Mobile.tsx';
import AlgorithmSection from './component/Algorithm.tsx';

const Home: React.FC = () => {

  const [section, setSection] = useState('home');

  const handleSectionChange = (newSection) => {
    setSection(newSection);
  };


  return (
    <div className="App">
      <header className="Header">
        <img src="/image/android.png" alt="Android Logo" className="android-logo" />
        <p style={{ marginRight: "130px" }}>Android Developer &nbsp; 박해종</p>
        <p onClick={() => handleSectionChange('home')}>Home</p>
        <p onClick={() => handleSectionChange('web')}>Web</p>
        <p onClick={() => handleSectionChange('mobile')}>Mobile</p>
        {/* <p onClick={() => handleSectionChange('algorithm')}>Algorithm</p> */}
      </header>
      <hr/>
        {section === 'home' && <HomeSection />}
        {section === 'web' && <WebSection />}
        {section === 'mobile' && <MobileSection />}
        {section === 'algorithm' && <AlgorithmSection />}
    </div>
  );
}

export default Home;
