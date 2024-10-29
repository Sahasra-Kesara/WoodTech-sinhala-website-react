import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Navbar from './components/Navbar';

import WoodenDoors from './pages/WoodenDoors';
import DoorWindows from './pages/DoorWindows';
import PantryCupboards from './pages/PantryCupboards';
import Windows from './pages/Windows';
import Other from './pages/Other';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/service/wooden-doors" element={<WoodenDoors />} />
          <Route path="/service/door-windows" element={<DoorWindows />} />
          <Route path="/service/pantry-cupboards" element={<PantryCupboards />} />
          <Route path="/service/windows" element={<Windows />} />
          <Route path="/service/other" element={<Other />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
