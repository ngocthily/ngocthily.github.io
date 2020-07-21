import React from 'react';
import './navbar.css';

function Navbar() {
    return (
        <div>
            <div className="navbar">
                <div className="navbar-projects">PROJECTS</div>
                <div className="navbar-about">ABOUT</div>
                <div className="navbar-skills">SKILLS</div>
                <div className="navbar-contact">CONTACT</div>
            </div>
        </div>
    )
}

export default Navbar;