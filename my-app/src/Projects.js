
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
      <div className="projects">
        {projectMap}
      </div>
    );
  }

export default Projects