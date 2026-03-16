import React from 'react';
import { Link } from 'react-router-dom';

const FishingPage = () => {
  return (
    <div style={{ 
      padding: '4rem 2rem', 
      backgroundColor: '#121212', 
      color: '#fff', 
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Geri Dönüş Butonu */}
      <Link to="/" style={{ 
        color: '#4facfe', 
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
      <header style={{ marginBottom: '3rem', borderBottom: '1px solid #333', paddingBottom: '2rem' }}>
        <h1 style={{ fontSize: '3rem', color: '#4facfe', marginBottom: '1rem' }}>Advanced Fishing System</h1>
        <p style={{ fontSize: '1.2rem', color: '#ccc', maxWidth: '800px', lineHeight: '1.6' }}>
          This specialized development suite showcases a high-performance modular Fishing System in Unreal Engine 5. 
          The architecture manages seamless transitions from 3D world interaction to a physics-based 2D UI minigame.
        </p>
      </header>

      {/* Teknik Kurulum Adımları ve Görseller */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        
        {/* Adım 0 & 1 */}
        <div style={sectionStyle}>
          <div style={textSide}>
            <h2 style={stepTitle}>Step 0 & 1: Prerequisites & Data Setup</h2>
            <p style={stepText}>
              First, the <strong>Water Plugin</strong> must be enabled. To manage species data, right-click and create a 
              <strong> Data Asset</strong> using the <strong>PDA_Fish</strong> base class.
            </p>
          </div>
          <div style={imageSide}>
            <img src="/assets/fishing1.png" alt="Create Data Asset" style={imgStyle} />
            <img src="/assets/fishing2.png" alt="Select PDA_Fish" style={imgStyle} />
          </div>
        </div>

        {/* Adım 2 & 3 */}
        <div style={sectionStyle}>
          <div style={textSide}>
            <h2 style={stepTitle}>Step 2: Fish Parameters & Rarity</h2>
            <p style={stepText}>
              Configure unique characteristics like <strong>Fish Name, Icon, Weight Range,</strong> and <strong>Rarity</strong>. 
              The system uses a weighted random algorithm to determine which fish spawns based on these variables.
            </p>
          </div>
          <div style={imageSide}>
            <img src="/assets/fishing3.png" alt="Fish Settings" style={imgStyle} />
          </div>
        </div>

        {/* Adım 4 & 5 */}
        <div style={sectionStyle}>
          <div style={textSide}>
            <h2 style={stepTitle}>Step 3: World & Collision Setup</h2>
            <p style={stepText}>
              Drag the <strong>WaterBodyLake</strong> into the level and set <strong>Collision Presets</strong> to Custom. 
              Ensure the Water channel is set to <strong>Overlap</strong> for hook detection.
            </p>
          </div>
          <div style={imageSide}>
            <img src="/assets/fishing4.png" alt="Water Body Lake" style={imgStyle} />
            <img src="/assets/fishing5.png" alt="Collision Settings" style={imgStyle} />
          </div>
        </div>

        {/* Adım 6 & 7 */}
        <div style={sectionStyle}>
          <div style={textSide}>
            <h2 style={stepTitle}>Step 4: Population Management</h2>
            <p style={stepText}>
              Attach the <strong>AC_FishManager</strong> component to the WaterBody. 
              Add your created Data Assets to the <strong>Available Fishes</strong> array to populate the lake.
            </p>
          </div>
          <div style={imageSide}>
            <img src="/assets/fishing6.png" alt="Fish Manager" style={imgStyle} />
            <img src="/assets/fishing7.png" alt="Available Fishes Array" style={imgStyle} />
          </div>
        </div>

        {/* Final: Character Integration */}
        <div style={sectionStyle}>
          <div style={textSide}>
            <h2 style={stepTitle}>Step 5: Character Integration</h2>
            <p style={stepText}>
              Inject <strong>IA_Hook</strong> into your Enhanced Input system. Add the <strong>Rod Mesh, 
              Cable Component,</strong> and <strong>AC_Fishing</strong> to your character to finalize the loop.
            </p>
          </div>
        </div>

      </section>

      {/* Footer Teknik Notu */}
      <footer style={{ marginTop: '5rem', padding: '2rem', backgroundColor: '#1e1e1e', borderRadius: '15px', borderLeft: '5px solid #4facfe' }}>
        <h3 style={{ color: '#4facfe', marginBottom: '10px' }}>Final Technical Note</h3>
        <p style={{ color: '#ccc', fontStyle: 'italic' }}>
          This system is optimized for performance, utilizing validation checks to prevent "Pending Kill" errors 
          and maintaining a clean memory footprint through automated cleanup passes.
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
  backgroundColor: '#1a1a1a',
  borderRadius: '20px',
  border: '1px solid #333'
};

const textSide = {
  flex: '1',
  minWidth: '300px'
};

const imageSide = {
  flex: '1.5',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '15px',
  minWidth: '300px'
};

const stepTitle = {
  color: '#4facfe',
  marginBottom: '1rem',
  fontSize: '1.5rem'
};

const stepText = {
  color: '#ccc',
  lineHeight: '1.6',
  fontSize: '1.05rem'
};

const imgStyle = {
  width: '100%',
  borderRadius: '10px',
  border: '1px solid #444',
  boxShadow: '0 4px 10px rgba(0,0,0,0.5)'
};

export default FishingPage;