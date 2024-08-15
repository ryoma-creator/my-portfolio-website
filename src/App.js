import React from 'react';
import Navbar from "./components/Navbar";
// import Container from './components/Container';
import Home from "./components/Home";
import About from './components/About';
import Skills from './components/Skills';


function App() {
  return (
    <div>
      <Navbar/>
 
        <Home />
        <About />
        <Skills />

    </div>
  );
}

export default App;
