import React from "react";

const ContactUs = () => {
  const styles = {
    page: {
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f8fafc",
      minHeight: "100vh",
    },
    header: {
      backgroundColor: "#1f2a37",
      color: "white",
      textAlign: "center",
      padding: "3rem 1rem",
    },
    title: {
      fontSize: "2.5rem",
      marginBottom: "0.5rem",
    },
    subtitle: {
      color: "#cbd5e1",
      fontSize: "1.1rem",
    },
    section: {
      maxWidth: "1100px",
      margin: "2rem auto",
      display: "flex",
      flexWrap: "wrap",
      gap: "2rem",
      justifyContent: "center",
      padding: "0 1rem",
    },
    card: {
      backgroundColor: "#fff",
      padding: "2rem",
      borderRadius: "16px",
      boxShadow: "0 10px 15px rgba(0, 0, 0, 0.05)",
      flex: "1 1 300px",
      transition: "transform 0.2s",
    },
    cardHover: {
      transform: "translateY(-5px)",
    },
    cardTitle: {
      fontSize: "1.5rem",
      marginBottom: "1rem",
      color: "#111827",
    },
    text: {
      fontSize: "1rem",
      color: "#374151",
      margin: "0.4rem 0",
    },
  };

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.title}>Contact Us</h1>
        <p style={styles.subtitle}>
          We’d love to hear from you — get in touch with any questions or support needs.
        </p>
      </header>

      <section style={styles.section}>
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>📞 Contact Information</h2>
          <p style={styles.text}>📱 +91 9343603050</p>
          <p style={styles.text}>📱 +91 8965821341</p>
          <p style={styles.text}>📱 +91 9343603050</p>
          <p style={styles.text}>📱 +91 8965821341</p>
          <p style={styles.text}>✉️ support@carrental.com</p>
        </div>

        <div style={styles.card}>
          <h2 style={styles.cardTitle}>📍 Address</h2>
          <p style={styles.text}>Kalinga University</p>
          <p style={styles.text}>Nava Raipur,Chattisgarh,India</p>
          <p style={styles.text}>PIN: 492001</p>
        </div>

        <div style={styles.card}>
          <h2 style={styles.cardTitle}>⏰ Working Hours</h2>
          <p style={styles.text}>Mon - Sat: 9:00 AM - 8:00 PM</p>
          <p style={styles.text}>Sunday: Closed</p>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
