import {NavLink, useParams} from "react-router-dom";
import {projectsHelp} from '../project/project';
import arrow from '../../img/arrow.svg';
import BtnGitHub from "../BtnGitHub/BtnGitHub";


const Project = () => {
    const {id} = useParams();
    const project = projectsHelp[id]
    return ( 
        <main className="section">
        <div className="container">
            <div className="project-details">
            <div className="project-details__cover">
                <NavLink to='/projects'> <img style={{backgroundColor:"black",}}src={arrow} alt="Arrow" /> </NavLink>
                </div>
                {id}
                <h1 className="title-1">{project.title}</h1>

                <img src={project.imgBig} alt="" className="project-details__cover"/>

                <div className="project-details__desc">
                    <p>Skills: {project.skills}</p>
                </div>
                {
                    project.gitHubLink && (
                        <BtnGitHub link='https://github.com/' />
                    )
                }
            </div>
        </div>
    </main>
     );
}
 
export default Project;
