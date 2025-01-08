import React, { useState, useEffect } from 'react';
import '../styles/hero.css';
import profileImage from '../assets/profile.jpg'; // Replace with your image

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150); // Typing speed in ms
  const titles = [
    'Backend Developer',
    'Frontend Developer',
    'Full-Stack Developer',
    'Software Engineer',
  ];

  useEffect(() => {
    const handleTyping = () => {
      const currentTitle = titles[loopNum % titles.length];
      if (isDeleting) {
        setText(currentTitle.substring(0, text.length - 1));
        setTypingSpeed(50); // Faster when deleting
      } else {
        setText(currentTitle.substring(0, text.length + 1));
        setTypingSpeed(70); // Slower when typing
      }

      if (!isDeleting && text === currentTitle) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1); // Move to the next title
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, typingSpeed, titles, loopNum]);

  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <h1>
          Hi <br />
          I'm <span>Divya Avuti</span> <br />
        </h1>
        <span className="dynamic-title">{text}</span>
        <span className="blinking-cursor">|</span>
        <p></p>
        <a href="#contact" className="hero-button">Contact Me</a>
      </div>
      <div className="hero-image">
        <img src={profileImage} alt="Divya" />
      </div>
    </section>
  );
};

export default Hero;
