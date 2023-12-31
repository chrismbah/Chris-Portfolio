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
          <p><div className="header-bar"></div>Stuffs I've cooked so far</p>
        </div>
        <div className="project-cards">
          {projectInfo.map((info, i) => {
            const { name, tools, details, liveLink, githubLink } = info;
            return (
              <ProjectCard
                key={i}
                name={name}
                tools={tools}
                det={details}
                live={liveLink}
                github = {githubLink}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}
