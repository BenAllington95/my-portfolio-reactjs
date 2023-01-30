
import Header from './Header';
import Main from './Main';
import About from './About';
import Projects from './Projects';
import Footer from './Footer';
import React, { useState } from 'react';
import hamburgerIcon from "./images/reorder-three-outline.svg";
import closeIcon from "./images/close-sharp.svg";

function App() {

  const [navDisplay, setNavDisplay] = useState(true)
  const styles = {
    backgroundColor: navDisplay ? "#FFD56F" : "#DCDCDC"
  }

  function toggleNavDisplay() {
    setNavDisplay(prevNav => !prevNav)
  }

  return (
    <div className="App">
      <div className="header-top">
            <h2 className="header-title">ben.<span className="white-text">allington</span></h2>
            <img className="hamburger-icon" style={styles} src={navDisplay ? closeIcon : hamburgerIcon} onClick={toggleNavDisplay} alt="hamburger-icon"/>
        </div>
        <div className={`hamburger-nav ${navDisplay ? "active-nav" : ""}`}>
        <img className="hamburger-icon" style={styles} src={navDisplay ? closeIcon : hamburgerIcon} onClick={toggleNavDisplay} alt="hamburger-icon"/>
        <ul className="nav-list">
          <a href="#header"><li className="hamburger-list-items"><ion-icon name="home-sharp"></ion-icon></li></a>
          <a href="#about"><li className="hamburger-list-items">About</li></a>
          <a href="#projects"><li className="hamburger-list-items">Projects</li></a>
          <a href="#footer"><li className="hamburger-list-items">Contact</li></a>
        </ul>
      </div>
      <Header />
      <Main />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
