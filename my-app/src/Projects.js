
import projectData from "./project-data";
import Card from "./Card"


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
      <div className={`projects ${props.theme}`} id="projects">
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