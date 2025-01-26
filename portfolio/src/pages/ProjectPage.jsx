import React from "react";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/ProjectData";

const ProjectsPage = () => {
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">I Miei Progetti</h1>
      <div className="row">
        {projects.map((project) => (
          <div className="col-12 col-md-6 col-lg-4 mb-4" key={project.id}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
