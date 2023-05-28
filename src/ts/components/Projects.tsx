import React from 'react';
import '../../css/Projects.css';

interface Project {
  name: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

interface Props {
  projects: Project[];
}

const Projects: React.FC<Props> = ({ projects }) => {
  return (
    <div className="portfolio">
      <h2>Check out some of my projects</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="projectLink">
              <img src={project.imageUrl} alt={project.name} />
              <h3>{project.name}</h3>
            </a>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
