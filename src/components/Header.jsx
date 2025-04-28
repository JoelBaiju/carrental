import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Car Rental Service</h1>
      <nav style={styles.nav}>
        {user.username ? (
          <>
            <span style={styles.username}>Welcome, {user.username}!</span>
            <a href="/" style={styles.navLink}>Home</a>
            <a href="#" style={styles.navLink}>About Us</a>
            <a href="#" style={styles.navLink}>Contact</a>
          </>
        ) : (
          <>
            <a href="/signup" style={styles.navLink}>Sign Up</a>
            <a href="/login" style={styles.navLink}>Login</a>
            <a href="#" style={styles.navLink}>Home</a>
            <a href="#" style={styles.navLink}>About Us</a>
            <a href="#" style={styles.navLink}>Contact</a>
          </>
        )}
        <a href="#" id="adminLink" style={{ ...styles.navLink, display: 'none' }}>Admin Dashboard</a>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#2c3e50',
    color: 'white',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  },
  title: {
    margin: 0,
    fontSize: '1.8rem',
    fontWeight: 'bold',
  },
  nav: {
    display: 'flex',
    gap: '1.5rem',
    alignItems: 'center',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: '500',
    transition: 'color 0.3s ease',
    padding: '0.5rem 0',
  },
  username: {
    color: '#f39c12',
    fontSize: '1rem',
    fontWeight: 'bold',
  },
};

export default Header;
