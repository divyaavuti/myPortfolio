import React, { useRef } from 'react';
import '../styles/Skills.css';
import { FaCode, FaDatabase, FaTools, FaReact, FaCogs } from 'react-icons/fa';

const Skills = () => {
  const carouselRef = useRef(null);

  const skillsData = [
    {
      icon: <FaCode />,
      title: 'Programming Languages',
      details: ['Java', 'Python', 'JavaScript (TypeScript)', 'PHP', 'C++', 'HTML', 'CSS'],
    },
    {
      icon: <FaReact />,
      title: 'Frameworks & Libraries',
      details: ['React', 'Django', 'Bootstrap', 'MUI', 'Firebase Realtime', 'Express.js'],
    },
    {
      icon: <FaDatabase />,
      title: 'Databases',
      details: ['MySQL', 'MongoDB', 'Microsoft SQL Server'],
    },
    {
      icon: <FaTools />,
      title: 'Tools & Platforms',
      details: ['GitHub', 'Jira', 'VS Code', 'Postman'],
    },
    {
      icon: <FaCogs />,
      title: 'Other Technologies',
      details: ['ColdFusion', 'Redux', 'Sass/SCSS', 'REST APIs'],
    },
  ];

  const scroll = (direction) => {
    const cardWidth = 300; // Width of each card (adjust if card size changes)
    const gap = 20; // Gap between cards
    const scrollAmount = cardWidth + gap;

    carouselRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="skills" id="skills">
      <h2>My Skills</h2>
      <div className="carousel-container">
        <button className="carousel-arrow left-arrow" onClick={() => scroll('left')}>
          &#8249;
        </button>
        <div className="carousel" ref={carouselRef}>
          {skillsData.map((skill, index) => (
            <div className="carousel-card" key={index}>
              <div className="skill-icon">{skill.icon}</div>
              <h3 className="skill-title">{skill.title}</h3>
              <ul className="skill-details">
                {skill.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <button className="carousel-arrow right-arrow" onClick={() => scroll('right')}>
          &#8250;
        </button>
      </div>
    </section>
  );
};

export default Skills;
