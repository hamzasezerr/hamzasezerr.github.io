import React from 'react';
import { Link } from 'react-router-dom';

const FlightPage = () => {
  return (
    <div style={{ padding: '4rem 2rem', backgroundColor: '#0f172a', color: '#f8fafc', minHeight: '100vh', fontFamily: 'Segoe UI, sans-serif' }}>
      <Link to="/" style={{ color: '#38bdf8', textDecoration: 'none', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2rem' }}>
        ← Back to Portfolio
      </Link>
      
      <header style={{ marginBottom: '3rem', borderBottom: '1px solid #1e293b', paddingBottom: '2rem' }}>
        <h1 style={{ fontSize: '3rem', color: '#38bdf8' }}>Flight Simulator Logic</h1>
        <p style={{ fontSize: '1.2rem', color: '#94a3b8' }}>
          A high-fidelity flight physics system featuring a fully integrated HUD and comprehensive control mapping.
        </p>
      </header>

      <section style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        
        {/* YENİ GÖRSEL: Gameplay & UI */}
        <div style={sectionStyle}>
          <div style={textSide}>
            <h2 style={stepTitle}>Pilot Interface & Controls</h2>
            <p style={stepText}>
              The simulation provides a <strong>Tail-Cam Perspective</strong> for optimal situational awareness. 
              The control scheme is mapped to standard aviation keys (Shift/Space for Pitch, A/D for Roll), 
              allowing for intuitive maneuvering. The integrated HUD displays real-time throttle and 
              attitude data directly to the user.
            </p>
          </div>
          <div style={imageSide}>
            <img src="/assets/flight3.png" alt="Flight Gameplay and Controls" style={imgStyle} />
          </div>
        </div>

        {/* Teknik Görsel 1: Blueprint Logic */}
        <div style={sectionStyle}>
          <div style={textSide}>
            <h2 style={stepTitle}>Main Flight & Physics Loop</h2>
            <p style={stepText}>
              The core flight logic utilizes a <strong>Monolithic Event Graph</strong> to handle real-time physics updates. 
              By centralizing calculations, the system ensures frame-perfect synchronization between 
              player inputs and aerodynamic transformations.
            </p>
          </div>
          <div style={imageSide}>
            <img src="/assets/flight1.png" alt="Main Flight Event Graph" style={imgStyle} />
          </div>
        </div>

        {/* Teknik Görsel 2: Input Logic */}
        <div style={sectionStyle}>
          <div style={textSide}>
            <h2 style={stepTitle}>Enhanced Input & Possession</h2>
            <p style={stepText}>
              Leveraging UE5’s <strong>Enhanced Input System</strong>, the logic processes high-resolution 
              axis data. The system includes "Possession Logic" for seamless transitions from 
              ground character to flight pilot.
            </p>
          </div>
          <div style={imageSide}>
            <img src="/assets/flight2.png" alt="Enhanced Input Logic" style={imgStyle} />
          </div>
        </div>

      </section>

      <footer style={{ marginTop: '5rem', padding: '2rem', backgroundColor: '#1e293b', borderRadius: '15px', borderLeft: '5px solid #38bdf8' }}>
        <h3 style={{ color: '#38bdf8' }}>Architecture Note</h3>
        <p style={{ color: '#cbd5e1', fontStyle: 'italic' }}>
          This self-contained architecture ensures all flight-critical data is localized, 
          optimizing performance during high-speed aerial maneuvers.
        </p>
      </footer>
    </div>
  );
};

// --- Stiller ---
const sectionStyle = { display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center', padding: '2rem', backgroundColor: '#1e293b', borderRadius: '20px', border: '1px solid #334155' };
const textSide = { flex: '1', minWidth: '300px' };
const imageSide = { flex: '1.5', display: 'flex', flexDirection: 'column', gap: '15px' };
const stepTitle = { color: '#38bdf8', marginBottom: '1rem', fontSize: '1.5rem' };
const stepText = { color: '#cbd5e1', lineHeight: '1.8', fontSize: '1.1rem' };
const imgStyle = { width: '100%', borderRadius: '10px', border: '1px solid #475569', boxShadow: '0 4px 20px rgba(0,0,0,0.4)' };

export default FlightPage;