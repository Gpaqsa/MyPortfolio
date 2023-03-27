import React from 'react'
import ProjectItems from "../components/ProjectItems"

const Projects = () => {
  return (
    <div className='Projects'>
      <h1>My Personal Projects</h1>
      <div className='projectsList'>
        <ProjectItems  name={Projects.name} image={Projects.image}/ >
      </div>
    </div>
  )
}

export default Projects
