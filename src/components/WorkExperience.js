import React, { useEffect, useRef } from 'react';
import '../styles/WorkExperience.css';

const WorkExperience = () => {
  const experienceContainerRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null, // Use the viewport as the root
      threshold: 0.1, // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        } else {
          entry.target.classList.remove('animate');
        }
      });
    }, observerOptions);

    const rows = experienceContainerRef.current.querySelectorAll('.experience-row');
    rows.forEach((row) => observer.observe(row));

    return () => {
      rows.forEach((row) => observer.unobserve(row));
    };
  }, []);

  const experienceData = [
    {
      id: 1,
      company: 'Prodapt',
      role: 'Associate Software Engineer',
      location: 'Hyderabad, India',
      duration: 'November 2021 - August 2024',
      description: `
        - Developed and deployed microservices for data encryption and randomization, securing sensitive personal information.
        - Built a centralized telecom infrastructure management tool, reducing manual effort by 30%.
        - Automated raw data processing using stored procedures, encrypting fields, and generating structured CSV files.
      `,
    },
    {
      id: 2,
      company: 'Prodapt',
      role: 'Software Engineering Intern',
      location: 'Hyderabad, India',
      duration: 'April 2021 - November 2021',
      description: `
        - Designed and developed a user-friendly Hotel Management System website for managing bookings.
        - Leveraged PHP, HTML, CSS, and JavaScript to deliver a functional and efficient platform.
      `,
    },
  ];

  return (
    <section className="work-experience" id="work-experience">
      <h2>Work Experience</h2>
      <div className="experience-container" ref={experienceContainerRef}>
        {experienceData.map((exp) => (
          <div key={exp.id} className="experience-row">
            <div className="experience-year">{exp.duration}</div>
            <div className="experience-details">
              <h3>{exp.company}</h3>
              <p className="location">{exp.location}</p>
              <p className="role">{exp.role}</p>
              <p className="description">{exp.description}</p>
              {/* <button className="details-button">Details</button> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
