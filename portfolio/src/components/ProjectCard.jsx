import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <div className="card shadow-sm">
      <img
        src={project.image}
        alt={project.title}
        className="card-img-top"
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{project.title}</h5>
        <p className="card-text">{project.description}</p>
        <Link to={`/project/${project.id}`} className="btn btn-primary">
          Scopri di più
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
