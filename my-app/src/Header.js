
import hamburgerIcon from "./images/reorder-three-outline.svg";


function Header() {
    return (
      <div className="header">
        <div className="header-top">
            <h2 className="header-title">ben.allington</h2>
            <img className="hamburger-icon" onClick={test} src={hamburgerIcon} alt="hamburger-icon"/>
        </div>
        <ul className="nav-list">
            <li className="nav-list-items">Home</li>
            <li className="nav-list-items">About</li>
            <li className="nav-list-items">Contact</li>
        </ul>
      </div>
    );
  }

  function test() {
    console.log('working')
  }
  
  
  export default Header;
  