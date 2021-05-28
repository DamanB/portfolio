import '../styles/projectPreview.css';
import Spacer from './Spacer.js';
import { Link } from 'react-router-dom'

const ProjectPreview = ({ project }) => {
    return (
        <div className="projectPreview">
            <h3>{project.id + ". "}</h3>
            <div>
                <h3 className="projectPreview-spacer">{project.title}</h3>
                <div className="preview-body">
                    <p className="ft-normal projectPreview-spacer preview-project-body" dangerouslySetInnerHTML={{ __html: project.body }}></p>
                    <p className="ft-normal projectPreview-spacer">{(
                        project.skills.slice(0,3).map((skill, index) => (
                            <span className="project-skill" key={index}>
                                {skill}
                            </span>
                        ))
                    )}</p>
                    <div className="project-links">
                        <Link to={`/projects/${project.id}`} ><button className="preview-button">Read More</button></Link>
                        {project.sourcecode && (<a href={project.sourcecode} target="_blank" rel = "noopener noreferrer" className="project-link material-icons-outlined">source</a>)}
                        {project.link && (<a href={project.link} target="_blank" rel = "noopener noreferrer" className="project-link material-icons-round">open_in_new</a>)}
                    </div>
                </div>
            </div>
            <div className="preview-image">
                {project.images[0] && (<img src={project.images[0]} alt="Preview visual for this project" loading="lazy" />)}
                {!project.images[0] && (<Spacer />)}
            </div>
        </div>
    );
}

export default ProjectPreview;