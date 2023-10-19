import React from "react";
import { projectInfo } from "./ProjectInfo";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <main id="projects">
      <section className="projects-info">
        <div className="projects-card">
          {projectInfo.map((i) => {
            const { name, tools, details } = projectInfo;
            return (
              <ProjectCard key={i} name={name} tools={tools} det={details} />
            );
          })}
        </div>
      </section>
    </main>
  );
}
