import React from 'react';
import './splash.css';

function Splash() {
    return (
        <div>
            <div className="splash">
                <div className="animate__animated animate__fadeInLeft splash-description">
                    <div className="splash-description1">
                        Full-stack
                    </div>
                    <div className="splash-description2">
                        software developer
                    </div>
                </div>
                <div className="animate__animated animate__fadeInRight splash-location">
                    Based in San Jose, CA
                </div>
            </div>
        </div>
    )
}

export default Splash;