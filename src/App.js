import React from 'react';
import Navbar from "./components/Navbar";
import Container from './components/Container';
import Home from "./components/Home";
import About from './components/About';


function App() {
  return (
    <div>
      <Navbar/>
      <Container>
        <Home />
        <About />
      </Container>
    </div>
  );
}

export default App;
