import React from 'react';
import Navbar from './components/Navbar/Navbar'; // Adjust the path as necessary
import Home from './components/Home/Home';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

function App() {
  
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
