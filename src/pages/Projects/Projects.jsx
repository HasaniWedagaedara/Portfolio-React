import React from 'react'
import "./Projects.css"
import ProjectCard from '../../components/ProjectCard/ProjectCard'

const Projects = () => {
  return (
    <div id="projects" className='container'>
      <h1 className="subtitle">
        Featured <span className="highlight">Projects</span>
      </h1>
      <ProjectCard />
    </div>
  );
}

export default Projects
