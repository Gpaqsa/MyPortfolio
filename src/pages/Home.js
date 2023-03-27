import React from 'react'
import { BsGithub } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"
import { MdEmail } from 'react-icons/md'

import "../styles/Home.css"
const Home = () => {
  return (
    <div className='Home'>
      <div className='about'>
        {/* <h4>Hello !!!</h4> */}
        <h2> My name is Giorgi Paksashvili</h2>
        <div className='prompt'>
          <p>
            I am a beginner developer. I want to become a full-stack developer and I'm trying to work hard for that.
            I'm currently learning ReactJS and trying to make small projects in my spare time.
          </p>
          <BsGithub />
          <BsLinkedin />
          <MdEmail />
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
