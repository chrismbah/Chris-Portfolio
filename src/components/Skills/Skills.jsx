import React from "react";
import "./Skills.css";
import html from "../../assets/skills/html.svg";
import css from "../../assets/skills/css.svg";
import js from "../../assets/skills/js.svg";
import ts from "../../assets/skills/ts-icon.svg";
import react from "../../assets/skills/react.svg";
import tailwind from "../../assets/skills/tailwind.svg";
import git from "../../assets/skills/git.svg";
import github from "../../assets/skills/github.svg";
import vercel from "../../assets/skills/vercel.svg";
import vite from "../../assets/skills/vite.svg";
import python from "../../assets/skills/python.svg";
import vscode from "../../assets/skills/vscode.svg";
import pycharm from "../../assets/skills/pycharm.svg";

export default function Skills() {
  return (
    <main id="skills">
      <section className="skills-info" id="skills">
        <div className="header">
          <h2>My Skills</h2>
        </div>
        <div className="lang">
          <h3>
            <div className="bar"></div>Languages
          </h3>
          <div className="icons">
            <div className="icon html">
              <img src={html} alt="html" />
              <p>HTML</p>
            </div>
            <div className="icon css">
              <img src={css} alt="css" />
              <p>CSS</p>
            </div>
            <div className="icon js">
              <img src={js} alt="js" />
              <p>JavaScript</p>
            </div>

            <div className="icon ts">
              <img src={ts} alt="ts" />
              <p>TypeScript</p>
            </div>
            <div className="icon python">
              <img src={python} alt="python" />
              <p>Python</p>
            </div>
          </div>
        </div>
        <div className="frameworks">
          <h3>
            <div className="bar"></div>Frameworks
          </h3>
          <div className="icons">
            <div className="icon react">
              <img src={react} alt="react" />
              <p>React</p>
            </div>
            <div className="icon tailwind">
              <img src={tailwind} alt="tailwind" />
              <p>Tailwind</p>
            </div>
          </div>
        </div>
        <div className="tools">
          <h3>
            {" "}
            <div className="bar"></div>Tools
          </h3>
          <div className="icons">
            <div className="icon git">
              <img src={git} alt="git" />
              <p>Git</p>
            </div>
            <div className="icon github">
              <img src={github} alt="github" />
              <p>Github</p>
            </div>
            <div className="icon vercel">
              <img src={vercel} alt="vercel" />
              <p>Vercel</p>
            </div>
            <div className="icon vite">
              <img src={vite} alt="vite" />
              <p>Vite</p>
            </div>
            <div className="icon vscode">
              <img src={vscode} alt="vite" />
              <p>VS Code</p>
            </div>
            <div className="icon pycharm">
              <img src={pycharm} alt="vite" />
              <p>PyCharm</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
