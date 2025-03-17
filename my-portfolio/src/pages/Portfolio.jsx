import React from 'react';
import Project from '../components/Project';

const Portfolio = () => {
  // Array of project objects
  const projects = [
    {
      image: "./my-portfolio/my-portfolio/src/assets/project1.jpg",
      title: "Project 1",
      deployedLink: "https://deployed-app1.com",
      githubLink: "https://github.com/username/project1"
    },
    {
      image: "/path/to/project2-image.jpg",
      title: "Project 2",
      deployedLink: "https://deployed-app2.com",
      githubLink: "https://github.com/username/project2"
    },
    {
      image: "/path/to/project3-image.jpg",
      title: "Project 3",
      deployedLink: "https://deployed-app3.com",
      githubLink: "https://github.com/username/project3"
    },
    {
      image: "/path/to/project4-image.jpg",
      title: "Project 4",
      deployedLink: "https://deployed-app4.com",
      githubLink: "https://github.com/username/project4"
    },
    {
      image: "/path/to/project5-image.jpg",
      title: "Project 5",
      deployedLink: "https://deployed-app5.com",
      githubLink: "https://github.com/username/project5"
    }
  ];

  return (
    <section id="portfolio">
      <h2>My Portfolio</h2>
      <div className="projects">
        {/* Loop through the array of projects and render a Project component for each */}
        {projects.map((project, index) => (
          <Project
            key={index}
            image={project.image}
            title={project.title}
            deployedLink={project.deployedLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
