import React from 'react';

const Testimonials = () => {
  return (
    <section style={styles.section}>
      <h2 style={styles.title}>What Our Customers Say</h2>
      <div style={styles.grid}>
        <div style={styles.card}>
          <p style={styles.quote}>"Amazing service! The car was in perfect condition and the process was smooth."</p>
          <h4 style={styles.author}>- Aditya</h4>
        </div>
        <div style={styles.card}>
          <p style={styles.quote}>"Best rental experience I've ever had. Highly recommend!"</p>
          <h4 style={styles.author}>- priyansh</h4>
        </div>
        <div style={styles.card}>
          <p style={styles.quote}>"Great support and variety of cars. Will definitely rent again."</p>
          <h4 style={styles.author}>- Rounak</h4>
        </div>
        <div style={styles.card}>
          <p style={styles.quote}>"Highly recommended"</p>
          <h4 style={styles.author}>- Shreyansh</h4>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '5rem 2rem',
    backgroundColor: '#f8f9fa',
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
    backgroundColor: 'white',
    borderRadius: '10px',
    padding: '2rem',
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
    position: 'relative',
  },
  quote: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    color: '#555',
    fontStyle: 'italic',
    marginBottom: '1.5rem',
  },
  author: {
    color: '#e67e22',
    fontSize: '1.2rem',
    fontWeight: '600',
    margin: '0',
  },
};

export default Testimonials;