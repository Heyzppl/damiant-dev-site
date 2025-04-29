import './App.scss'
import { Routes, Route, useLocation } from 'react-router-dom'
import { tsParticles } from "https://cdn.jsdelivr.net/npm/@tsparticles/engine@3.1.0/+esm";
import { loadAll } from "https://cdn.jsdelivr.net/npm/@tsparticles/all@3.1.0/+esm";
import { useEffect } from 'react';
import Home from './containers/home';
import About from './containers/about';
import Contact from './containers/contact';
import Portfolio from './containers/portfolio';
import Resume from './containers/resume';
import Skills from './containers/skills';
import Navbar from './components/navBar';
import particlesConfigs from './utils/particlesConfig';

function App() {
  async function loadParticles(options) {
    await loadAll(tsParticles);
  
    await tsParticles.load({ id: "tsparticles", options });
  }

  const location = useLocation();
  console.log(location);

  const renderParticleJsInHomePage = location.pathname === "/";

  useEffect(() => {
    if (renderParticleJsInHomePage) {
      loadParticles(particlesConfigs);
    } else {
      tsParticles.load({ id: "tsparticles", options: {} });
    }
  }, [renderParticleJsInHomePage]);

  return (
    <div className="App">
      {renderParticleJsInHomePage && (
        <div id="tsparticles"></div>
      )}
      {/* Navbar */}
      <Navbar/>

      {/* Main Page Content */}

      <div className='App__main-page-content'>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/skills' element={<Skills />} />
        </Routes>
      </div>
      


    </div>
  );
}

export default App; 
