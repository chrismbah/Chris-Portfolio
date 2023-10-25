import { useState, useEffect } from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // const [active, setActive] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    function scrollNav() {
      setIsScrolled(window.scrollY > 10);
      setIsOpen(false);
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
              <NavLink to="/" exact>chris.</NavLink>
            </p>
          </div>
          <div className={`links ${isOpen ? "open-links" : ""}`}>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/skills">Skills</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/contact">Contact</NavLink>
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
