import React from 'react';


function Header(props) {
  

    return (
      <div id="header">
        <div className="header-top">
            <div className="hamburger-icon-container">
              <span className="hamburger-icon"><ion-icon onClick={props.toggleNavDisplay} name="reorder-three-outline"></ion-icon></span>
            </div>
            <ul className="nav-list">
            <a href="#header"><li className="nav-list-items"><ion-icon name="home-sharp"></ion-icon></li></a>
            <a href="#about"><li className="nav-list-items">About</li></a>
            <a href="#skills"><li className="nav-list-items">Skills</li></a>
            <a href="#projects"><li className="nav-list-items">Projects</li></a>
            <a href="#footer"><li className="nav-list-items">Contact</li></a>
            <li onClick={props.toggleTheme} className="nav-list-items"><ion-icon name={props.theme ? "moon-sharp" : "sunny-sharp"}></ion-icon></li>
        </ul>
        </div>
        <div className={`hamburger-nav ${props.navDisplay ? "active-nav" : ""}`}>
        <div className="hamburger-icon-container">
              <span className="hamburger-close-icon"><ion-icon onClick={props.toggleNavDisplay} name="close-sharp"></ion-icon></span>
            </div>
        <ul className="hamburger-list">
          <a href="#about"><div onClick={props.toggleNavDisplay}><li className="hamburger-list-items">About</li></div></a>
          <a href="#skills"><div onClick={props.toggleNavDisplay}><li className="hamburger-list-items">Skills</li></div></a>
          <a href="#projects"><div onClick={props.toggleNavDisplay}><li className="hamburger-list-items">Projects</li></div></a>
          <a href="#footer"><div onClick={props.toggleNavDisplay}><li className="hamburger-list-items">Contact</li></div></a>
          <li onClick={props.toggleTheme} className="nav-list-items"><ion-icon name={props.theme ? "moon-sharp" : "sunny-sharp"}></ion-icon></li>
          <a href="mailto: benallington1995@gmail.com"><li className="hamburger-list-items"><ion-icon name="mail-sharp"></ion-icon></li></a>
          <a href="https://www.linkedin.com/in/ben-allington" target="_blank" rel="noreferrer"><li className="hamburger-list-items"><ion-icon name="logo-linkedin"></ion-icon></li></a>
          <a href="https://www.github.com/BenAllington95" target="_blank" rel="noreferrer"><li className="hamburger-list-items"><ion-icon name="logo-github"></ion-icon></li></a>
        </ul>
      </div>
      </div>
  
    );
  }

// const navbar = document.querySelector('#header');
// let top = navbar.offsetTop;
// function stickynavbar() {
//   if (window.scrollY >= top) {    
//     navbar.classList.add('sticky');
//   } else {
//     navbar.classList.remove('sticky');    
//   }
// }
// window.addEventListener('scroll', stickynavbar);

  
  export default Header;
  