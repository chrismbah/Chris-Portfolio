import React from "react";
import aboutImg from "../../assets/img/img1.jpg";
import "./About.css";

export default function About() {
  return (
    <>
      <div className="header">
        <h2>
          About <span>Me</span>
        </h2>
      </div>
      <section className="about-info">
        <div className="about-img">
          <img src={aboutImg} alt="chris" />
        </div>
        <div className="about-text">
          <div className="info">
            <p>
              Hello! I'm Chris Mbah, a passionate Software Engineer based in
              Lagos, Nigeria. I specialize in Front-End Development, with a
              particular focus on HTML/CSS, JavaScript, React, TypeScript and a
              wide array of cutting-edge frameworks and technologies.
            </p>
            <p>
              When I'm not coding or designing, you can often find me playing
              chess, watching anime, reading manga or simply enjoying a good cup
              of coffee.
            </p>
            <p className="last">
              Get in touch, and let's create something amazing!
            </p>
          </div>
          <div className="about-contact">
            <button className="contact-btn">
              <a href="">Contact Me</a>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
