import React from 'react';

const AboutUs = () => {
  return (
    <div style={styles.wrapper}>
      <section style={styles.hero}>
        <h1 style={styles.title}>About Our Company</h1>
        <p style={styles.subtitle}>
          Driven by passion, we’re committed to making car rental easy, affordable, and reliable.
        </p>
      </section>

      <section style={styles.section}>
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Our Mission</h2>
          <p style={styles.cardText}>
            To provide flexible, comfortable, and cost-effective vehicle rentals for everyone — whether you’re commuting, traveling, or exploring.
          </p>
        </div>

        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Why Choose Us</h2>
          <ul style={styles.list}>
            <li>✔️ 24/7 customer support</li>
            <li>✔️ Competitive prices & no hidden fees</li>
            <li>✔️ Modern, well-maintained vehicles</li>
            <li>✔️ Easy online booking & pickup</li>
          </ul>
        </div>

        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Our Team</h2>
          <p style={styles.cardText}>
            We are a team of car lovers, tech enthusiasts, and customer-focused professionals, working hard to bring you the best car rental experience.
          </p>
        </div>
      </section>
    </div>
  );
};

const styles = {
  wrapper: {
    fontFamily: "'Segoe UI', sans-serif",
    backgroundColor: '#f8f9fa',
    padding: '2rem',
  },
  hero: {
    textAlign: 'center',
    padding: '3rem 1rem',
    backgroundColor: '#2c3e50',
    color: 'white',
    borderRadius: '12px',
    marginBottom: '3rem',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '1.2rem',
    lineHeight: '1.6',
    maxWidth: '700px',
    margin: '0 auto',
  },
  section: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
    transition: 'transform 0.3s',
  },
  cardTitle: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    color: '#2c3e50',
  },
  cardText: {
    fontSize: '1rem',
    color: '#333',
    lineHeight: '1.6',
  },
  list: {
    listStyle: 'none',
    paddingLeft: 0,
    fontSize: '1rem',
    color: '#333',
    lineHeight: '1.8',
  },
};

export default AboutUs;
