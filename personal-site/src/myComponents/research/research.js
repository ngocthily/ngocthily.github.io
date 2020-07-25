import React from 'react';
import './research.css';

import Research from '../../images/research.png';

function research() {
    return (
        <div>
            <div className="research">
                <div className="research-box-container">
                    <a className="research-link" href="http://www.radiology.uci.edu/research/index.asp" target="_blank" rel="noopener noreferrer">
                        <div className="research-box">
                            <div className="research-description-tech-container">
                                <div className="research-description">
                                    3-D image reconstruction and registration to improve the detection of artery disease, which in turn allowed for earlier treatment for patients
                                </div>
                                <div className="research-tech">
                                    MATLAB
                                </div>
                            </div>
                            <div className="research-title">
                                <div className="research-title1">
                                    student researcher
                                </div>
                                <div>
                                    @ UC Irvine Radiology Dept.
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="research-overlay">
                    <img className="research-img" src={Research} />
                </div>
            </div>
        </div>
    )
}

export default research;