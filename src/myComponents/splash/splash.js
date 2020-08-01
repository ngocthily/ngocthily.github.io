import React from 'react';
import './splash.css';

function Splash() {
    return (
        <div>
            <div className="splash">
                <div className="splash-top">
                    <div className="splash-top1 animate__animated animate__fadeInLeft">
                        I am a full-stack 
                    </div>
                    <div className="splash-top2  animate__animated animate__fadeInRight">
                        software developer
                    </div>
                </div>
                <div className="splash-bottom">
                    Based in San Jose, CA
                </div>
            </div>
        </div>
    )
}

export default Splash;