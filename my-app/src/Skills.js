import Skill from "./Skill"
import skillData from "./skill-data"


function Skills() {

  const skillItems = skillData.map(function(skill) {
    return (
      <Skill 
        key={skill.title}
        {...skill}
      />
  )})

    return (
      <div className="skills" id="skills">
        <div className="container reveal">
            <h2 className="section-heading">Skills</h2>
            <p className="section-sub-heading">Here are the skills that I currently know: </p>
            <div className="skill-items">
              {skillItems}
            </div>
        </div>
      </div>
    );
  }

export default Skills