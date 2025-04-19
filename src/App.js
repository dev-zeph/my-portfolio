import React, { useEffect } from 'react';
import Home from './pages/home';
import About from './pages/about';
import Experience from './pages/experience';
import Projects from './pages/projects';
import Contact from './pages/contact';
import Skills from './pages/skills';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <div>
      <Home />
      <About />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;