import React from 'react';
import Navbar from "./components/Navbar";
// import Container from './components/Container';
import Home from "./components/Home";
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
// import CoreSkills from './components/CoreSkills';


function App() {
  return (
    <div className='bg-[#000000]'>
      <Navbar/>
        <Home />
        <About />
        <Skills />
        {/* <CoreSkills/> */}
        <Work />
        <Contact />

    </div>
  );
}

export default App;
