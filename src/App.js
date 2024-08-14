import React from 'react';
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Home from "./components/Home";


function App() {
  return (
    <div>
      <Navbar/>
      <Container>
        <Home />
      </Container>
    </div>
  );
}

export default App;
