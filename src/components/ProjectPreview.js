import '../styles/projectPreview.css'

const ProjectPreview = ({ project }) => {
    return (
        <div className="projectPreview">
            <h3>{project.id + ". "}</h3>
            <div className="preview-body">
                <h3>{project.title}</h3>
                <p className="ft-normal">{project.body}</p>
                <p className="ft-normal">{(
                    project.skills.map((skill, index) => (
                        <span className="project-skill" key={index}>
                            {skill}
                        </span>
                    ))
                )}</p>
                <div>
                    {project.sourcecode && (<a href={project.sourcecode} target="_blank" className="project-link material-icons-outlined">source</a>)}
                    {project.link && (<a href={project.link} target="_blank" className="project-link material-icons-round">open_in_new</a>)}
                </div>
                <button className="preview-button">Read More</button>
            </div>
            <div className="preview-image">
                <img src="" alt="Preview for this project" />
            </div>
        </div>
    );
}

export default ProjectPreview;