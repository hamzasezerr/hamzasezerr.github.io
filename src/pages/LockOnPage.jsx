import React from 'react';
import { Link } from 'react-router-dom';

const LockOnPage = () => {
  return (
    <div style={{ 
      padding: '4rem 2rem', 
      backgroundColor: '#0f172a', // Premium koyu lacivert
      color: '#f8fafc', 
      minHeight: '100vh',
      fontFamily: 'Segoe UI, sans-serif'
    }}>
      {/* Geri Dönüş Butonu */}
      <Link to="/" style={{ color: '#38bdf8', textDecoration: 'none', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2rem' }}>
        ← Back to Portfolio
      </Link>
      
      <header style={{ marginBottom: '3rem', borderBottom: '1px solid #1e293b', paddingBottom: '2rem' }}>
        <h1 style={{ fontSize: '3rem', color: '#38bdf8' }}>Target Lock-On Component</h1>
        <p style={{ fontSize: '1.2rem', color: '#94a3b8', maxWidth: '800px' }}>
          A sophisticated modular targeting system utilizing Multi-Sphere Tracing and Dot Product calculations to achieve precise enemy acquisition.
        </p>
      </header>

      <section style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        
        {/* BÖLÜM 1: Yeni Oyun İçi Görsel (Eski Adım 1) */}
        <div style={sectionStyle}>
          <div style={textSide}>
            <h2 style={stepTitle}>1. Target Selection (In-Game)</h2>
            <p style={stepText}>
              The system provides a clear visual interface for target acquisition. The player's current focus is identified by a <strong>Nişangah</strong>, while other potential targets (hostile actors) are highlighted with a <strong>Red Cross</strong>. This establishes a clean and intuitive targeting feedback loop for the player.
            </p>
          </div>
          <div style={imageSide}>
            {/* Görselin assets klasöründe lockon_gameplay.png (image_4.png) olduğundan emin ol */}
            <img src="/assets/lockon1.png" alt="Target Selection UI" style={imgStyle} />
          </div>
        </div>

        {/* BÖLÜM 2: Interpolation (Eski Adım 2) */}
        <div style={sectionStyle}>
          <div style={textSide}>
            <h2 style={stepTitle}>2. Camera Interpolation (RInterp)</h2>
            <p style={stepText}>
              To provide a smooth user experience, the component uses <strong>RInterp To</strong> logic. This prevents jarring camera snaps and ensures the camera gracefully tracks the target's movement while maintaining player orientation during fast-paced combat maneuvers.
            </p>
          </div>
          <div style={imageSide}>
            {/* Görselin assets klasöründe lockon2.png olduğundan emin ol */}
            <img src="/assets/lockon2.png" alt="Camera Smoothness" style={imgStyle} />
          </div>
        </div>

        {/* BÖLÜM 3: Teknik Blueprint (Eski Adım 1) */}
        <div style={sectionStyle}>
          <div style={textSide}>
            <h2 style={stepTitle}>3. Detection & Sphere Trace</h2>
            <p style={stepText}>
              The system utilizes a <strong>Multi-Sphere Trace</strong> to identify potential targets in a 3D radius. By filtering actors via Class and Tags, it ensures only valid hostiles are considered. The <strong>Dot Product</strong> calculation then prioritizes enemies within the player's central Field of View (FOV).
            </p>
          </div>
          <div style={imageSide}>
            {/* Görselin assets klasöründe lockon1.png olduğundan emin ol */}
            <img src="/assets/lockon3.png" alt="Detection Logic Blueprint" style={imgStyle} />
          </div>
        </div>

      </section>

      {/* Teknik Not */}
      <footer style={{ marginTop: '5rem', padding: '2rem', backgroundColor: '#1e293b', borderRadius: '15px', borderLeft: '5px solid #38bdf8' }}>
        <h3 style={{ color: '#38bdf8', marginBottom: '10px' }}>Component Architecture</h3>
        <p style={{ color: '#cbd5e1', fontStyle: 'italic' }}>
          This logic is built as a standalone <strong>Actor Component</strong>, making it 100% modular 
          and ready to be dropped into any character or vehicle Pawn within Unreal Engine 5 projects.
        </p>
      </footer>
    </div>
  );
};

// --- CSS-in-JS Styles (Tam Uyumlu) ---
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
const imageSide = { flex: '1.5', display: 'flex', flexDirection: 'column' };
const stepTitle = { color: '#38bdf8', marginBottom: '1rem', fontSize: '1.5rem' };
const stepText = { color: '#cbd5e1', lineHeight: '1.8', fontSize: '1.1rem' };
const imgStyle = { 
  width: '100%', 
  borderRadius: '10px', 
  border: '1px solid #475569', 
  boxShadow: '0 4px 20px rgba(0,0,0,0.3)' 
};

export default LockOnPage;