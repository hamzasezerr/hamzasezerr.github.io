import React from 'react'
import { Routes, Route } from 'react-router-dom' // <-- Router araçları
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'
import FishingPage from './pages/FishingPage';
import FlightPage from './pages/FlightPage';
import LockOnPage from './pages/LockOnPage';

function App() {
  return (
    <div>
      <Navbar /> {/* Navbar her sayfada sabit kalacak */}
      
      {/* Değişen kısım burası */}
      <Routes>
        <Route path="/" element={<Hero />} /> {/* Ana Sayfada Hero var */}
        <Route path="/projects" element={<Projects />} /> {/* /projects linkinde Projeler var */}
        <Route path="/contact" element={<Contact />} /> {/* /contact linkinde İletişim var */}
        <Route path="/fishing-system" element={<FishingPage />} />
        <Route path="/flight-system" element={<FlightPage />} />
        <Route path="/lock-on-component" element={<LockOnPage />} />
      </Routes>

    </div>
  )
}

export default App