import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer" >
      <p>© {new Date().getFullYear()} Divya Avuti. All Rights Reserved.</p>
      <div className="footer-links">
        <a href="https://linkedin.com/in/divya-avuti" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://github.com/divya" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="mailto:divyaavuti.da@gmail.com">Email</a>
      </div>
    </footer>
  );
};

export default Footer;
