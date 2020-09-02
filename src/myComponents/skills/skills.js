import React from 'react';
import './skills.css';

import JavascriptImg from '../../images/javascript.png';
import ReactImg from '../../images/react.png';
import ReduxImg from '../../images/redux.png';
import NodeImg from '../../images/node.png';
import JqueryImg from '../../images/jquery.png';
import WebpackImg from '../../images/webpack.png';
import NpmImg from '../../images/npm.png';
import ExpressImg from '../../images/express.png';
import RubyImg from '../../images/ruby.png';
import RspecImg from '../../images/rspec.png';
import RailsImg from '../../images/rails.png';
import WolframImg from '../../images/wolfram.png';
import MatlabImg from '../../images/matlab.png';
import CplusplusImg from '../../images/cplusplus.png';
import PostgresqlImg from '../../images/postgresql.png';
import MongodbImg from '../../images/mongodb.png';
import CssImg from '../../images/css.png';
import HtmlImg from '../../images/html.png';
import GitImg from '../../images/git.png';
import AwsImg from '../../images/aws.png';
import HerokuImg from '../../images/heroku.png';
import VscodeImg from '../../images/vscode.png';
import FigmaImg from '../../images/figma.png';

import Resume from '../../images/resume_pic.png';

function Skills() {
    return (
        <div className="skills-wrapper">
            <div className="skills">
                <div className="skills-header">
                    {/* <div className="skills-header1">
                        Skills:
                    </div> */}
                    {/* <div className="skills-header2">
                        *Hover over to view its name*
                    </div> */}
                </div>
                <div className="all-skill-container">
                    <div className="skill 1">
                        <img className="javascript-img" src={JavascriptImg} />
                        <div className="tech-name"> Javascript </div>
                    </div>
                    <div className="skill 2">
                        <img className="react-img" src={ReactImg}/>
                        <div className="tech-name"> React </div>
                    </div>
                    <div className="skill 3">
                        <img className="redux-img" src={ReduxImg}/>
                        <div className="tech-name"> Redux </div>
                    </div>
                    <div className="skill 4">
                        <img className="node-img" src={NodeImg}/>
                        <div className="tech-name"> Node </div>
                    </div>
                    <div className="skill 5">
                        <img className="jquery-img" src={JqueryImg} />
                        <div className="tech-name"> Jquery </div>
                    </div>
                    <div className="skill 6">
                        <img className="webpack-img" src={WebpackImg} />
                        <div className="tech-name"> Webpack </div>
                    </div>
                    <div className="skill 7">
                        <img className="npm-img" src={NpmImg} />
                        <div className="tech-name"> Npm </div>
                    </div>
                    <div className="skill 8">
                        <img className="express-img" src={ExpressImg} />
                        <div className="tech-name"> Express </div>
                    </div>
                    <div className="skill 9">
                        <img className="ruby-img" src={RubyImg} />
                        <div className="tech-name"> Ruby </div>
                    </div>
                    <div className="skill 10">
                        <img className="rspec-img" src={RspecImg} />
                        <div className="tech-name"> Rspec </div>
                    </div>
                    <div className="skill 11">
                        <img className="rails-img" src={RailsImg} />
                        <div className="tech-name"> Ruby on Rails </div>
                    </div>
                    <div className="skill 12">
                        <img className="wolfram-img" src={WolframImg} />
                        <div className="tech-name"> Wolfram Mathematica </div>
                    </div>
                    <div className="skill 13">
                        <img className="matlab-img" src={MatlabImg} />
                        <div className="tech-name"> MATLAB </div>
                    </div>
                    <div className="skill 14">
                        <img className="cplusplus-img" src={CplusplusImg} />
                        <div className="tech-name"> C++ </div>
                    </div>
                    <div className="skill 15">
                        <img className="postgresql-img" src={PostgresqlImg} />
                        <div className="tech-name"> PostgreSQL </div>
                    </div>
                    <div className="skill 16">
                        <img className="mongodb-img" src={MongodbImg} />
                        <div className="tech-name"> MongoDB </div>
                    </div>
                    <div className="skill 17">
                        <img className="css-img" src={CssImg} />
                        <div className="tech-name"> CSS3 </div>
                    </div>
                    <div className="skill 18">
                        <img className="html-img" src={HtmlImg} />
                        <div className="tech-name"> HTML5 </div>
                    </div>
                    <div className="skill 19">
                        <img className="heroku-img" src={HerokuImg} />
                        <div className="tech-name"> Heroku </div>
                    </div>
                    <div className="skill 22">
                        <img className="vscode-img" src={VscodeImg} />
                        <div className="tech-name"> Visual Studio (VS) Code </div>
                    </div>
                    <div className="skill 20">
                        <img className="aws-img" src={AwsImg} />
                        <div className="tech-name"> Amazon Web Services (AWS)</div>
                    </div>
                    <div className="skill 21">
                        <img className="git-img" src={GitImg} />
                        <div className="tech-name"> Git </div>
                    </div>
                    <div className="skill 23">
                        <img className="figma-img" src={FigmaImg} />
                        <div className="tech-name"> Figma </div>
                    </div>
                </div>
            </div>
            <div className="resume-wrapper">
                <a href="https://ngocthily.com/resume.pdf" target="_blank" rel="noopener noreferrer">
                    <img className="resume-pic" src={Resume}/>
                    <div className="resume">
                        Get a print copy
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Skills;