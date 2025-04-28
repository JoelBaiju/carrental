import React from 'react';
import { useNavigate } from 'react-router-dom'; // <--- new
import { useSelector } from 'react-redux';      // <--- new

const Cards = ({ data }) => {
  const navigate = useNavigate();
  const user = useSelector(state => state.user); // get logged in user

  const handleBookNow = () => {
    if (user) {
      navigate('/checkout', { state: { car: data } });
    } else {
      alert('Please login first to book a car!');
    }
  };

  return (
    <div style={styles.card}>
      <div style={styles.imageContainer}>
        <img 
          src={data.image} 
          alt={data.name} 
          style={styles.image}
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/300x200?text=Car+Image';
          }}
        />
      </div>
      <div style={styles.cardBody}>
        <h3 style={styles.cardTitle}>{data.name}</h3>
        
        <div style={styles.specRow}>
          <span style={styles.specLabel}>Price:</span>
          <span style={styles.specValue}>₹{data.price}</span>
        </div>
        
        <div style={styles.specRow}>
          <span style={styles.specLabel}>Doors:</span>
          <span style={styles.specValue}>{data.doors}</span>
        </div>
        
        <div style={styles.specRow}>
          <span style={styles.specLabel}>Seats:</span>
          <span style={styles.specValue}>{data.seats}</span>
        </div>
        
        <button style={styles.bookButton} onClick={handleBookNow}>
          Book Now
        </button>
      </div>
    </div>
  );
};

// Styles defined inside the component
const styles = {
  card: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    ':hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)'
    }
  },
  imageContainer: {
    height: '200px',
    overflow: 'hidden',
    position: 'relative'
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease',
    ':hover': {
      transform: 'scale(1.05)'
    }
  },
  cardBody: {
    padding: '1.5rem'
  },
  cardTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: '1rem',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  specRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '0.75rem',
    fontSize: '0.95rem'
  },
  specLabel: {
    fontWeight: '600',
    color: '#7f8c8d'
  },
  specValue: {
    color: '#2c3e50'
  },
  bookButton: {
    width: '100%',
    backgroundColor: '#e74c3c',
    color: 'white',
    border: 'none',
    padding: '0.75rem',
    borderRadius: '4px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    marginTop: '1rem',
    ':hover': {
      backgroundColor: '#c0392b'
    }
  }
};

export default Cards;
