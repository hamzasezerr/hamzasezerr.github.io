import React from 'react'

const Projects = () => {
  const projects = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <section id="projects" style={{ padding: '4rem 2rem', backgroundColor: '#181818' }}>
      
      <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2.5rem', color: '#fff' }}>
        Projelerim
      </h2>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '2rem' 
      }}>
        
        {projects.map((id) => (
          <div key={id} style={{ 
            backgroundColor: '#252525', 
            padding: '20px', 
            borderRadius: '10px', 
            border: '1px solid #333',
            textAlign: 'center'
          }}>
            <h3 style={{ color: '#4facfe', marginBottom: '10px' }}>Proje {id}</h3>
            <p style={{ color: '#ccc', fontSize: '0.9rem' }}>
              Bu alana yakında Proje {id} ile ilgili detaylar, kullanılan teknolojiler ve GitHub linkleri gelecek.
            </p>
          </div>
        ))}

      </div>
    </section>
  )
}

export default Projects