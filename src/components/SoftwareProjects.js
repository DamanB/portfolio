import '../styles/softwareprojects.css'
// import useFetchCollection from '../hooks/useFetchCollection.js'
import ProjectPreview from './ProjectPreview.js'
import {SoftwareProjectsContext} from '../App.js'
import { useContext } from 'react'

const SoftwareProjects = () => {
    const { projects, error, isPending } = useContext(SoftwareProjectsContext)

    return ( 
        <div className="softwareProjects">
            <h2>Software Projects</h2>
            {isPending && <p className="fetchingMsg">Fetching Projects from Database...</p>}
            {error && <p className="errorMsg">{ error }</p>}
            <div className="softwareProjects-list">
                {projects && (
                    projects.map((project) => (
                        <div key={project.id}>
                            <ProjectPreview project={project} />
                            <div className="projectPreview-divider"></div>
                        </div>
                    ))
                )}
            </div>

        </div>
     );
}
 
export default SoftwareProjects;