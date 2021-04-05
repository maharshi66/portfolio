import React, { useEffect } from 'react'
import Header from './components/Header/Header'
import HomeSection from './sections/HomeSection'
import AOS from "aos";
import "aos/dist/aos.css";
import AboutSection from './sections/AboutSection';

function App() {

  useEffect(() => {
    //Initialize Animation On Scroll from aos library
    AOS.init();
  }, [])
  
  return (
    <div className="App">
      <Header />
      <HomeSection />
      <AboutSection />
    </div>
  );
}

export default App;
