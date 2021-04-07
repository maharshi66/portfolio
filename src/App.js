import React, { useEffect } from 'react'
import Header from './components/Header/Header'
import HomeSection from './sections/HomeSection/HomeSection'
import AOS from "aos";
import "aos/dist/aos.css";
import AboutSection from './sections/AboutSection/AboutSection';
import FooterSection from './sections/FooterSection/FooterSection';
import EmptySection from './sections/EmptySection'
import './App.css';

function App() {

  useEffect(() => {
    //Initialize Animation On Scroll from aos library
    AOS.init();
  }, [])
  
  return (
    <div className="App">
      <Header />
      <HomeSection />
      <EmptySection />
      <AboutSection />
      <EmptySection />
      <FooterSection />
    </div>
  );
}

export default App;
