import React from 'react';
import './App.css'; 


import About from "./about_page/about.js";
import Contacts from "./contact_page/contact.js";
import ExpertsPage from './expert_page/expert.js';
import RoutineServices from './routine_page/routine.js';
import Rapid from './rapid_page/rapid.js';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#rapid">Rapid</a></li>
          <li><a href="#experts">Experts</a></li>
          <li><a href="#routine">Routine Services</a></li>
          <li><a href="#contacts">Contacts</a></li>
        </ul>
      </nav>

      <div id="about">
        <About />
      </div>
      <div id="rapid">
        <Rapid />
      </div>
      <div id="experts">
        <ExpertsPage />
      </div>
      <div id="routine">
        <RoutineServices />
      </div>
      <div id="contacts">
        <Contacts />
      </div>
    </>
  );
}

export default App;
