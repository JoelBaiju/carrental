import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/userSlice';
import { collection, addDoc } from 'firebase/firestore';
import db from '../utils/firebase';

const Signup = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    username: '',
    phone: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Add user data to Firestore
      await addDoc(collection(db, 'Users'), formData);

      // Update Redux store
      dispatch(setUser(formData));

      alert('Signup successful! 🎉');
      setFormData({ username: '', phone: '', password: '' });

    } catch (error) {
      console.error('Error signing up:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div style={styles.container}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input 
          type="text" 
          name="username" 
          placeholder="Username" 
          value={formData.username} 
          onChange={handleChange} 
          style={styles.input}
          required
        />
        <input 
          type="text" 
          name="phone" 
          placeholder="Phone" 
          value={formData.phone} 
          onChange={handleChange} 
          style={styles.input}
          required
        />
        <input 
          type="password" 
          name="password" 
          placeholder="Password" 
          value={formData.password} 
          onChange={handleChange} 
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>Sign Up</button>
      </form>
      <a href="login" id="loginLink" style={styles.navLink}>Login</a>

    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '2rem',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  input: {
    padding: '0.75rem',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '0.75rem',
    fontSize: '1rem',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#9a2424',
    color: '#fff',
    cursor: 'pointer',
  },
};

export default Signup;
