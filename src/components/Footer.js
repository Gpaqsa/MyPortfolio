import React from 'react'
import { BsInstagram as BsInstagram } from "react-icons/bs"
import { BsGithub as BsGithub } from "react-icons/bs"
import { BsLinkedin as BsLinkedin } from "react-icons/bs"

import "../styles/Footer.css"
const Footer = () => {
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <BsInstagram />
                <BsGithub />
                <BsLinkedin />
            </div>
            <p>&copy: GiorgiPaksashvili</p>
        </div>
    )
}

export default Footer
