import React from 'react';
import { useNavigate } from 'react-router-dom';
import sports from '../media/sports.jpg';
import ev from '../media/ev.jpg';
import lux from '../media/luxury.jpg';
import eco from '../media/economy.jpg';
import suv from '../media/suv.jpg';

const carTypes = [
  { name: 'SUV', image: suv },
  { name: 'Sedan', image: lux },
  { name: 'Hatchback', image: eco },
  { name: 'Convertible', image: ev },
  { name: 'Luxury', image: lux},
];

const Categories = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/cars/${category}`);
  };

  return (
    <section id="categories" style={styles.section}>
      <h2 style={styles.sectionTitle}>Choose a Car Type</h2>
      <div style={styles.grid}>
        {carTypes.map((car, index) => (
          <div 
            style={styles.card} 
            key={index} 
            onClick={() => handleCategoryClick(car.name)}
          >
            <img 
              src={car.image} 
              alt={car.name} 
              style={styles.cardImage}
            />
            <h3 style={styles.cardTitle}>{car.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '4rem 2rem',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: '2.5rem',
    marginBottom: '3rem',
    color: '#2c3e50',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '10px',
    padding: '1.5rem',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    ':hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
    },
  },
  cardImage: {
    width: '100%',
    height: '120px',
    objectFit: 'contain',
    marginBottom: '1rem',
  },
  cardTitle: {
    fontSize: '1.25rem',
    color: '#2c3e50',
    margin: '0',
  },
};

export default Categories;
