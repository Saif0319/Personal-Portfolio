import React from 'react'
import { DiGithubBadge } from "react-icons/di";
import { AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si"
import "../styles/home.css"

 const Home = () => {

  return (
    <div className='home'>

      <div className='about'>
        <h2>Hi, I'm Saif</h2>
        <div className='prompt'>
        <p>A Software Developer with a passion for learning</p>
        <a href='https://github.com/Saif0319' target="_blank" rel="noopener noreferrer"> <DiGithubBadge className='github'/> </a>
        <a href='https://www.linkedin.com/in/saif-kamal-489b6321a/' target="_blank" rel="noopener noreferrer"> <AiFillLinkedin className='linkedin' /> </a>
        <a href='mailto: saif031903@gmail.com' target="_blank" rel="noopener noreferrer"> <SiGmail className='gmail' /> </a>
      </div>
      </div>

      <div className='skills'>
        <h1>Skills</h1>
        
        <ul className='list'>
          <li className='items'>
            <h2>Front End</h2>
            <span>ReactJS - React Native - Redux - HTML - CSS - SaSS - Bootstrap - Material UI - NPM </span>
          </li>

          <li className='items'>
            <h2>Back End</h2>
            <span>NodeJS - ExpressJS - MongoDB</span>
          </li>

          <li className='items'>
            <h2>Languages</h2>
            <span>JavaScript - C# - Java - TypeScript Familiarity with Python </span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Home
