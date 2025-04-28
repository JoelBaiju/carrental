import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { categoryFetchMap } from '../utils/firebase';
import Cards from '../utils/Cards';

const Listing = () => {
  const { category } = useParams();
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCars = async () => {
      setLoading(true);
      try {
        const fetchFunction = categoryFetchMap[category];
        if (!fetchFunction) {
          console.error("Invalid category:", category);
          setCars([]);
          return;
        }
        const snapshot = await fetchFunction();
        const carData = snapshot.docs.map(doc => doc.data());
        setCars(carData);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
      setLoading(false);
    };

    fetchCars();
  }, [category]);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{category ? `${category} Cars` : 'All Cars'}</h2>
      {loading ? (
        <div style={styles.loading}>Loading...</div>
      ) : (
        <div style={styles.grid}>
          {cars.length > 0 ? (
            cars.map((car, index) => <Cards key={index} data={car} />)
          ) : (
            <p style={styles.noCars}>No cars available in this category.</p>
          )}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem 5%',
    maxWidth: '1600px',
    margin: '0 auto',
  },
  title: {
    fontSize: '2rem',
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: '2rem',
    textAlign: 'center',
    textTransform: 'capitalize'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '2rem',
    justifyContent: 'center',
  },
  loading: {
    textAlign: 'center',
    fontSize: '1.2rem',
    color: '#7f8c8d',
    padding: '2rem'
  },
  noCars: {
    textAlign: 'center',
    fontSize: '1.2rem',
    color: '#e74c3c',
    gridColumn: '1/-1'
  }
};

export default Listing;