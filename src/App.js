import React from 'react';
import './App.css';

import Header from './myComponents/header/header';
import Splash from './myComponents/splash/splash';
import Projects from './myComponents/projects/projects';
// import Research from './myComponents/research/research';
import About from './myComponents/about/about';
import Skills from './myComponents/skills/skills';
import Contact from './myComponents/contact/contact';

function App() {

  function scrollToProjects() {
    var elmnt = document.getElementsByClassName("projects-container");
    (elmnt)[0].scrollIntoView({ behavior: "smooth" });
  }

  function scrollToAbout() {
    var elmnt = document.getElementsByClassName("about-container");
    (elmnt)[0].scrollIntoView({ behavior: "smooth" });
  }

  function scrollToSkills() {
    var elmnt = document.getElementsByClassName("skills-container");
    (elmnt)[0].scrollIntoView({ behavior: "smooth" });
  }

  function scrollToContact() {
    var elmnt = document.getElementsByClassName("contact-container");
    (elmnt)[0].scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="app">

      <div className="navbar-container">
        <div className="navbar">
          <div className="navbar-first-half">
            <div className="navbar-projects" onClick={scrollToProjects}>
              Projects
            </div>
            <div className="navbar-about" onClick={scrollToAbout}>
              About
            </div>
          </div>
          <div className="navbar-second-half">
            <div className="navbar-skills" onClick={scrollToSkills}>
              Skills
            </div>
            <div className="navbar-contact" onClick={scrollToContact}>
              Contact
            </div>
          </div>
        </div>
      </div>

      <div className="header-container">
        <Header/>
      </div>

      <div className="splash-container">
        <Splash/>
      </div>

      <div className="arrow" onClick={scrollToProjects}>
        V
      </div>

      <div className="projects-container">
        <Projects />
      </div>

      <div className="arrow" onClick={scrollToAbout}>
        V
      </div>

      {/* <div className="research-container">
        <Research />
      </div> */}

      <div className="about-container">
        <About />
      </div>

      <div className="arrow" onClick={scrollToSkills}>
        V
      </div>

      <div className="skills-container">
        <Skills />
      </div>

      <div className="arrow" onClick={scrollToContact}>
        V
      </div>

      <div className="contact-container">
        <Contact />
      </div>

      <div className="copyright-container">
        <div className="copyright">
          © 2020 Ngoc Thi Ly
        </div>
      </div>
    </div>
  );
}

export default App;
