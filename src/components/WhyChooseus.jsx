import React from 'react';

const WhyChooseus = () => {
  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Why Choose Us</h2>
      <div style={styles.grid}>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Affordable Prices</h3>
          <p style={styles.cardText}>We offer the best value without compromising on quality.</p>
        </div>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Wide Range of Cars</h3>
          <p style={styles.cardText}>Choose from economy to luxury models for any occasion.</p>
        </div>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>24/7 Support</h3>
          <p style={styles.cardText}>Our team is always ready to assist you, anytime, anywhere.</p>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '4rem 2rem',
    backgroundColor: '#ffffff',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '3rem',
    color: '#2c3e50',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  card: {
    backgroundColor: '#f8f9fa',
    borderRadius: '10px',
    padding: '2rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    ':hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
    },
  },
  cardTitle: {
    fontSize: '1.5rem',
    color: '#e67e22',
    marginBottom: '1rem',
  },
  cardText: {
    fontSize: '1rem',
    color: '#555',
    lineHeight: '1.6',
  },
};

export default WhyChooseus;