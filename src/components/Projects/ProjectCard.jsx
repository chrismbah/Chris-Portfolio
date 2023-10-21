import React from "react";
import Github from "../../assets/Icons/Github";
import Link from "../../assets/Icons/Link";
export default function ProjectCard({ name, tools, det, live, github }) {
  return (
    <div className="project-card">
      <h3>{name}</h3>
      <div className="project-tools">
        {tools.map((tool, i) => {
          return (
            <div key={i} className="tool-card">
              {tool}
            </div>
          );
        })}
      </div>
      <div className="project-info">
        <p>{det}</p>
      </div>
      <div className="project-icons">
        <div className="live">
          <p>
            <a href={live}>
              Live <Link />
            </a>
          </p>
        </div>
        <div className="github">
          <p>
            <a href={github}>
              Github <Github />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
