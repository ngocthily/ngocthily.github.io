import React from 'react';
import './about.css';

function About() {
    return (
        <div>
            <div className="about">
                <div className="about-top-border"></div>
                <div className="about-top">
                    <div className="about-top1">
                        My name is Ngoc, can call me "knock".
                    </div>
                    <div className="about-top2">
                        I am a full-stack software developer. 
                    </div>
                    <div className="about-top3">
                        I graduated from UC Irvine with a 
                    </div>
                    <div className="about-top4">
                        B.S. in mathematics and 
                    </div>
                    <div className="about-top5">
                        a B.A. in psychology. 
                    </div>
                    <a className="resume-link" href="https://ngocthily.com/resume.pdf" target="_blank">
                        <div className="about-top6">
                            Click for resume
                        </div>
                    </a>
                </div>
                <div className="about-bottom">
                    <div className="about-bottom1">
                        I enjoy working out,
                    </div>
                    <div className="about-bottom2">
                        fashionable clothing,
                    </div>
                    <div className="about-bottom3">
                        silly light-hearted movies, 
                    </div>
                    <div className="about-bottom4">
                        contributing to Tom Nook’s captialism,
                    </div>
                    <div className="about-bottom5">
                        reading self-help books filled with psychology,
                    </div>
                    <div className="about-bottom6">
                        and anything math related esp. numerical anaylsis
                    </div>
                </div>
                <div className="about-bottom-border"></div>
            </div>
        </div>
    )
}

export default About;