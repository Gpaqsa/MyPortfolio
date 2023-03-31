import React from 'react'
import { BsInstagram } from "react-icons/bs"
import { BsGithub } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"

import "../styles/Footer.css"
const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='socialMedia'>
                    <hr />
                    <a href=''>
                        <BsInstagram />
                    </a>
                    <a href='https://github.com/Gpaqsa'>
                        <BsGithub />
                    </a>
                    <a href='https://www.linkedin.com/in/giorgi-paksashvili-a7a47b207/'>
                        <BsLinkedin />
                    </a>
                </div>
                <p>&copy: GiorgiPaksashvili</p>
            </div>
        </>
    )
}

export default Footer
