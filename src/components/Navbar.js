import React, { useEffect, useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observerOptions = {
      root: null, // Use viewport as root
      rootMargin: '0px',
      threshold: 0.5, // Trigger when 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleScrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/logo.png" alt="Logo" className="logo-icon" /> {/* Replace with your logo */}
      </div>
      <ul className="nav-links">
        <li>
          <button
            className={activeSection === 'home' ? 'active' : ''}
            onClick={() => handleScrollToSection('home')}
          >
            Home
          </button>
        </li>
        <li>
          <button
            className={activeSection === 'about' ? 'active' : ''}
            onClick={() => handleScrollToSection('about')}
          >
            About
          </button>
        </li>
        <li>
          <button
            className={activeSection === 'skills' ? 'active' : ''}
            onClick={() => handleScrollToSection('skills')}
          >
            Skills
          </button>
        </li>
        <li>
          <button
            className={activeSection === 'projects' ? 'active' : ''}
            onClick={() => handleScrollToSection('projects')}
          >
            Projects
          </button>
        </li>
        <li>
          <button
            className={activeSection === 'contact' ? 'active' : ''}
            onClick={() => handleScrollToSection('contact')}
          >
            Contact
          </button>
        </li>
      </ul>
      <div className="theme-toggle">
        <i className="fa fa-moon-o"></i> {/* Add light/dark mode toggle functionality here */}
      </div>
    </nav>
  );
};

export default Navbar;
