import React from 'react';
import './about.css';

import ProfilePic from '../../images/profile_pic.jpg';

function About() {
    function showProfileImg() {
        var getProfilePic = document.getElementsByClassName("profile-pic");
        (getProfilePic)[0].classList.add("showProfile");
    }    

    function hideProfileImg() {
        var getProfilePic = document.getElementsByClassName("profile-pic");
        (getProfilePic)[0].classList.remove("showProfile");
    }

    function removeFirst() {
        var getFirstAbout = document.getElementsByClassName("about1");
        var getAboutName = document.getElementsByClassName("about-name");
        (getFirstAbout)[0].classList.add("removeHighlight");
        (getAboutName)[0].classList.add("unboldAndRemove");
    }

    function boldName() {
        var getAboutName = document.getElementsByClassName("about-name");
        (getAboutName)[0].classList.add("boldName");
    }
    
    function unboldName() {
        var getAboutName = document.getElementsByClassName("about-name");
        (getAboutName)[0].classList.remove("boldName");
    }
    
    return (
        <div>
            <div className="about">
                <div className="about1" onMouseEnter={boldName} onMouseLeave={unboldName}>
                    Hello there, my name is
                    <div className="about-name-pic-container">
                        <div className="about-name" onMouseEnter={showProfileImg} onMouseLeave={hideProfileImg}>
                            Ngoc Thi Ly.
                        </div>
                        <div className="profile-pic-container">
                            <img className="profile-pic" src={ProfilePic}/>
                        </div>
                    </div>
                </div>
                <div className="about2" onMouseEnter={removeFirst}>
                    Just call me “knock”.
                </div>
                <div className="about3" onMouseEnter={removeFirst}>
                    I am a full-stack software developer 
                </div>
                <div className="about4" onMouseEnter={removeFirst}>
                    with a Bachelor’s in Mathematics
                </div>
                <div className="about5" onMouseEnter={removeFirst}>
                    and another one in Psychology.
                </div>
                <div className="about6" onMouseEnter={removeFirst}>
                    I specialized in applied and 
                </div>
                <div className="about7" onMouseEnter={removeFirst}>
                    computational mathematics.
                </div>
                <div className="about8" onMouseEnter={removeFirst}>
                    I got into coding and now like to 
                </div>
                <div className="about9" onMouseEnter={removeFirst}>
                    make websites pretty with a nice UI.
                </div>
                <div className="about10" onMouseEnter={removeFirst}>
                    I am detail-oriented, a problem 
                </div>
                <div className="about11" onMouseEnter={removeFirst}>
                    solver, and continuously learning 
                </div>
                <div className="about12" onMouseEnter={removeFirst}>
                    and expanding my skills.
                </div>
            </div>
        </div>
    )
}

export default About;