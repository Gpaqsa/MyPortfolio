import React from 'react'
import { BsGithub } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"


import "../styles/Home.css"
const Home = () => {
  return (
    <div className='Home'>
      <div className='about'>
        {/* <h4>Hello !!!</h4> */}
        <h2> My name is Giorgi Paksashvili</h2>
        <div className='prompt'>
          <p>
            As a full-stack developer, I have a solid foundation in both front- end and back-end development.
            Although I am currently lacking professional experience in the field, I am highly motivated to continue learning and expanding my skillset.
            I am confident that I can contribute to any development team and deliver high- quality results.
          </p>
          <a href='https://github.com/Gpaqsa'>
            <BsGithub />
          </a>

          <a href='https://www.linkedin.com/in/giorgi-paksashvili-a7a47b207/'>
            <BsLinkedin />

          </a>
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-end</h2>
            <span>ReactJS , HTML, CSS, NPM, StyledComponents</span>
          </li>

          <li className='item'>
            <h2>Back-end</h2>
            <span>NodeJS, Oracle Data base GIT</span>
          </li>

          <li className='item'>
            <h2>Languages</h2>
            <span>Python, Java, Javascript, C#</span>
          </li>

        </ol>
      </div>

    </div>
  )
}

export default Home
