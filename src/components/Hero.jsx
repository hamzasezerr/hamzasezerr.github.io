import React from 'react'
import { Link } from 'react-router-dom' // <-- BU SATIRI EKLE

const Hero = () => {
  return (
    <section style={{ /* ...eski stiller aynen kalıyor... */ 
      height: '80vh', 
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center', 
      alignItems: 'center', 
      textAlign: 'center',
      background: 'linear-gradient(to bottom, #1e1e1e, #121212)'
    }}>
      
      {/* ...Başlıklar ve yazılar aynen kalıyor... */}
      <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', color: '#fff' }}>
        Merhaba, Ben <span style={{ color: '#646cff' }}>Hamza Sezer</span>
      </h1>
      <h2 style={{ fontSize: '1.5rem', color: '#aaa', marginBottom: '2rem' }}>
        Bilgisayar Mühendisi & Game Developer 🎮
      </h2>
      <p style={{ maxWidth: '600px', lineHeight: '1.6', fontSize: '1.1rem', color: '#ccc' }}>
        Python ile yapay zeka projeleri geliştiriyor, hayallerimi kodluyorum.
        Web Tasarım oyun geliştirmeden yapay zekaya teknolojinin her yerindeyim.
        Geleceği şekillendiren projelerde yer almak için buradayım!
      </p>

      <div style={{ marginTop: '30px' }}>
        {/* BURASI GÜNCELLENDİ: a etiketi yerine Link geldi */}
        <Link to="/projects" style={{ 
          padding: '10px 30px', 
          backgroundColor: '#646cff', 
          color: 'white', 
          borderRadius: '5px', 
          fontWeight: 'bold',
          marginRight: '10px',
          textDecoration: 'none',
          display: 'inline-block'
        }}>
          Projelerimi Gör
        </Link>

        <Link to="/contact" style={{ 
            padding: '10px 30px', 
            border: '1px solid #646cff', 
            color: '#646cff', 
            borderRadius: '5px', 
            fontWeight: 'bold',
            textDecoration: 'none' 
        }}>
            İletişim
</Link>
      </div>

    </section>
  )
}

export default Hero