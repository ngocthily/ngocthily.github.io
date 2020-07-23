import React from 'react';
import './projects.css';

import Git from '../../images/git.png';
import ProofsLine from '../../images/proofs-line.png';
import Huddleup from '../../images/huddleup.png';
import Pacman from '../../images/pacman.png';

function Projects() {
    return (
    <div>
        <div className="projects">
            <div className="project1-2-container">
                <div className="project1-container">
                    <a className="git-img-link" href="https://github.com/ngocthily/Proofs-Line" target="_blank">
                        <img className="git-img" src={Git} />
                    </a>
                    <a className="proofs-line-link" href="https://proofs-line.herokuapp.com/#/" target="_blank">
                        <div className="project1">
                            <div className="project1-description-tech-container">
                                <div className="project1-description">
                                        A clone of Stack Overflow, but for mathematicans 
                                </div>
                                <div className="project1-tech">
                                    React/redux, Ruby on Rails, HTML5, CSS3
                                </div>
                            </div>
                            <div className="project1-name">
                                Proofs Line
                            </div>
                        </div>
                        <div className="project1-overlay">
                            <img className="proofs-line-img" src={ProofsLine}/>
                        </div>
                    </a>
                </div>
                <div className="project2-container">
                    <a href="https://github.com/jmiggs/huddleUP" target="_blank">
                        <img className="git-img" src={Git} />
                    </a>
                    <a className="git-img-link" href="https://huddleups.herokuapp.com/#/" target="_blank">
                        <div className="project2">
                            <div className="project2-description-tech-container">
                                <div className="project2-description">
                                    A web app for users to host / find sporting events to attend
                                </div>
                                <div className="project2-tech">
                                    React/redux, Node, Express, MongoDB, HTML5, CSS3 
                                </div>
                            </div>
                            <div className="project2-name">
                                huddleUp
                            </div>
                        </div>
                        <div className="project2-overlay">
                            <img className="huddleup-img" src={Huddleup} />
                        </div>
                    </a>
                </div>
            </div>
            <div className="project3-container">
                <a href="https://github.com/ngocthily/pacman" target="_blank">
                    <img className="git-img" src={Git} />
                </a>
                <a className="git-img-link" href="https://ngocthily.com/pacman/" target="_blank">
                    <div className="project3">
                        <div className="project3-description-tech-container">
                            <div className="project3-description">
                                My verison of PAC-MAN using vanilla Javascript
                            </div>
                            <div className="project3-tech">
                                Javascript, HTML5, CSS3
                            </div>
                        </div>
                        <div className="project3-name">
                            pacman
                        </div>
                    </div>
                    <div className="project3-overlay">
                        <img className="pacman-img" src={Pacman} />
                    </div>
                </a>
            </div>
        </div>
    </div>
    )
}

export default Projects;