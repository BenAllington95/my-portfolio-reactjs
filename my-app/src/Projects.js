
import projectData from "./project-data";
import Card from "./Card"


function Projects() {

  const projectMap = projectData.map(function(proj) {
    return (
        <Card 
          key={proj.title}
          {...proj}
        />
    )
  })


   
    return (
      <div className={`projects`} id="projects">
        <div className="container reveal">
          <h2 className="sub-heading">Projects</h2>
          <p className="sub-sub-heading">Feel free to check out projects that I made through courses and also in my own time.</p>
          <div className="project-cards">
          {projectMap}
          </div>
        </div>
      </div>
    );
  }

  

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

export default Projects