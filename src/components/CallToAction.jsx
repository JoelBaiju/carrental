import React from 'react';

const CallToAction = () => {
  return (
    <section style={{
      background: 'linear-gradient(135deg, #3498db, #2c3e50)',
      color: 'white',
      textAlign: 'center',
      padding: '5rem 2rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <h2 style={{
        fontSize: '2.5rem',
        marginBottom: '1.5rem',
        fontWeight: '700',
        textShadow: '1px 1px 3px rgba(0,0,0,0.2)'
      }}>Ready to Hit the Road?</h2>
      <p style={{
        fontSize: '1.25rem',
        maxWidth: '600px',
        margin: '0 auto 2.5rem',
        lineHeight: '1.6'
      }}>Book your car today and enjoy an unforgettable journey!</p>
      <button style={{
        backgroundColor: '#e74c3c',
        color: 'white',
        border: 'none',
        padding: '15px 40px',
        fontSize: '1.1rem',
        fontWeight: '600',
        borderRadius: '50px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
        ':hover': {
          transform: 'translateY(-3px)',
          boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
          backgroundColor: '#c0392b'
        }
      }}>Book Now</button>
    </section>
  );
};

export default CallToAction;