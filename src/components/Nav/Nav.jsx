import { useState, useEffect } from "react";
import "./Nav.css";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };



  useEffect(() => {
    function scrollNav() {
      setIsScrolled(window.scrollY > 10);
      setIsOpen(false)
    }
    window.addEventListener("scroll", scrollNav);
    return () => {
      window.removeEventListener("scroll", scrollNav);
    };
  }, []);
  return (
    <>
      <div className={`nav ${isScrolled ? "nav-scroll" : ""}`}>
        <div className={`nav-info ${isScrolled ? "nav-info-scrolled" : ""}`}>
          <div className="logo">
            <p>
              <a href="#">chris.</a>
              </p>
          </div>
          <div className={`links ${isOpen ? "open-links" : ""}`}>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          <div
            className={`hamburger-menu ${isOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </div>
    </>
  );
}
