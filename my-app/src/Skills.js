
function Skills() {
    return (
      <div className="skills" id="skills">
        <div className="container reveal">
            <h2 className="section-heading">Skills</h2>
            <p className="section-sub-heading">Here are the skills that I currently know: </p>
            <div className="skill-items">
              <div className="skill">
                <h3 className="skill-title">HTML</h3>
                <ion-icon name="logo-html5"></ion-icon>
              </div> 
              <div className="skill">
                <h3 className="skill-title">CSS</h3>
                <ion-icon name="logo-css3"></ion-icon>
              </div> 
              <div className="skill">
                <h3 className="skill-title">Javascript</h3>
                <ion-icon name="logo-javascript"></ion-icon>
              </div> 
              <div className="skill">
                <h3 className="skill-title">React JS</h3>
                <ion-icon name="logo-react"></ion-icon>
              </div>
              <div className="skill">
                <h3 className="skill-title">Github</h3>
                <ion-icon name="logo-github"></ion-icon>
              </div> 
            </div>
        </div>
      </div>
    );
  }

export default Skills