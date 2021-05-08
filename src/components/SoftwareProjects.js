import useFetchCollection from '../hooks/useFetchCollection.js'
import ProjectPreview from './ProjectPreview.js'

const SoftwareProjects = () => {
    const { data: projects, error, isPending } = useFetchCollection('softwareprojects')

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
                        </div>
                    ))
                )}
            </div>

        </div>
     );
}
 
export default SoftwareProjects;