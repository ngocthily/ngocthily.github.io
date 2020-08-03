import React, { useState } from 'react';
import './projects.css';

import Proofs from '../../images/proofs_line_mockup.png';
import Huddle from '../../images/huddleup_mockup.png';
import Pacman from '../../images/pacman_mockup.png';

function Projects() {

    // Have the first project name be filled in as default
    function project1Enter() {
        var getProject1 = document.getElementsByClassName("project1");
        var getProject2 = document.getElementsByClassName("project2");
        var getProject3 = document.getElementsByClassName("project3");

        var project1Img = document.getElementsByClassName("proofs-img");
        var project2Img = document.getElementsByClassName("huddle-img");
        var project3Img = document.getElementsByClassName("pacman-img");

        (getProject1)[0].classList.remove("removeProject1");
        (getProject2)[0].classList.remove("turnProject2");
        (getProject3)[0].classList.remove("turnProject3");

        (project1Img)[0].classList.remove("removeImg");
        (project2Img)[0].classList.remove("showImg");
        (project3Img)[0].classList.remove("showImg");
    }

    function project2Enter() {
        var getProject1 = document.getElementsByClassName("project1");
        var getProject2 = document.getElementsByClassName("project2");
        var getProject3 = document.getElementsByClassName("project3");

        var project1Img = document.getElementsByClassName("proofs-img");
        var project2Img = document.getElementsByClassName("huddle-img");
        var project3Img = document.getElementsByClassName("pacman-img");

        (getProject1)[0].classList.add("removeProject1");
        (getProject2)[0].classList.add("turnProject2");
        (getProject3)[0].classList.remove("turnProject3");

        (project1Img)[0].classList.add("removeImg");
        (project2Img)[0].classList.add("showImg");
        (project3Img)[0].classList.remove("showImg");
    }

    function project3Enter() {
        var getProject1 = document.getElementsByClassName("project1");
        var getProject2 = document.getElementsByClassName("project2");
        var getProject3 = document.getElementsByClassName("project3");

        var project1Img = document.getElementsByClassName("proofs-img");
        var project2Img = document.getElementsByClassName("huddle-img");
        var project3Img = document.getElementsByClassName("pacman-img");

        (getProject1)[0].classList.add("removeProject1");
        (getProject2)[0].classList.remove("turnProject2");
        (getProject3)[0].classList.add("turnProject3");

        (project1Img)[0].classList.add("removeImg");
        (project2Img)[0].classList.remove("showImg");
        (project3Img)[0].classList.add("showImg");
    }

    function showProjectSummary() {
        var getProject1 = document.getElementsByClassName("project1");
        var getProject2 = document.getElementsByClassName("project2");
        var getProject3 = document.getElementsByClassName("project3");

        var getProject1Summary = document.getElementsByClassName("project1-summary");
        var getProject2Summary = document.getElementsByClassName("project2-summary");
        var getProject3Summary = document.getElementsByClassName("project3-summary");

        if (!getProject1[0].classList.value.includes("remove")) {
            (getProject1Summary)[0].classList.add("visible");
        } else if (getProject2[0].classList.value.includes("turn")) {
            (getProject2Summary)[0].classList.add("visible");
        } else if (getProject3[0].classList.value.includes("turn")) {
            (getProject3Summary)[0].classList.add("visible");
        }
    }

    function removeProjectSummary() {
        var getProject1Summary = document.getElementsByClassName("project1-summary");
        var getProject2Summary = document.getElementsByClassName("project2-summary");
        var getProject3Summary = document.getElementsByClassName("project3-summary");

        (getProject1Summary)[0].classList.remove("visible");
        (getProject2Summary)[0].classList.remove("visible");
        (getProject3Summary)[0].classList.remove("visible");
    }

    return (
        <div>
            <div className="projects">
                <div className="projects-left-side">
                    <div className="project1" onMouseEnter={project1Enter}>
                        Proofs Line
                    </div>
                    <div className="project2" onMouseEnter={project2Enter}>
                        huddleUp
                    </div>
                    <div className="project3" onMouseEnter={project3Enter}>
                        pacman
                    </div>
                </div>
                <div className="projects-right-side" onMouseEnter={showProjectSummary} onMouseLeave={removeProjectSummary}>
                    <div className="project1-img-container">
                        <img className="proofs-img" src={Proofs}/>
                    </div>
                    <div className="project1-summary">
                        <div className="project1-description">
                            A clone of Stack Overflow, but for mathematicans 
                        </div>
                        <div className="project1-tech">
                            React/redux, Ruby on Rails, HTML5, CSS3
                        </div>
                        <div className="project1-links">
                            <a href="https://proofs-line.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                <div className="project1-live-link">
                                    Live site
                            </div>
                            </a>
                            <a href="https://github.com/ngocthily/Proofs-Line" target="_blank" rel="noopener noreferrer">
                                <div className="project1-code-link">
                                    Code
                            </div>
                            </a>
                        </div>
                    </div>
                    <div className="project2-img-container">
                        <img className="huddle-img" src={Huddle} />
                    </div>
                    <div className="project2-summary">
                        <div className="project2-description">
                            A web application for users to host and/or find sporting events to attend
                        </div>
                        <div className="project2-tech">
                            React/redux, Node, Express, MongoDB, HTML5, CSS3 
                        </div>
                        <div className="project2-links">
                            <a href="http://huddleups.herokuapp.com/#/" target="_blank" rel="noopener noreferrer">
                                <div className="project2-live-link">
                                    Live site
                                </div>
                            </a>
                            <a href="https://github.com/jmiggs/huddleUP" target="_blank" rel="noopener noreferrer">
                                <div className="project2-code-link">
                                    Code
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="project3-img-container">
                        <img className="pacman-img" src={Pacman} />
                    </div>
                    <div className="project3-summary">
                        <div className="project3-description">
                            My verison of PAC-MAN using vanilla Javascript
                        </div>
                        <div className="project3-tech">
                            Javascript, HTML5, CSS3
                        </div>
                        <div className="project3-links">
                            <a href="https://ngocthily.com/pacman/" target="_blank" rel="noopener noreferrer">
                                <div className="project3-live-link">
                                    Live site
                                </div>
                            </a>
                            <a href="https://github.com/ngocthily/pacman" target="_blank" rel="noopener noreferrer">
                                <div className="project3-code-link">
                                    Code
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;