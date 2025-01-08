import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <p>
        I'd love to hear from you! Whether you have a question, a project, or just want to say hi,
        feel free to reach out.
      </p>
      <div className="contact-info">
        <a href="mailto:divyaavuti.da@gmail.com" target="_blank" rel="noopener noreferrer">
          divyaavuti.da@gmail.com
        </a>
        <a
          href="https://linkedin.com/in/divya-avuti"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn Profile
        </a>
        <a
          href="https://github.com/divyaavuti"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </section>
  );
};

export default Contact;
