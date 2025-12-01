import React from 'react'
import { Routes, Route } from 'react-router-dom' // <-- Router araçları
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div>
      <Navbar /> {/* Navbar her sayfada sabit kalacak */}
      
      {/* Değişen kısım burası */}
      <Routes>
        <Route path="/" element={<Hero />} /> {/* Ana Sayfada Hero var */}
        <Route path="/projects" element={<Projects />} /> {/* /projects linkinde Projeler var */}
        <Route path="/contact" element={<Contact />} /> {/* /contact linkinde İletişim var */}
      </Routes>

    </div>
  )
}

export default App