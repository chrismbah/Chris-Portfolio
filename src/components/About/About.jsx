import React from "react";
import aboutImg from "../../assets/img/img1.jpg";
import "./About.css";
import { Link } from "react-router-dom";
export default function About() {
  return (
    <main id="about">
      <section className="about-info">
        <div className="header">
          <h2>
            About <span>Me</span>
          </h2>
          <p>
            <div className="header-bar"></div>Who I Am And What I Do
          </p>
        </div>
        <div className="about-det">
          <div className="about-img">
            <img src={aboutImg} alt="chris" />
          </div>
          <div className="about-text">
            <div className="info">
              <p>
                I'm a dedicated Software Engineer based in Lagos, Nigeria
                experienced in JavaScript, TypeScript, React JS and various
                frameworks and technologies passionate about creating innovative
                solutions through code.
              </p>
              <p>
                I collaborate with cross-functional teams to deliver
                high-quality, scalable software applications that exceed user
                expectations.
              </p>
              <p>
                When I'm not coding, you can often find me playing chess,
                watching anime, reading manga or simply enjoying a good cup of
                coffee.
              </p>
              <p className="last">
                <label>
                  <Link to="mailto:chrismbah4622@gmail.com">Get in touch</Link>
                </label>
                , and let's create something amazing!
              </p>
            </div>
            <div className="about-contact">
              <button className="contact-btn">
                <Link to="">View Resumé</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
