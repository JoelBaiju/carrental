import React from 'react';

const Hero = () => {
  return (
    <section style={styles.hero}>
      <div style={styles.heroContent}>
        <h1 style={styles.heroTitle}>Find Your Perfect Ride</h1>
        <p style={styles.heroText}>Choose from a wide range of cars to suit your journey.</p>
        <a href="#categories" style={styles.heroBtn}>Browse Cars</a>
      </div>
    </section>
  );
};

const styles = {
  hero: {
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textAlign: 'center',
    padding: '0 20px',
  },
  heroContent: {
    maxWidth: '800px',
  },
  heroTitle: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  },
  heroText: {
    fontSize: '1.5rem',
    marginBottom: '30px',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
  },
  heroBtn: {
    display: 'inline-block',
    backgroundColor: '#f39c12',
    color: 'white',
    padding: '12px 30px',
    borderRadius: '30px',
    textDecoration: 'none',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
    ':hover': {
      backgroundColor: '#e67e22',
      transform: 'translateY(-3px)',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
    },
  },
};

export default Hero;