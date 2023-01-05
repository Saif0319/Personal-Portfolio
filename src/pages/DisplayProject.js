import { useParams } from 'react-router-dom'
import { ProjectList } from "../helpers/ProjectList"
import "../styles/displayProject.css"
import { DiGithubBadge } from "react-icons/di";


const DisplayProject = () => {

    const {id} = useParams()
    const project = ProjectList[id]

  return (
    <div className='project'>
        <h1> {project.name} </h1>
        <a href={project.github} target="_blank" rel="noreferrer"><DiGithubBadge /></a>
        <a href={project.github} target="_blank" rel="noreferrer"><img src={project.image} alt=""></img></a>
        
        <p>Technologies used:<strong> {project.skills} </strong> </p>
    </div>
  )
}

export default DisplayProject