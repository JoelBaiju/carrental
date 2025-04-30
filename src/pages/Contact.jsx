import React from 'react';

const Contact = () => {
  return (
    <>
      <style>{`
        body {
          font-family: Arial, sans-serif;
          background-color: #f9f9fc;
          margin: 0;
          padding: 0;
        }

        .contact-page {
          max-width: 1100px;
          margin: 0 auto;
          padding: 40px 20px;
        }

        .contact-title {
          text-align: center;
          font-size: 36px;
          color: #222;
          margin-bottom: 10px;
        }

        .contact-subtitle {
          text-align: center;
          font-size: 16px;
          color: #555;
          margin-bottom: 40px;
        }

        .contact-container {
          display: flex;
          flex-wrap: wrap;
          gap: 30px;
          justify-content: space-between;
        }

        .contact-info, .contact-form {
          flex: 1 1 45%;
          background: #fff;
          padding: 25px;
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.08);
        }

        .contact-info h2, .contact-form h2 {
          font-size: 20px;
          margin-bottom: 20px;
          color: #b60000;
        }

        .contact-info ul {
          list-style: none;
          padding: 0;
        }

        .contact-info li {
          margin-bottom: 12px;
          font-size: 16px;
          color: #333;
        }

        .contact-info span {
          margin-right: 8px;
          font-size: 18px;
        }

        .contact-form form {
          display: flex;
          flex-direction: column;
        }

        .contact-form input,
        .contact-form textarea {
          margin-bottom: 15px;
          padding: 12px;
          font-size: 14px;
          border: 1px solid #ccc;
          border-radius: 6px;
          outline: none;
        }

        .contact-form textarea {
          resize: vertical;
          height: 120px;
        }

        .contact-form button {
          background-color: #b60000;
          color: white;
          padding: 12px;
          font-size: 16px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .contact-form button:hover {
          background-color: #990000;
        }
      `}</style>

      <div className="contact-page">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-subtitle">Get in touch with us for any queries or support. We're here to help!</p>

        <div className="contact-container">
          <div className="contact-info">
            <h2>Contact Information</h2>
            <ul>
              <li><span>📞</span> +91 9343603050</li>
              <li><span>📞</span> +91 8965821341</li>
              <li><span>📞</span> +91 7634011697</li>
              <li><span>📞</span> +91 8602220987</li>
              <li><span>📧</span> info@carrentalservice.com</li>
              <li><span>📍</span> 123 Car Rental Street, City Center, 400001</li>
            </ul>

            <h2>Business Hours</h2>
            <ul>
              <li><span>🕘</span> Monday - Friday: 9:00 AM - 8:00 PM</li>
              <li><span>🕘</span> Saturday - Sunday: 10:00 AM - 6:00 PM</li>
            </ul>
          </div>

          <div className="contact-form">
            <h2>Send us a Message</h2>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="tel" placeholder="Your Phone Number" required />
              <textarea placeholder="Your Message" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
