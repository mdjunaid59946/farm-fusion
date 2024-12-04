import React, { useState } from 'react';
import './Contact.css';
import axios from 'axios';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    query: '',
  });
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/send-mail', formData);
      if (response.status === 200) {
        setStatusMessage('Your message has been sent successfully!');
      } else {
        setStatusMessage('Failed to send your message. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setStatusMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="query"
          placeholder="Enter your query here..."
          value={formData.query}
          onChange={handleChange}
          required
        />
        <button type="submit">Send</button>
      </form>
      {statusMessage && <p className="status-message">{statusMessage}</p>}
    </div>
  );
};
