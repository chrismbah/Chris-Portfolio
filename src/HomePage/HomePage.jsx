import React from "react";
import Nav from "../components/Nav/Nav";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

export default function HomePage() {
  return (
    <div className="content">
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
