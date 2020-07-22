import React from 'react';
import './contact.css';

import Github from '../../images/github.png';
import Angellist from '../../images/angellist.png';
import Linkedin from '../../images/linkedin.png';

function Contact () {
    return (
        <div>
            <div className="contact">
                <div className="contact-row1">
                    <div className="contact-header">
                        Contact me
                    </div>
                    <div className="contact-description">
                        <div className="contact-description1">
                            Currently looking for opportunities, 
                        </div>
                        <div className="contact-description2">
                            especially to contribute to a good cause
                        </div>
                    </div>
                </div>
                <a className="email-link" href="mailto:ngoctly94@gmail.com" target="_blank" rel="noopener noreferrer">
                    <div className="contact-email">
                        Ngoctly94@gmail.com
                    </div>
                </a>
                <div className="contact-social">
                    <img className="github-img" src={Github}/>
                    <img className="angellist-img" src={Angellist}/>
                    <img className="linkedin-img" src={Linkedin}/>
                </div>
            </div>
        </div>
    )
}

export default Contact;