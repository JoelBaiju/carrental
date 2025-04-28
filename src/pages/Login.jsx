import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/userSlice';
import { collection, getDocs } from 'firebase/firestore';
import db from '../utils/firebase';
import { useNavigate } from 'react-router-dom'; // << Added this

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // << Added this

  const [formData, setFormData] = useState({
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
      const usersRef = collection(db, 'Users');
      const snapshot = await getDocs(usersRef);

      let foundUser = null;

      snapshot.forEach((doc) => {
        const data = doc.data();
        if (data.phone === formData.phone && data.password === formData.password) {
          foundUser = data;
        }
      });

      if (foundUser) {
        console.log(foundUser);
        dispatch(setUser(foundUser));
        alert('Login successful! 🎉');
        setFormData({ phone: '', password: '' });
        navigate('/'); // << Redirect to home page
      } else {
        alert('Invalid phone or password. Please try again.');
      }
      
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
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
        <button type="submit" style={styles.button}>Login</button>
      </form>
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

export default Login;
