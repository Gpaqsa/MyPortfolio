import React from 'react'
import { useNavigate } from "react-router-dom";

const ProjectItems = ({name, image, id}) => {
  const navigate = useNavigate();

  return (
    <div className='projectsItem' 
    onClick={() => {
      navigate("/project/" + id);
    }}
    >
      <div  className='bgImage' style={{backgroundImage: `url("${image}")` }}/>
      <h1 className='projectTitle'> {name}</h1>
    </div>
  )
}

export default ProjectItems
