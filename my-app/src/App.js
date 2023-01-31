
import Header from './Header';
import Main from './Main';
import About from './About';
import Projects from './Projects';
import Footer from './Footer';
import React, { useState } from 'react';
import hamburgerIcon from "./images/reorder-three-outline.svg";
import closeIcon from "./images/close-sharp.svg";

function App() {

  const [navDisplay, setNavDisplay] = useState(false)
  const styles = {
    backgroundColor: navDisplay ? "#E2CF00" : "#DCDCDC"
  }

  function scrollLock() {
    return navDisplay ? document.body.style.overflow = "auto" : document.body.style.overflow = "hidden"
  }

  function toggleNavDisplay() {
    setNavDisplay(prevNav => !prevNav)
    scrollLock()
  }

  return (
    <div className="App">
      <div className="header-top">
            <h2 className="header-title">ben.<span className="white-text">allington</span></h2>
            <img className="hamburger-icon" style={styles} src={hamburgerIcon} onClick={toggleNavDisplay} alt="hamburger-icon"/>
        </div>
        <div className={`hamburger-nav ${navDisplay ? "active-nav" : ""}`}>
        <img className="hamburger-close-icon" style={styles} src={closeIcon} onClick={toggleNavDisplay} alt="hamburger-icon"/>
        <ul className="hamburger-list">

          <a href="#about"><div onClick={toggleNavDisplay}><li className="hamburger-list-items">About</li></div></a>
          <a href="#projects"><div onClick={toggleNavDisplay}><li className="hamburger-list-items">Projects</li></div></a>
          <a href="#footer"><div onClick={toggleNavDisplay}><li className="hamburger-list-items">Contact</li></div></a>
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
