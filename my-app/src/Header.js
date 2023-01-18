
import hamburgerIcon from "./images/reorder-three-outline.svg";


function Header() {
    return (
      <div className="header">
        <div className="header-top">
            <h2 className="header-title">ben.<span className="white-text">allington</span></h2>
            <img className="hamburger-icon" src={hamburgerIcon} alt="hamburger-icon"/>
        </div>
        <ul className="nav-list">
            <li className="nav-list-items"><ion-icon name="home-sharp"></ion-icon></li>
            <li className="nav-list-items"><a href="#about">About</a></li>
            <li className="nav-list-items"><a href="#projects">Projects</a></li>
            <li className="nav-list-items">Contact</li>
            <li className="nav-list-items"><ion-icon className="moon-sharp" name="moon-sharp"></ion-icon></li>
        </ul>
      </div>
    );
  }

  
  export default Header;
  