import React from "react";
import "../styles/ProjectsCard.css";

function ProjectsCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-image-container">
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
          onError={(e) => {
            e.target.src = "/logo192.png"; // Fallback image
          }}
        />
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        {project.links ? (
          <div className="project-links">
            {project.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.name}
              </a>
            ))}
          </div>
        ) : (
          <a
            href={project.link}
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Details →
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectsCard;
