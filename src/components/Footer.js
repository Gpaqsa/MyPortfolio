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
                    <BsInstagram />
                    <BsGithub />
                    <BsLinkedin />
                </div>
                <p>&copy: GiorgiPaksashvili</p>
            </div>
        </>
    )
}

export default Footer
