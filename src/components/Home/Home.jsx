import React, { useEffect, useState } from "react";
import "./Home.css";
import Illustration from "../../assets/Illustration2.svg";
import Linkedin from "../../assets/Icons/Linkedin";
import Gmail from "../../assets/Icons/Gmail";
import Github from "../../assets/Icons/Github";
import NavUp from "../../assets/Icons/NavUp";
import { Typewriter } from "react-simple-typewriter";
import { gmailLink, githubLink, linkedinLink } from "../../helper/links"


export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY > 10);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="home">
      <div className="home-text">
        <h1>Hey👋, I'm</h1>
        <h1 className="name">
          Chris Mbah <div className="bar"></div>
        </h1>
        <h2>
          <span>
            <Typewriter
              words={["Software Engineer.", "Web Developer.", "Problem Solver"]}
              loop={4}
              cursor={typing}
              typeSpeed={150}
              deleteSpeed={100}
              delaySpeed={2000}
              onLoopDone={() => setTyping(false)}
            />
          </span>

          <label className="cursor"></label>
        </h2>
        <div className="info">
          <p>I transform your concepts into reality.</p>
        </div>
        <div className="home-links">
          <div className="btn github">
            <a href={githubLink}>
              <Github />
            </a>
          </div>
          <div className="btn linkedin">
            <a href={linkedinLink}>
              <Linkedin />
            </a>
          </div>
          <div className="btn gmail">
            <a href={gmailLink}>
              <Gmail />
            </a>
          </div>
        </div>
      </div>
      <div className="home-img">
        <img src={Illustration} />
      </div>
      <button className={`nav-up ${isVisible ? "nav-visible" : ""}`}>
        <a href="#">
          <NavUp />
        </a>
      </button>
    </section>
  );
}
