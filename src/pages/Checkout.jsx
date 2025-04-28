import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import db from '../utils/firebase';
import { useSelector } from 'react-redux';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = useSelector(state => state.user);
  const car = location.state?.car;

  const [startDate, setStartDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  if (!car) {
    return <div>No car selected.</div>;
  }

  const handleBooking = async () => {
    if (!startDate || !returnDate) {
      alert('Please select both start and return dates.');
      return;
    }

    try {
      await addDoc(collection(db, 'bookings'), {
        userId: user.phone,    // or user.id if you have
        carName: car.name,
        carImage: car.image,
        startDate,
        returnDate,
        bookedAt: new Date()
      });
      alert('Booking Successful! 🚗🎉');
      navigate('/');  // redirect to homepage
    } catch (error) {
      console.error('Error booking car:', error);
      alert('Failed to book the car. Please try again.');
    }
  };

  return (
    <div style={styles.container}>
      <h2>Checkout</h2>
      <img src={car.image} alt={car.name} style={styles.image} />
      <h3>{car.name}</h3>
      <p>Price: ₹{car.price}</p>
      
      <div style={styles.formGroup}>
        <label>Start Date:</label>
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} style={styles.input} />
      </div>

      <div style={styles.formGroup}>
        <label>Return Date:</label>
        <input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} style={styles.input} />
      </div>

      <button onClick={handleBooking} style={styles.button}>
        Confirm Booking
      </button>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '500px',
    margin: '2rem auto',
    padding: '2rem',
    border: '1px solid #ccc',
    borderRadius: '8px',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 'auto',
    marginBottom: '1rem',
  },
  formGroup: {
    marginBottom: '1rem',
    textAlign: 'left',
  },
  input: {
    width: '100%',
    padding: '0.5rem',
    fontSize: '1rem',
    marginTop: '0.5rem',
  },
  button: {
    width: '100%',
    padding: '0.75rem',
    fontSize: '1rem',
    backgroundColor: '#2ecc71',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  }
};

export default Checkout;
