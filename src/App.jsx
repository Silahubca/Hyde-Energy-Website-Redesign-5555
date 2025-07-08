import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import OurPeople from './pages/OurPeople';
import Trading from './pages/Trading';
import Terminals from './pages/Terminals';
import Retail from './pages/Retail';
import Lubricants from './pages/Lubricants';
import LPG from './pages/LPG';
import News from './pages/News';
import Contact from './pages/Contact';
import HSE from './pages/HSE';
import Events from './pages/Events';
import Careers from './pages/Careers';
import Locations from './pages/Locations';
import DisclaimerModal from './components/common/DisclaimerModal';
import ScrollToTop from './components/common/ScrollToTop';

function App() {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  useEffect(() => {
    const disclaimerShown = localStorage.getItem('hyde-disclaimer-shown');
    if (!disclaimerShown) {
      setShowDisclaimer(true);
    }
  }, []);

  const handleDisclaimerClose = () => {
    setShowDisclaimer(false);
    localStorage.setItem('hyde-disclaimer-shown', 'true');
  };

  return (
    <Router>
      <div className="min-h-screen bg-white w-full overflow-x-hidden">
        <ScrollToTop />
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/our-people" element={<OurPeople />} />
            <Route path="/trading" element={<Trading />} />
            <Route path="/terminals" element={<Terminals />} />
            <Route path="/retail" element={<Retail />} />
            <Route path="/lubricants" element={<Lubricants />} />
            <Route path="/lpg" element={<LPG />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/hse" element={<HSE />} />
            <Route path="/events" element={<Events />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/locations" element={<Locations />} />
          </Routes>
        </AnimatePresence>
        <Footer />
        <DisclaimerModal isOpen={showDisclaimer} onClose={handleDisclaimerClose} />
      </div>
    </Router>
  );
}

export default App;