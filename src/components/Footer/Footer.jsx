import React from "react";
import "./Footer.css";
import Linkedin from "../../assets/Icons/Linkedin"
import Gmail from "../../assets/Icons/Gmail"
import Github from "../../assets/Icons/Github"
import Whatsapp from "../../assets/Icons/Whatsapp"

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
                <a href=""></a>
                <Github />
              </div>
              <div className="btn linkedin">

                <Linkedin />
              </div>
              <div className="btn gmail">
                <a href=""></a>

                <Gmail />
              </div>
              <div className="btn whatsapp">
                <a href=""></a>

                <Whatsapp />
              </div>
            </div>
            <p>
              <span>©</span> 2023 Chris Mbah. All Rights Reserved
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
