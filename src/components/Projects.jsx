import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      title: "Advanced Fishing System",
      description: "UE5 Water Plugin entegreli, Data Asset tabanlı ve fizik simülasyonlu balıkçılık mekaniği.",
      link: "/fishing-system",
      color: "#38bdf8", 
    },
    {
      title: "Flight Simulator Logic",
      description: "Enhanced Input ve bütünleşik fizik (integrated physics) kullanılarak hazırlanan, gerçekçi uçuş kontrol ve itki sistemleri.",
      link: "/flight-system",
      color: "#38bdf8",
    },
    {
      title: "Target Lock-On Component",
      description: "Düşman odaklama, kamera interpolasyonu ve menzil bazlı hedef seçimi yapan modüler bileşen.",
      link: "/lock-on-component",
      color: "#38bdf8",
    },
  ];

  return (
    <section id="projects" style={sectionStyle}>
      <h2 style={headerStyle}>Featured Projects</h2>
      
      <div style={gridStyle}>
        {projects.map((project, index) => (
          <div key={index} style={cardStyle}>
            <h3 style={{ ...titleStyle, color: project.color }}>{project.title}</h3>
            <p style={descriptionStyle}>{project.description}</p>
            
            <Link 
              to={project.link} 
              style={{ ...buttonStyle, backgroundColor: project.color }}
            >
              Teknik Detayları İncele
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

// --- CSS-in-JS Styles ---

const sectionStyle = {
  padding: '6rem 2rem',
  backgroundColor: '#0f172a',
  color: '#f8fafc',
};

const headerStyle = {
  textAlign: 'center',
  fontSize: '2.5rem',
  marginBottom: '4rem',
  color: '#f8fafc',
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '2.5rem',
  maxWidth: '1200px',
  margin: '0 auto',
};

const cardStyle = {
  backgroundColor: '#1e293b',
  padding: '2rem',
  borderRadius: '15px',
  border: '2px solid #38bdf8', // Tüm çerçeveler mavi yapıldı
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minHeight: '320px',
  transition: 'transform 0.2s, box-shadow 0.2s',
};

const titleStyle = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  marginBottom: '1rem',
};

const descriptionStyle = {
  color: '#94a3b8',
  fontSize: '1rem',
  lineHeight: '1.6',
  marginBottom: '2rem',
  flexGrow: '1',
};

const buttonStyle = {
  display: 'block',
  textAlign: 'center',
  padding: '1rem',
  borderRadius: '10px',
  color: '#0f172a',
  fontWeight: 'bold',
  textDecoration: 'none',
  transition: 'background-color 0.2s',
};

export default Projects;