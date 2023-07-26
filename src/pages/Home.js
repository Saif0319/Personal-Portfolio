import { DiGithubBadge } from "react-icons/di";
import { AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si"
import "../styles/home.css";
import GreenSplash from "../assets/green-splash.png";

 const Home = () => {

  return (
    <div className='home'>

      <div className='about'>
        <img src={GreenSplash} className="splash" />
        <h2>Hi, I'm Saif</h2>
        <div className='prompt'>
          <p>A Software Developer with a passion for learning</p>
          <a href='https://github.com/Saif0319' target="_blank" rel="noopener noreferrer"> <DiGithubBadge className='github'/> </a>
          <a href='https://www.linkedin.com/in/saif-kamal-489b6321a/' target="_blank" rel="noopener noreferrer"> <AiFillLinkedin className='linkedin' /> </a>
          <a href='mailto: saif031903@gmail.com' target="_blank" rel="noopener noreferrer"> <SiGmail className='gmail' /> </a>
        </div>
        <img src={GreenSplash} className="splash2" />
      </div>

      <div className='skills'>
        <h1>Skills</h1>
        
        <ul className='list'>
          <li className='items'>
            <h2>Languages</h2>
            <span>JavaScript - Java - Python - C# - PHP - TypeScript </span>
          </li>

          <li className='items'>
            <h2>Technologies</h2>
            <span>ReactJS - React Native - Redux - HTML - CSS - SaSS - Bootstrap - Material UI - NPM - NodeJS - ExpressJS - MongoDB </span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Home
