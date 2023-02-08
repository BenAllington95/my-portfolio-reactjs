import Main from './Main';
import About from './About';
import Projects from './Projects';
import Footer from './Footer';
import React, { useState } from 'react';


function App() {

  const [navDisplay, setNavDisplay] = useState(false)
  const [theme, setTheme] = useState(false)
  

  function scrollLock() {
    return navDisplay ? document.body.style.overflow = "auto" : document.body.style.overflow = "hidden"
  }

  function toggleNavDisplay() {
    setNavDisplay(prevNav => !prevNav)
    scrollLock()
  }

  function toggleTheme() {
    setTheme(prevTheme => !prevTheme)
  }



  return (
    <div className="App" id={theme ? "" : "app-light"}>
      <div className="header-top">
            {/* <h2 className="header-title">Ben Allington</h2> */}
            <div className="hamburger-icon-container">
              <span className="hamburger-icon"><ion-icon onClick={toggleNavDisplay} name="reorder-three-outline"></ion-icon></span>
            </div>
            <ul className="nav-list">
            <a href="#header"><li className="nav-list-items"><ion-icon name="home-sharp"></ion-icon></li></a>
            <a href="#about"><li className="nav-list-items">About</li></a>
            <a href="#projects"><li className="nav-list-items">Projects</li></a>
            <a href="#footer"><li className="nav-list-items">Contact</li></a>
            <li onClick={toggleTheme} className="nav-list-items"><ion-icon name={theme ? "moon-sharp" : "sunny-sharp"}></ion-icon></li>
        </ul>
        </div>
        <div className={`hamburger-nav ${navDisplay ? "active-nav" : ""}`}>
        <div className="hamburger-icon-container">
              <span className="hamburger-close-icon"><ion-icon onClick={toggleNavDisplay} name="close-sharp"></ion-icon></span>
            </div>
        <ul className="hamburger-list">
          <a href="#about"><div onClick={toggleNavDisplay}><li className="hamburger-list-items">About</li></div></a>
          <a href="#projects"><div onClick={toggleNavDisplay}><li className="hamburger-list-items">Projects</li></div></a>
          <a href="#footer"><div onClick={toggleNavDisplay}><li className="hamburger-list-items">Contact</li></div></a>
          <li onClick={toggleTheme} className="nav-list-items"><ion-icon name={theme ? "moon-sharp" : "sunny-sharp"}></ion-icon></li>
        </ul>
      </div>

      <Main />
      <About />
      <Projects />
      <Footer />

    </div>
  );
}

export default App;
