import React from 'react';
import '../styles/About.css';
import aboutImage from '../assets/about.jpeg'; // Replace with your image

const About = () => {
  return (
    <section className="about" id="about">
      <h2>About</h2>
      <div className="about-container">
        <div className="about-image">
          <img src={aboutImage} alt="About Me" />
        </div>
        <div className="about-text">
          <h3>Hello</h3>
          <p>
          I am a passionate and driven software engineer, currently pursuing my Master's degree in Computer Science at Purdue Fort Wayne. With a strong foundation in programming and a curiosity for innovation, I thrive on solving complex problems and creating impactful solutions. My journey has been fueled by a love for technology and a desire to make a difference through my work.
          <br /> <br />
          I believe in continuous learning and embracing challenges as opportunities for growth. Outside of coding, I enjoy exploring creative pursuits, connecting with people, and learning from diverse perspectives. My goal is to contribute meaningfully to the tech community by building solutions that enhance lives and foster progress.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
