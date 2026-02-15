import "./ProjectCard.css";
import { projectsList } from "../../assets/assets";

const ProjectCard = () => {
  return (
    <div className="project-wrapper">
      {projectsList.map((project) => (
        <div key={project.id} className="project-card">
          <img
            src={project.image}
            alt={project.title}
            className="project-image"
          />

          <h2 className="project-title">{project.title}</h2>

          <p className="project-description">{project.description}</p>

          <div className="technologies">
            {project.technologies.map((tech, index) => (
              <span key={index} className="technology">
                {tech}
              </span>
            ))}
          </div>

          <div className="project-links">
            {project.demo && (
              <a href={project.demo} className="btn demo-btn">
                <i className="bx bxl-demo" title="Demo"></i> Demo
              </a>
            )}
            {project.gitHub && (
              <a href={project.gitHub} className="btn git-btn">
                <i className="bx bx-link-external" title="GitHub"></i> GitHub
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
