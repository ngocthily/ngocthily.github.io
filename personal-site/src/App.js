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

  window.addEventListener("scroll",  function() {scrollFunction()});

  function scrollFunction() {
    // clean up
    // navbar background color changes 
    console.log("here")
    if (document.documentElement.scrollTop > 40 && document.documentElement.scrollTop < 90) {
      var elmnt = document.getElementsByClassName("navbar");
      (elmnt)[0].classList.remove("background-black");
      (elmnt)[0].classList.add("background-purple");
    } else if (document.documentElement.scrollTop >= 90 && document.documentElement.scrollTop < 700) {
      var elmnt = document.getElementsByClassName("navbar");
      (elmnt)[0].classList.remove("background-purple");
      (elmnt)[0].classList.add("background-black");
    } else if (document.documentElement.scrollTop >= 900 && document.documentElement.scrollTop < 1400) {
      var elmnt = document.getElementsByClassName("navbar");
      (elmnt)[0].classList.remove("background-purple");
      (elmnt)[0].classList.add("background-black");
    } else if (document.documentElement.scrollTop >= 1500 && document.documentElement.scrollTop < 2000) {
      var elmnt = document.getElementsByClassName("navbar");
      (elmnt)[0].classList.remove("background-purple");
      (elmnt)[0].classList.add("background-black");
    } else if (document.documentElement.scrollTop >= 2200 && document.documentElement.scrollTop < 2750) {
      var elmnt = document.getElementsByClassName("navbar");
      (elmnt)[0].classList.remove("background-purple");
      (elmnt)[0].classList.add("background-black");
    } else if (document.documentElement.scrollTop >= 2750 && document.documentElement.scrollTop < 5000) {
      var elmnt = document.getElementsByClassName("navbar");
      (elmnt)[0].classList.remove("background-black");
      (elmnt)[0].classList.add("background-purple");
    } else {
      var elmnt = document.getElementsByClassName("navbar");
      (elmnt)[0].classList.remove("background-black");
      (elmnt)[0].classList.remove("background-purple");
    }
  }

  function dropdown() {
    var elmnt = document.getElementsByClassName("navbar-menu");
    (elmnt)[0].classList.toggle("show-dropdown");
  }
  return (
    <div className="App">
      <div className="navbar-container">
        <div className="navbar">
          <div className="navbar-projects" onClick={scrollToProjects}>PROJECTS</div>
          <div className="navbar-about" onClick={scrollToAbout}>ABOUT</div>
          <div className="navbar-skills" onClick={scrollToSkills}>SKILLS</div>
          <div className="navbar-contact" onClick={scrollToContact}>CONTACT</div>
        </div>
        <div className="navbar-menu-container">
          <div className="navbar-menu" onClick={dropdown}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
          <div className="dropdown-content">
            <li> Projects </li>
            <li> About </li>
            <li> Skills </li>
            <li> About </li>
          </div>
        </div>
      </div>
      <div className="header-container">
        <Header/>
      </div>
      <div className="splash-container">
        <Splash/>
      </div>
      <div className="projects-header-container">
        <div className="projects-header">
          Projects
        </div>
      </div>
      <div className="projects-container">
        <Projects/>
      </div>
      <div className="research-container">
        <Research/>
      </div>
      <div className="about-container">
        <About/>
      </div>
      <div className="skills-container">
        <Skills/>
      </div>
      <div className="contact-container">
        <Contact/>
      </div>
    </div>
  );
}

export default App;
