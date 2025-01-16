import React, { useState } from 'react';
import '../styles/Contact.css';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaDownload } from 'react-icons/fa';
//import ResumePDF from '../assets/Avuti_resume.pdf';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_q1i2pof', // Replace with your EmailJS service ID
        'template_d1qzd14', // Replace with your EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        'T1HY6pE67H12yWnX6' // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(true);
          setError(false);
          setFormData({ name: '', email: '', message: '' }); // Reset form
          setTimeout(() => {
            setIsSent(false);
          }, 5000);
        },
        (error) => {
          console.error(error.text);
          setError(true);
           // Hide the error message after 5 seconds
        setTimeout(() => {
          setError(false);
        }, 5000);
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <div className="contact-container">
        {/* Left Column - Contact Form */}
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>

            <button type="submit" className="submit-button">
              Send
            </button>
          </form>
          {isSent && <p className="success-message">Message sent successfully!</p>}
          {error && <p className="error-message">Failed to send message. Please try again.</p>}
        </div>

        {/* Right Column - Contact Details */}
        <div className="contact-details">
          <h3>Let’s Get in Touch</h3>
          <ul>
            <li>
              <FaLinkedin className="icon" />{' '}
              <a href="https://www.linkedin.com/in/divya-avuti" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <FaGithub className="icon" />{' '}
              <a href="https://github.com/divyaavuti" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <FaDownload className="icon" />{' '}
              <a href='/Avuti_Resume.pdf' download="Divya_Resume.pdf">
                Download Resume
              </a>
            </li>
            <li>
              <FaInstagram className="icon" />{' '}
              <a href="https://instagram.com/divya_avuti" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <FaEnvelope className="icon" />{' '}
              <a href="mailto:divyaavuti.da@gmail.com">divyaavuti.da@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
