import React from 'react';
import './App.css';

import Header from './myComponents/header/header';
import Splash from './myComponents/splash/splash';
import Projects from './myComponents/projects/projects';
import Research from './myComponents/research/research';
import About from './myComponents/about/about';
import Skills from './myComponents/skills/skills';
import Contact from './myComponents/contact/contact';

function App() {

  return (
    <div className="app">

      <div className="navbar-container">
        <div className="navbar">
          <div className="navbar-first-half">
            <div className="navbar-projects">
              Projects
            </div>
            <div className="navbar-about">
              About
            </div>
          </div>
          <div className="navbar-second-half">
            <div className="navbar-skills">
              Skills
            </div>
            <div className="navbar-contact">
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

      <div className="arrow" >
        V
      </div>

      <div className="projects-container">
        <Projects />
      </div>

      <div className="research-container">
        <Research />
      </div>

      {/* <div className="arrow" >
        V
      </div> */}

      <div className="about-container">
        <About />
      </div>

      {/* <div className="arrow" >
        V
      </div> */}

      <div className="skills-container">
        <Skills />
      </div>

      <div className="contact-container">
        <Contact />
      </div>
    </div>
  );
}

export default App;
