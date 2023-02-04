
import projectData from "./project-data";
import Card from "./Card"

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


function Projects(props) {

  const projectMap = projectData.map(function(proj) {
    return (
        <Card 
          key={proj.title}
          {...proj}
        />
    )
  })
   
    return (
      <div className={`projects ${props.theme} reveal`} id="projects">
        <div className="container">
          <h2 className="sub-heading">projects</h2>
          <div className="project-cards">
          {projectMap}
          </div>
        </div>
      </div>
    );
  }

export default Projects