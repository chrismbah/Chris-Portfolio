import React from "react";
import { projectInfo } from "./ProjectInfo";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

export default function Projects() {
  return (
    <main id="projects">
      <section className="projects-info">
        <div className="header">
          <h2>My Projects</h2>
          <p>Stuffs I've cooked so far</p>
        </div>
        <div className="project-cards">
          {projectInfo.map((info, i) => {
            const { name, tools, details } = info;
            return (
              <ProjectCard key={i} name={name} tools={tools} det={details} />
            );
          })}
        </div>
      </section>
    </main>
  );
}
