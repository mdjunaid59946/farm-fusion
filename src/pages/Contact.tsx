import React, { useState } from 'react';
import './Contact.css';
import axios from 'axios';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [statusMessage, setStatusMessage] = useState('');
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');

    try {
      // Replace YOUR_FORM_ID with your actual Formspree form ID
      const response = await axios.post(
        'https://formspree.io/f/mbljryjl',
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        setFormStatus('success');
        setStatusMessage('Your message has been sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setFormStatus('error');
        setStatusMessage('Failed to send your message. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setFormStatus('error');
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
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Enter your query here..."
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={formStatus === 'loading'}>
          {formStatus === 'loading' ? 'Sending...' : 'Send'}
        </button>
      </form>
      {statusMessage && (
        <p className={`status-message ${formStatus === 'error' ? 'error' : 'success'}`}>
          {statusMessage}
        </p>
      )}
    </div>
  );
};
