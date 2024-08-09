import React from 'react';
import styles from './App.module.css'; // Importing CSS module

import About from "./about_page/about.js";
import Contacts from "./contact_page/contact.js";
import ExpertsPage from './expert_page/expert.js';
import RoutineServices from './routine_page/routine.js';
import Rapid from './rapid_page/rapid.js';

function App() {
  return (
    <>
      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          <li className={styles.navItem}><a href="#about" className={styles.navLink}>About</a></li>
          <li className={styles.navItem}><a href="#rapid" className={styles.navLink}>Rapid</a></li>
          <li className={styles.navItem}><a href="#experts" className={styles.navLink}>Experts</a></li>
          <li className={styles.navItem}><a href="#routine" className={styles.navLink}>Routine Services</a></li>
          <li className={styles.navItem}><a href="#contacts" className={styles.navLink}>Contacts</a></li>
        </ul>
      </nav>

      <div id="about" className={styles.section}>
        <About />
      </div>
      <div id="rapid" className={styles.section}>
        <Rapid />
      </div>
      <div id="experts" className={styles.section_experts}>
        <ExpertsPage />
      </div>
      <div id="routine" className={styles.section}>
        <RoutineServices />
      </div>
      <div id="contacts" className={styles.section}>
        <Contacts />
      </div>
    </>
  );
}

export default App;
