import React from 'react';
import './about.css';

import Dumbbells from '../../images/dumbbells.png';
import Dress from '../../images/dress.png';
import Whitecastle from '../../images/white-castle.jpg';
import Tom from '../../images/tom-nook.png';
import Book from '../../images/book.png';
import Newton from '../../images/newton.png';

function About() {
    return (
        <div>
            <div className="about">
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
                    <a className="resume-link" href="https://ngocthily.com/resume.pdf" target="_blank" rel="noopener noreferrer">
                        <div className="about-top6">
                            Click for resume
                        </div>
                    </a>
                </div>
                <div className="about-bottom">
                    <div className="about-bottom1">
                        <div className="about-bottom1-img">
                            <img className="dumbbells-img" src={Dumbbells}/>
                        </div>
                        <div className="about-bottom1-description">
                            I enjoy working out,
                        </div>
                    </div>
                    <div className="about-bottom2">
                        fashionable clothing,
                    </div>
                    <img className="dress-img" src={Dress}/>
                    <div className="about-bottom3">
                        silly light-hearted movies, 
                    </div>
                    <img className="white-castle-img" src={Whitecastle}/>
                    <div className="about-bottom4">
                        contributing to Tom Nook’s captialism,
                    </div>
                    <img className="tom-img" src={Tom}/>
                    <div className="about-bottom5">
                        reading self-help books filled with psychology,
                    </div>
                    <img className="book-img" src={Book}/>
                    <div className="about-bottom6">
                        and anything math related esp. numerical anaylsis
                    </div>
                    <img className="newton-img" src={Newton}/>
                </div>
            </div>
        </div>
    )
}

export default About;