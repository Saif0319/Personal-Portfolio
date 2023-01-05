import React from 'react'
import "../styles/footer.css"
import { DiGithubBadge } from "react-icons/di";
import { AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si"

 const Footer = () => {

  return (
    <div className="footer">
        <div className="socialMedia">
            <a href='https://github.com/Saif0319' target="_blank" rel="noopener noreferrer"> <DiGithubBadge className='github'/> </a>
            <a href='https://www.linkedin.com/in/saif-kamal-489b6321a/' target="_blank" rel="noopener noreferrer"> <AiFillLinkedin className='linkedin'/> </a>
            <a href='mailto: saif031903@gmail.com' target="_blank" rel="noopener noreferrer"> <SiGmail className='gmail' /> </a>
        </div>
        <p>© 2022</p>
    </div>
  )
}

export default Footer