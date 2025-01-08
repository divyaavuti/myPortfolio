import React, { useEffect, useState, useRef } from 'react';
import '../styles/Skills.css';
import { FaCode, FaDatabase, FaTools, FaReact, FaCogs } from 'react-icons/fa';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="skills" id="skills" ref={sectionRef}>
      <h2 className={`skills-heading ${isVisible ? 'zoom-in' : ''}`}>My Skills</h2>
      <div className={`skills-grid ${isVisible ? 'zoom-in' : ''}`}>
        {skillsData.map((skill, index) => (
          <div className={`skill-card ${isVisible ? 'zoom-in' : ''}`} key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <h3 className="skill-title">{skill.title}</h3>
            <ul className="skill-list">
              {skill.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
