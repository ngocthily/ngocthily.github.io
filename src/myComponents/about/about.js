import React from 'react';
import './about.css';

import ProfilePic from '../../images/profile_pic.jpg';

function About() {
    return (
        <div>
            <div className="about">
                <div className="about-title">
                    About
                </div>
                <div className="about-img-summary-resume-container">
                    <div className="about-img-container">
                        <img className="about-img" src={ProfilePic}/>
                        <div className="about-square"></div>
                    </div>
                    <div className="about-summary-resume-container">
                        <div className="about-summary">
                            I am a full-stack software developer based in San Jose, CA with a main
                            focus on frontend. I graduated UC Irvine with a B.S. in mathematics 
                            and a B.A. in psychology. I am detail-oriented, a problem solver, and 
                            continuously learning and expanding my skills.
                        </div>
                        <a href="https://ngocthily.com/resume" target="_blank" rel="noopener noreferrer">
                            <div className="about-resume">
                                View resume
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;