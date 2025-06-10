import React from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Skils from "./Components/Skils";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Nav from "./Components/Nav";
import { Element } from "react-scroll";

function App(props) {
  return (
    <div>
      <Element name="home">
        <Home />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="skils">
        <Skils />
      </Element>
      <Element name="projects">
        <Project />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </div>
  );
}

export default App;
