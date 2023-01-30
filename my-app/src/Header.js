
// import hamburgerIcon from "./images/reorder-three-outline.svg";
// import closeIcon from "./images/close-sharp.svg";

import React, { useState } from 'react';


function Header(props) {

    const [navDisplay, setNavDisplay] = useState(true)
    const [theme, setTheme] = useState(true)


    // const styles = {
    //   backgroundColor: navDisplay ? "#FFD56F" : "#DCDCDC"
    // }
    
    function toggleNavDisplay() {
      setNavDisplay(prevDisplay => !prevDisplay)      
    }

    function toggleThemeMode() {
      setTheme(prevTheme => !prevTheme)
    }


  

    return (
      <div id="header" className={`header ${theme ? 'dark' : 'light'}`}>
        {/* <div className="header-top">
            <h2 className="header-title">ben.<span className="white-text">allington</span></h2>
            <img className="hamburger-icon" style={styles} src={navDisplay ? closeIcon : hamburgerIcon} onClick={toggleNavDisplay} alt="hamburger-icon"/>
        </div> */}
        <ul className="nav-list">
            <a href="#header"><li className="nav-list-items"><ion-icon name="home-sharp"></ion-icon></li></a>
            <a href="#about"><li className="nav-list-items">About</li></a>
            <a href="#projects"><li className="nav-list-items">Projects</li></a>
            <a href="#footer"><li className="nav-list-items">Contact</li></a>
        </ul>
      </div>
    );
  }

  
  export default Header;
  