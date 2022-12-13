
import ComProject from '../comProject2/comproject2';
import {projectsHelp} from '../project/project';

const Projects = () => {
    return ( 
        <main className="section">
        <div className="container">
            <h2 className="title-1">Projects</h2>
            <ul className="projects">
              {
                projectsHelp.map((item, index) => {
                   return  <ComProject key={index} index={index} title={item.title} img={item.img} id={item.id} />
                })
              }
            </ul>
        </div>
    </main>
     );
}
 
export default Projects;