import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section style={heroContainerStyle}>
      {/* Arka Plan: Mühendislik Izgarası (Grid) Efekti */}
      <div style={gridBackgroundStyle}></div>
      
      {/* Köşe UI Detayları (Oyun HUD'ı gibi) */}
      <div style={cornerTopLeft}></div>
      <div style={cornerBottomRight}></div>

      <div style={contentWrapperStyle}>
        {/* Terminal Tarzı Küçük Yazı */}
        <div style={terminalTagStyle}>
          <span style={{ color: '#38bdf8' }}>&gt;</span> INITIALIZING_SOLO_DEVELOPER_PROTOCOL...
        </div>
        
        <h1 style={mainTitleStyle}>
          HAMZA <span style={nameHighlightStyle}>SEZER</span>
        </h1>
        
        <h2 style={subTitleStyle}>
          INDEPENDENT GAME ARCHITECT <span style={blinkStyle}>|</span>
        </h2>
        
        <div style={badgeContainerStyle}>
          <span style={badgeStyle}>UE5</span>
          <span style={badgeStyle}>UNITY</span>
          <span style={badgeStyle}>C++ / C#</span>
          <span style={badgeStyle}>PYTHON AI</span>
        </div>

        <p style={descriptionStyle}>
          Bir fikri alıp, fizik kurallarından yapay zekasına, optimizasyonundan 
          arayüzüne kadar **tek başıma** yaşayan bir dünyaya dönüştürüyorum. 
          Motorlar sadece araçtır; asıl mesele kusursuz mantığı inşa etmektir.
        </p>

        <div style={buttonGroupStyle}>
          <Link to="/projects" style={primaryBtnStyle}>
            SİSTEMLERİ İNCELE [ENTER]
          </Link>

          <Link to="/contact" style={secondaryBtnStyle}>
            BAĞLANTI KUR [SHIFT]
          </Link>
        </div>
      </div>

      {/* Alt Veri Akışı Çizgisi */}
      <div style={dataFlowStyle}></div>
    </section>
  )
}

// --- Solo Architect Stilleri ---

const heroContainerStyle = {
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  backgroundColor: '#020617',
  padding: '0 20px',
  position: 'relative',
  overflow: 'hidden',
  color: '#f8fafc',
};

const gridBackgroundStyle = {
  position: 'absolute',
  inset: 0,
  backgroundImage: `
    linear-gradient(to right, rgba(56, 189, 248, 0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(56, 189, 248, 0.05) 1px, transparent 1px)
  `,
  backgroundSize: '40px 40px',
  maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)',
};

const contentWrapperStyle = {
  zIndex: 10,
  maxWidth: '1000px',
};

const terminalTagStyle = {
  fontFamily: 'monospace',
  fontSize: '0.9rem',
  marginBottom: '1rem',
  color: '#94a3b8',
  letterSpacing: '1px',
};

const mainTitleStyle = {
  fontSize: '5.5rem',
  fontWeight: '900',
  margin: 0,
  lineHeight: '0.9',
  letterSpacing: '-2px',
};

const nameHighlightStyle = {
  color: 'transparent',
  WebkitTextStroke: '2px #38bdf8',
  filter: 'drop-shadow(0 0 10px rgba(56, 189, 248, 0.5))',
};

const subTitleStyle = {
  fontSize: '1.8rem',
  fontWeight: '600',
  color: '#38bdf8',
  marginTop: '1rem',
  letterSpacing: '4px',
};

const blinkStyle = {
  animation: 'blink 1s step-end infinite',
};

const badgeContainerStyle = {
  display: 'flex',
  gap: '10px',
  justifyContent: 'center',
  margin: '2rem 0',
};

const badgeStyle = {
  padding: '5px 12px',
  border: '1px solid rgba(56, 189, 248, 0.3)',
  borderRadius: '4px',
  fontSize: '0.75rem',
  fontWeight: 'bold',
  backgroundColor: 'rgba(56, 189, 248, 0.1)',
  color: '#cbd5e1',
};

const descriptionStyle = {
  maxWidth: '650px',
  margin: '0 auto',
  lineHeight: '1.8',
  fontSize: '1.1rem',
  color: '#94a3b8',
  fontStyle: 'italic',
};

const buttonGroupStyle = {
  marginTop: '50px',
  display: 'flex',
  gap: '25px',
  justifyContent: 'center',
};

const primaryBtnStyle = {
  padding: '16px 35px',
  backgroundColor: '#38bdf8',
  color: '#020617',
  fontWeight: 'bold',
  textDecoration: 'none',
  fontSize: '0.9rem',
  clipPath: 'polygon(0 0, 100% 0, 100% 70%, 85% 100%, 0 100%)',
  transition: 'all 0.3s ease',
};

const secondaryBtnStyle = {
  padding: '16px 35px',
  border: '1px solid #38bdf8',
  color: '#38bdf8',
  fontWeight: 'bold',
  textDecoration: 'none',
  fontSize: '0.9rem',
  clipPath: 'polygon(0 0, 100% 0, 100% 70%, 85% 100%, 0 100%)',
};

// Dekoratif Köşeler
const cornerTopLeft = {
  position: 'absolute',
  top: '40px',
  left: '40px',
  width: '100px',
  height: '100px',
  borderTop: '2px solid #38bdf8',
  borderLeft: '2px solid #38bdf8',
  opacity: 0.3,
};

const cornerBottomRight = {
  position: 'absolute',
  bottom: '40px',
  right: '40px',
  width: '100px',
  height: '100px',
  borderBottom: '2px solid #38bdf8',
  borderRight: '2px solid #38bdf8',
  opacity: 0.3,
};

const dataFlowStyle = {
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  height: '2px',
  background: 'linear-gradient(90deg, transparent, #38bdf8, transparent)',
  animation: 'flow 3s linear infinite',
};

export default Hero