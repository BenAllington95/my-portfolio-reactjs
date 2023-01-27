
import hamburgerIcon from "./images/reorder-three-outline.svg";
import closeIcon from "./images/close-sharp.svg";

import React, { useState, useRef } from 'react';


function Header(props) {

    const [navDisplay, setNavDisplay] = useState(true)


    const styles = {
      backgroundColor: navDisplay ? "#FFD56F" : "#DCDCDC"
    }
    
    function toggleNavDisplay() {
      setNavDisplay(prevDisplay => !prevDisplay)      
    }


  

    return (
      <div id="header" className={`header ${props.theme}`}>
        <div className="header-top">
            <h2 className="header-title">ben.<span className="white-text">allington</span></h2>
            <img className="hamburger-icon" style={styles} src={navDisplay ? closeIcon : hamburgerIcon} onClick={toggleNavDisplay} alt="hamburger-icon"/>
        </div>
        {navDisplay && <ul className="nav-list">
            <a href="#header"><li className="nav-list-items"><ion-icon name="home-sharp"></ion-icon></li></a>
            <a href="#about"><li className="nav-list-items">About</li></a>
            <a href="#projects"><li className="nav-list-items">Projects</li></a>
            <a href="#projects"><li className="nav-list-items">Contact</li></a>
            {/* <li className="nav-list-items"><ion-icon className="moon-sharp" name="moon-sharp"></ion-icon></li> */}
        </ul>}
      </div>
    );
  }

  
  export default Header;
  