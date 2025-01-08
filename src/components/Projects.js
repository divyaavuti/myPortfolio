import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Attendance Tracking System',
      description:
        'A web application that enables instructors to monitor student attendance efficiently using QR codes and scanners. Provides detailed reports for classes and individual students.',
      techStack: 'React, Material UI, Firebase',
      link: 'https://attendance-tracking-weba-f327c.web.app/login',
    },
    {
      title: 'Campus Mart',
      description:
        'A platform for Purdue University students to buy and sell pre-owned products conveniently. Features a user-friendly interface and robust backend.',
      techStack: 'React, Bootstrap, Cloudinary, MongoDB',
      link: 'https://campusmart-purdue.vercel.app/',
    },
    {
      title: 'Artificial Intelligent Voice Assistant',
      description:
        'Developed a voice assistant that captures audio, converts speech to text, and generates English audio files with playback using Python.',
      techStack: 'Python, GTTS, Playsound',
      link: '#', // Replace with an actual link if available
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Tech Stack:</strong> {project.techStack}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
