import React from 'react';
import './App.css';

import Navbar from './myComponents/navbar/navbar';
import Header from './myComponents/header/header';
import Splash from './myComponents/splash/splash';
import Projects from './myComponents/projects/projects';

function App() {
  return (
    <div className="App">
      <div className="navbar-container">
        <Navbar/>
      </div>
      <div className="header-container">
        <Header/>
      </div>
      <div className="splash-container">
        <Splash/>
      </div>
      <div className="projects-container">
        <Projects/>
      </div>
    </div>
  );
}

export default App;
