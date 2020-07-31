import React from 'react';
import './projects.css';

import Proofs from '../../images/proofs_line_mockup.png';
import Huddle from '../../images/huddleup_mockup.png';
import Pacman from '../../images/pacman_mockup.png';

function Projects() {
    return (
        <div>
            <div className="projects">
                <div className="projects-header">
                    Projects
                </div>
                <div className="project1">
                    <div className="project1-img-container">
                        <img className="project1-img" src={Proofs}/>
                    </div>
                    <div className="project1-summary">
                        <div className="project1-name">
                            Proofs Line
                        </div>
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
                </div>
                <div className="project2">
                    <div className="project2-img-container">
                        <img className="project2-img" src={Huddle} />
                    </div>
                    <div className="project2-summary">
                        <div className="project2-name">
                            huddleUp
                        </div>
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
                </div>
                <div className="project3">
                    <div className="project3-img-container">
                        <img className="project3-img" src={Pacman} />
                    </div>
                    <div className="project3-summary">
                        <div className="project3-name">
                            pacman
                        </div>
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