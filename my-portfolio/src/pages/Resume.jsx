import React from 'react';

const Resume = () => {
  return (
    <section id="resume">
      <h2>My Resume</h2>
      <a href="/path/to/resume.pdf" download>Download My Resume</a>
      <ul>
        <li>Proficiency 1</li>
        <li>Proficiency 2</li>
        {/* List your skills here */}
      </ul>
    </section>
  );
};

export default Resume;
