import React from 'react';

const AboutUs = () => {
  return (
    <section style={{
      padding: '6rem 2rem',
      background: 'linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url(https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      textAlign: 'center',
      position: 'relative'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '3rem',
        backgroundColor: 'rgba(255,255,255,0.85)',
        borderRadius: '15px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{
          fontSize: '2.8rem',
          color: '#2c3e50',
          marginBottom: '1.5rem',
          position: 'relative',
          display: 'inline-block'
        }}>
          About Us
          <span style={{
            position: 'absolute',
            bottom: '-10px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '80px',
            height: '4px',
            background: '#e74c3c',
            borderRadius: '2px'
          }}></span>
        </h2>
        <p style={{
          fontSize: '1.2rem',
          lineHeight: '1.8',
          color: '#555',
          marginBottom: '0'
        }}>
          We are a passionate car rental company committed to making your travel experience smooth and enjoyable. 
          With a wide fleet and dedicated service, your perfect ride is just a few clicks away.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;