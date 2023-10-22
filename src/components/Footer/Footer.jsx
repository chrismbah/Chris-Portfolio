import React from "react";
import "./Footer.css";
import Linkedin from "../../assets/Icons/Linkedin"
import Gmail from "../../assets/Icons/Gmail"
import Github from "../../assets/Icons/Github"

export default function Footer() {
  return (
    <div className="footer">
      <main id="footer">
        <section className="footer-info">
          <div className="text">
            <div className="logo">
              <p>
                <a href="#">chris.</a>
              </p>
            </div>
            <div className="links">
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
            </div>
            <div className="home-links">
              <div className="btn github">
                <Github />
              </div>
              <div className="btn linkedin">
                <Linkedin />
              </div>
              <div className="btn gmail">
                <Gmail />
              </div>
            </div>
            <p>
              <span>©</span> Chris Mbah 2023. All Rights Reserved
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
