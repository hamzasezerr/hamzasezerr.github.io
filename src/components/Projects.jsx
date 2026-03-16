import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      id: "fishing",
      title: "Advanced Fishing System",
      description: "UE5 Water Plugin entegreli, Data Asset tabanlı ve fizik simülasyonlu balıkçılık mekaniği.",
      path: "/fishing-system", // App.jsx'teki path ile aynı olmalı
      color: "#4facfe"
    },
    {
      id: "flight",
      title: "Flight Simulator Logic",
      description: "Enhanced Input ve modular physics kullanılarak hazırlanan, gerçekçi uçuş kontrol ve itki sistemleri.",
      path: "/flight-system", // App.jsx'teki path ile aynı olmalı
      color: "#38bdf8"
    },
    {
      id: "lockon",
      title: "Target Lock-On Component",
      description: "Düşman odaklama, kamera interpolasyonu ve menzil bazlı hedef seçimi yapan modüler bileşen.",
      path: "/lock-on-component", // App.jsx'teki path ile aynı olmalı
      color: "#ff4d4d"
    }
  ];

  return (
    <section id="projects" style={{ padding: '4rem 2rem', backgroundColor: '#181818' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem', color: '#fff' }}>
        Projelerim
      </h2>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '2.5rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {projects.map((project) => (
          <div key={project.id} style={{ 
            backgroundColor: '#252525', 
            padding: '30px', 
            borderRadius: '15px', 
            border: `1px solid ${project.color}33`, // Hafif renkli border
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            transition: 'transform 0.3s ease',
            cursor: 'default'
          }}>
            <div>
              <h3 style={{ color: project.color, marginBottom: '15px', fontSize: '1.5rem' }}>
                {project.title}
              </h3>
              <p style={{ color: '#ccc', fontSize: '1rem', lineHeight: '1.6', marginBottom: '25px' }}>
                {project.description}
              </p>
            </div>
            
            {/* Dinamik Yönlendirme Butonu */}
            <Link 
              to={project.path} 
              style={{ 
                textAlign: 'center',
                color: '#fff', 
                backgroundColor: project.color, 
                padding: '12px 20px', 
                borderRadius: '8px', 
                textDecoration: 'none',
                fontWeight: 'bold',
                transition: '0.3s',
                boxShadow: `0 4px 10px ${project.color}44`
              }}
              onMouseOver={(e) => e.target.style.filter = 'brightness(1.2)'}
              onMouseOut={(e) => e.target.style.filter = 'brightness(1)'}
            >
              Teknik Detayları İncele
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;