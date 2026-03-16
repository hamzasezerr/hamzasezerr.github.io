import React from 'react';
import { Link } from 'react-router-dom';

const LockOnPage = () => {
  return (
    <div style={{ 
      padding: '4rem 2rem', 
      backgroundColor: '#0a0a0a', // Çok koyu gri/siyah
      color: '#ececec', 
      minHeight: '100vh',
      fontFamily: 'Courier New, Courier, monospace' // Daha teknik/kod odaklı bir font
    }}>
      {/* Geri Dönüş Butonu */}
      <Link to="/" style={{ 
        color: '#ff4d4d', 
        textDecoration: 'none', 
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        marginBottom: '2rem'
      }}>
        ← Return to Tactical Overview
      </Link>
      
      {/* Başlık ve Sistem Özeti */}
      <header style={{ marginBottom: '3rem', borderBottom: '1px solid #330000', paddingBottom: '2rem' }}>
        <h1 style={{ fontSize: '3rem', color: '#ff4d4d', marginBottom: '1rem', letterSpacing: '2px' }}>
          Target Lock-On Component
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#a0a0a0', maxWidth: '800px', lineHeight: '1.6' }}>
          A modular targeting solution for combat-oriented games. This component handles automated enemy detection, 
          smooth camera interpolation (RInterp), and priority-based target switching within a defined radius.
        </p>
      </header>

      {/* Teknik Detaylar ve Görseller */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        
        {/* Detection & Range Logic */}
        <div style={sectionStyle}>
          <div style={textSide}>
            <h2 style={stepTitle}>Detection & Sphere Trace Logic</h2>
            <p style={stepText}>
              The system utilizes a <strong>Sphere Trace</strong> or <strong>Multi-Overlap</strong> check to identify 
              potential targets. It filters actors by Class or Tag, ensuring the player only locks onto valid hostiles 
              within the operational range.
            </p>
          </div>
          <div style={imageSide}>
            <img src="/assets/lockon_trace.png" alt="Trace Logic" style={imgStyle} />
          </div>
        </div>

        {/* Camera Interpolation */}
        <div style={sectionStyle}>
          <div style={textSide}>
            <h2 style={stepTitle}>Camera Interpolation (RInterp)</h2>
            <p style={stepText}>
              To prevent jarring camera movements, the component uses <strong>RInterp To</strong> for smooth rotation 
              towards the target. This ensures the player maintains visual contact without losing orientation 
              during fast-paced combat.
            </p>
          </div>
          <div style={imageSide}>
            <img src="/assets/lockon_camera.png" alt="Camera Smoothness" style={imgStyle} />
          </div>
        </div>

        {/* UI & Indicator Integration */}
        <div style={sectionStyle}>
          <div style={textSide}>
            <h2 style={stepTitle}>Dynamic UI Indicators</h2>
            <p style={stepText}>
              Includes a screen-space <strong>Target Indicator</strong> that stays pinned to the enemy's location. 
              The indicator dynamically updates its state based on range, visibility, and lock status.
            </p>
          </div>
          <div style={imageSide}>
            <img src="/assets/lockon_ui.png" alt="Target UI" style={imgStyle} />
          </div>
        </div>

      </section>

      {/* Teknik Not */}
      <footer style={{ marginTop: '5rem', padding: '2rem', backgroundColor: '#1a0505', borderRadius: '15px', borderLeft: '5px solid #ff4d4d' }}>
        <h3 style={{ color: '#ff4d4d', marginBottom: '10px' }}>Tactical Performance Notations</h3>
        <p style={{ color: '#888', fontStyle: 'italic' }}>
          Fully modular architecture. Can be integrated into any Pawn or Character via Actor Component. 
          Optimized for low CPU overhead by using timer-based trace updates instead of per-tick detection.
        </p>
      </footer>
    </div>
  );
};

// --- CSS-in-JS Styles ---
const sectionStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '2rem',
  alignItems: 'center',
  padding: '2rem',
  backgroundColor: '#111',
  borderRadius: '20px',
  border: '1px solid #222'
};

const textSide = {
  flex: '1',
  minWidth: '300px'
};

const imageSide = {
  flex: '1.5',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '15px',
  minWidth: '300px'
};

const stepTitle = {
  color: '#ff4d4d',
  marginBottom: '1rem',
  fontSize: '1.5rem'
};

const stepText = {
  color: '#a0a0a0',
  lineHeight: '1.6',
  fontSize: '1.05rem'
};

const imgStyle = {
  width: '100%',
  borderRadius: '10px',
  border: '1px solid #330000',
  boxShadow: '0 0 20px rgba(255, 77, 77, 0.1)'
};

export default LockOnPage;