import React from 'react'

const Contact = () => {
  return (
    <section style={{ 
      height: '80vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center', 
      textAlign: 'center',
      backgroundColor: '#121212'
    }}>
      
      <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#fff' }}>
        Bana Ulaşın
      </h2>
      
      <p style={{ color: '#ccc', marginBottom: '3rem', maxWidth: '500px' }}>
        Projelerim hakkında konuşmak veya iletişime geçmek için aşağıdaki kanalları kullanabilirsiniz.
      </p>

      {/* İletişim Kartları Kutusu */}
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
        
        {/* 1. Email Kartı */}
        <a href="mailto:hamzasezer1223@gmail.com" style={cardStyle}>
          <h3 style={titleStyle}>📧 Email</h3>
          <p style={{ color: '#aaa' }}>hamzasezer1223@gmail.com</p>
        </a>

        {/* 2. LinkedIn Kartı */}
        <a href="https://www.linkedin.com/in/hamza-sezer-66551b33a" target="_blank" rel="noopener noreferrer" style={cardStyle}>
          <h3 style={titleStyle}>💼 LinkedIn</h3>
          <p style={{ color: '#aaa' }}>Profilimi İncele</p>
        </a>

        {/* 3. GitHub Kartı */}
        <a href="https://github.com/hamzasezerr" target="_blank" rel="noopener noreferrer" style={cardStyle}>
          <h3 style={titleStyle}>💻 GitHub</h3>
          <p style={{ color: '#aaa' }}>Kodlarımı Gör</p>
        </a>

      </div>
    </section>
  )
}

// --- CSS STİLLERİ ---
const cardStyle = {
  border: '1px solid #333',
  backgroundColor: '#1e1e1e',
  padding: '20px 40px',
  borderRadius: '10px',
  textDecoration: 'none',
  transition: 'transform 0.3s',
  minWidth: '200px',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}

const titleStyle = {
  color: '#4facfe',
  marginBottom: '10px',
  fontSize: '1.2rem'
}

export default Contact