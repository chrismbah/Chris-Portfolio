/* eslint-disable react/no-unescaped-entities */
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
            return (
              <ProjectCard
                key={i}
                {...info}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}
