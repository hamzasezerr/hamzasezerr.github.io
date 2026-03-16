import React from 'react';
import { Link } from 'react-router-dom';

const FlightPage = () => {
  return (
    <div style={{ 
      padding: '4rem 2rem', 
      backgroundColor: '#0f172a', 
      color: '#f8fafc', 
      minHeight: '100vh', 
      fontFamily: 'Segoe UI, sans-serif' 
    }}>
      {/* Geri Dönüş Butonu */}
      <Link to="/" style={{ 
        color: '#38bdf8', 
        textDecoration: 'none', 
        fontWeight: 'bold', 
        display: 'flex', 
        alignItems: 'center', 
        gap: '8px', 
        marginBottom: '2rem' 
      }}>
        ← Back to Portfolio
      </Link>
      
      {/* Başlık ve Özet */}
      <header style={{ marginBottom: '3rem', borderBottom: '1px solid #1e293b', paddingBottom: '2rem' }}>
        <h1 style={{ fontSize: '3rem', color: '#38bdf8', marginBottom: '1rem' }}>Flight Simulator Logic</h1>
        <p style={{ fontSize: '1.2rem', color: '#94a3b8', maxWidth: '800px', lineHeight: '1.6' }}>
          A high-fidelity flight physics system featuring a fully integrated HUD and comprehensive control mapping, 
          built using Unreal Engine 5's advanced aerodynamics principles.
        </p>
      </header>

      {/* Teknik Bölümler */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        
        {/* Bölüm 1: Interface & Gameplay */}
        <div style={sectionStyle}>
          <div style={textSide}>
            <h2 style={stepTitle}>1. Pilot Interface & Navigation</h2>
            <p style={stepText}>
              The simulation provides a <strong>Tail-Cam Perspective</strong> for optimal situational awareness. 
              The integrated HUD displays real-time throttle, altitude, and velocity vector data, 
              calculated directly from the actor's physics state.
            </p>
          </div>
          <div style={imageSide}>
            <img src="/assets/flight3.png" alt="Flight Gameplay and HUD" style={imgStyle} />
          </div>
        </div>

        {/* Bölüm 2: Physics Loop */}
        <div style={sectionStyle}>
          <div style={textSide}>
            <h2 style={stepTitle}>2. Physics & Aerodynamics Loop</h2>
            <p style={stepText}>
              The core logic utilizes a <strong>Monolithic Event Graph</strong> for frame-perfect physics updates. 
              By centralizing aerodynamic forces like lift, drag, and thrust, the system ensures consistent 
              behavior across varying frame rates.
            </p>
          </div>
          <div style={imageSide}>
            <img src="/assets/flight1.png" alt="Main Flight Event Graph" style={imgStyle} />
          </div>
        </div>

        {/* Bölüm 3: Input & Possession */}
        <div style={sectionStyle}>
          <div style={textSide}>
            <h2 style={stepTitle}>3. Enhanced Input Architecture</h2>
            <p style={stepText}>
              Leveraging UE5’s <strong>Enhanced Input System</strong>, the logic processes complex axis mapping 
              for pitch, roll, and yaw. Includes custom "Possession Logic" for seamless character-to-aircraft 
              transitions.
            </p>
          </div>
          <div style={imageSide}>
            <img src="/assets/flight2.png" alt="Enhanced Input Logic" style={imgStyle} />
          </div>
        </div>

      </section>

      {/* Footer Teknik Notu */}
      <footer style={{ 
        marginTop: '5rem', 
        padding: '2rem', 
        backgroundColor: '#1e293b', 
        borderRadius: '15px', 
        borderLeft: '5px solid #38bdf8' 
      }}>
        <h3 style={{ color: '#38bdf8', marginBottom: '10px' }}>Architecture Note</h3>
        <p style={{ color: '#cbd5e1', fontStyle: 'italic' }}>
          This self-contained architecture ensures all flight-critical data is localized within the Pawn, 
          optimizing performance and allowing for easy migration between different project environments.
        </p>
      </footer>
    </div>
  );
};

// --- CSS-in-JS Styles (FishingPage ile Birebir Aynı) ---
const sectionStyle = { 
  display: 'flex', 
  flexWrap: 'wrap', 
  gap: '2rem', 
  alignItems: 'center', 
  padding: '2rem', 
  backgroundColor: '#1e293b', 
  borderRadius: '20px', 
  border: '1px solid #334155' 
};

const textSide = { flex: '1', minWidth: '300px' };

const imageSide = { 
  flex: '1.5', 
  display: 'flex', 
  flexDirection: 'column', 
  gap: '15px',
  minWidth: '300px'
};

const stepTitle = { color: '#38bdf8', marginBottom: '1rem', fontSize: '1.5rem' };

const stepText = { color: '#cbd5e1', lineHeight: '1.8', fontSize: '1.1rem' };

const imgStyle = { 
  width: '100%', 
  borderRadius: '10px', 
  border: '1px solid #475569', 
  boxShadow: '0 4px 20px rgba(0,0,0,0.4)' 
};

export default FlightPage;