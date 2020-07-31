import React from 'react';
import './contact.css';

import Linkedin from '../../images/linkedin.png';
import Github from '../../images/github.png';
import Angellist from '../../images/angellist.png';

function Contact () {
    return (
        <div>
            <div className="contact">
                <div className="contact-header">
                    Contact
                </div>
                <div className="email-container">
                    <div className="email-header">
                        Email:
                    </div>
                    <div className="email">
                        <a href="mailto:ngoctly94@gmail.com">
                            Ngoctly94@gmail.com
                        </a>
                    </div>
                </div>
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/ngocthily/" target="_blank" rel="noopener noreferrer">
                        <img className="linkedin-img" src={Linkedin}/>
                    </a>
                    <a href="https://github.com/ngocthily" target="_blank" rel="noopener noreferrer">
                        <img className="github-img" src={Github} />
                    </a>
                    <a href="https://angel.co/u/ngocthily" target="_blank" rel="noopener noreferrer">
                        <img className="angellist-img" src={Angellist} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact;