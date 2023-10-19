import React from "react";

export default function ProjectCard({ name, tools, det }) {
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
        <div className="live"></div>
        <div className="github"></div>
      </div>
    </div>
  );
}
