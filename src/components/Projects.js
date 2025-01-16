import React from 'react';
import '../styles/Projects.css';
import campusmart from '../assets/campusmart.png';
import ats from '../assets/ats.png';
import notes from '../assets/notes.png';
import db from '../assets/db.png';

const projectsData = [
  {
    id: 1,
    image: ats,
    title: 'Attendance Tracking System',
    description: 'Monitor student attendance using QR codes and scanners.',
    github: 'https://github.com/yourusername/attendance-tracking',
    live: 'https://attendance-tracking-weba-f327c.web.app/login',
  },
  {
    id: 2,
    image: campusmart,
    title: 'Campus Mart',
    description: 'A platform for Purdue students to buy and sell pre-owned products.',
    github: 'https://github.com/yourusername/campus-mart',
    live: 'https://campusmart-purdue.vercel.app/',
  },
  {
    id: 3,
    image: notes,
    title: 'Notes App',
    description: 'Create, edit, and delete notes with a simple and powerful UI.',
    github: 'https://github.com/yourusername/notes-app',
    live: '#',
  },
  {
    id: 4,
    image: db,
    title: 'DustBuddies',
    description: 'Manage household tasks with a scheduler and organizer.',
    github: 'https://github.com/yourusername/dustbuddies',
    live: '#',
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
            <div className="project-overlay">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  Live Site
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
