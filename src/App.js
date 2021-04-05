import React, { useEffect } from 'react'
import Header from './components/Header/Header'
import HomeSection from './sections/HomeSection'
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    //Initialize Animation On Scroll from aos library
    AOS.init();
  }, [])
  
  return (
    <div data-aos="fade-left"
      data-aos-delay="200"
      className="App">
      <Header />
      <HomeSection />
    </div>
  );
}

export default App;
