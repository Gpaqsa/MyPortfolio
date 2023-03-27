import React from 'react'

const ProjectItems = ({name, image}) => {
  return (
    <div className='projectsItem'>
      <div  className='bgImage' style={{backgroundImage: `url("${image}")` }}/>
      <h1> {name}</h1>
    </div>
  )
}

export default ProjectItems
