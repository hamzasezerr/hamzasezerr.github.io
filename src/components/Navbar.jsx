import React from 'react'
import { Link } from 'react-router-dom' // <-- BU SATIRI EKLE

const Navbar = () => {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#1e1e1e',
    borderBottom: '1px solid #333'
  }

  return (
    <nav style={navStyle}>
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#4facfe' }}>
        <Link to="/" style={{ color: '#4facfe' }}>Hamza Sezer</Link>
      </div>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '20px' }}>
        {/* Link to="..." yapısı sayfayı yenilemeden geçiş sağlar */}
        <li><Link to="/">Ana Sayfa</Link></li>
        <li><Link to="/projects">Projeler</Link></li>
        <li><Link to="/contact">İletişim</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar