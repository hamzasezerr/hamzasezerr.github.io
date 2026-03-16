import React from 'react';
import { Link } from 'react-router-dom';

const FishingPage = () => {
  return (
    <div style={{ 
      padding: '4rem 2rem', 
      backgroundColor: '#0f172a', 
      color: '#f8fafc', 
      minHeight: '100vh',
      fontFamily: 'Segoe UI, sans-serif'
    }}>
      {/* Geri Dönüş Butonu */}
      <Link to="/" style={{ color: '#38bdf8', textDecoration: 'none', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2rem' }}>
        ← Back to Portfolio
      </Link>
      
      {/* Başlık ve Özet */}
      <header style={{ marginBottom: '3rem', borderBottom: '1px solid #1e293b', paddingBottom: '2rem' }}>
        <h1 style={{ fontSize: '3rem', color: '#38bdf8', marginBottom: '1rem' }}>Advanced Fishing System</h1>
        <p style={{ fontSize: '1.2rem', color: '#94a3b8', maxWidth: '800px', lineHeight: '1.6' }}>
          A high-performance modular Fishing System developed in Unreal Engine 5. 
          The architecture manages seamless transitions from 3D world interaction to a physics-based UI minigame.
        </p>
      </header>

      {/* Teknik Bölümler */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        
        {/* YENİ BÖLÜM: Gameplay Showcase (image_b87e7b.jpg) */}
        <div style={sectionStyle}>
          <div style={textSide}>
            <h2 style={stepTitle}>1. Gameplay & UI Minigame</h2>
            <p style={stepText}>
              The system features a <strong>dynamic physics-based minigame</strong>. When a fish bites, players must maintain the "Fish Icon" within the "Green Zone" to succeed. This UI-driven logic is synchronized with the 3D world, reacting to the fish's weight and struggle strength.
            </p>
          </div>
          <div style={imageSide}>
            {/* Görselin adını fishing_gameplay.png olarak değiştirip public/assets içine at */}
            <img src="/assets/fishing_gameplay.png" alt="Fishing Minigame Mechanics" style={imgStyle} />
          </div>
        </div>

        {/* Adım 2: Data Setup */}
        <div style={sectionStyle}>
          <div style={textSide}>
            <h2 style={stepTitle}>2. Data Asset Architecture</h2>
            <p style={stepText}>
              The system utilizes <strong>Data Assets</strong> (PDA_Fish) to decouple species data from logic. 
              This allows for easy scaling of fish types, rarity levels, and specific weight ranges without 
              modifying the core Blueprint code.
            </p>
          </div>
          <div style={imageSide}>
            <img src="/assets/fishing1.png" alt="UE5 Data Asset Creation" style={imgStyle} />
            <img src="/assets/fishing2.png" alt="PDA_Fish Class Selection" style={imgStyle} />
          </div>
        </div>

        {/* Adım 3: Physics & Collision */}
        <div style={sectionStyle}>
          <div style={textSide}>
            <h2 style={stepTitle}>3. World Interaction & Physics</h2>
            <p style={stepText}>
              Integrated with the <strong>UE5 Water Plugin</strong>, the system uses custom collision channels 
              to detect water surfaces. The hook utilizes buoyancy physics to react naturally with waves 
              and current flow.
            </p>
          </div>
          <div style={imageSide}>
            <img src="/assets/fishing4.png" alt="Water Body Setup" style={imgStyle} />
            <img src="/assets/fishing5.png" alt="Collision Matrix" style={imgStyle} />
          </div>
        </div>

      </section>

      {/* Footer Teknik Notu */}
      <footer style={{ marginTop: '5rem', padding: '2rem', backgroundColor: '#1e293b', borderRadius: '15px', borderLeft: '5px solid #38bdf8' }}>
        <h3 style={{ color: '#38bdf8', marginBottom: '10px' }}>Optimization & Memory</h3>
        <p style={{ color: '#94a3b8', fontStyle: 'italic' }}>
          This system is optimized for performance, utilizing validation checks to prevent "Pending Kill" errors 
          and maintaining a clean memory footprint through automated cleanup passes.
        </p>
      </footer>
    </div>
  );
};

// --- CSS-in-JS Styles ---
const sectionStyle = { display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center', padding: '2rem', backgroundColor: '#1e293b', borderRadius: '20px', border: '1px solid #334155' };
const textSide = { flex: '1', minWidth: '300px' };
const imageSide = { flex: '1.5', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', minWidth: '300px' };
const stepTitle = { color: '#38bdf8', marginBottom: '1rem', fontSize: '1.5rem' };
const stepText = { color: '#cbd5e1', lineHeight: '1.8', fontSize: '1.1rem' };
const imgStyle = { width: '100%', borderRadius: '10px', border: '1px solid #475569', boxShadow: '0 4px 20px rgba(0,0,0,0.4)' };

export default FishingPage;