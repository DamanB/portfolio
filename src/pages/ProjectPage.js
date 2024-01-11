import '../styles/project.css'
import Spacer from '../components/Spacer.js'
import ImageSlider from '../components/ImageSlider.js'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { SoftwareProjectsContext } from '../App.js'
import { useContext } from 'react'
import { useHistory, Link } from 'react-router-dom'
import SkillPill from '../components/SkillPill.js';

const ProjectPage = () => {
    const { id } = useParams();
    const [project, setProject] = useState();
    const [error, setError] = useState();
    const { projects } = useContext(SoftwareProjectsContext)
    const history = useHistory();

    const getProject = () => {
        var _project = projects.filter(project => {
            return project.id == id
        })
        if (_project.length > 0) {
            setProject(_project[0])
        }
        else {
            setError("Could not find the project")
        }
    }

    const handleBackClick = () => {
        history.go(-1)
    }

    useEffect(() => {
        const abortCont = new AbortController();
        if (projects) {
            getProject()
        }
        return () => abortCont.abort();
    }, [projects]);

    return (
        <div className="projectpage">
            <Spacer />
            <div>
                {project && (
                    <div className="projectDetails">
                        <h2>
                            <span className="material-icons-round back-button project-interactable" onClick={handleBackClick}>
                                keyboard_backspace
                                </span>
                            {project.title}
                        </h2>
                        <p dangerouslySetInnerHTML={{ __html: project.body }}></p>

                        <h3>Technologies: </h3>
                        <div className="project-skills">
                            <p>
                                {(
                                    project.skills.map((skill, index) => (
                                        <SkillPill skill={skill} key={index}/>
                                    ))
                                )}
                            </p>
                        </div>
                        {(project.link || project.sourcecode) && (
                            <div>
                                <h3>References</h3>
                                <div className="project-links-container">
                                    {project.link && (<span>Project: </span>)}
                                    {project.link && (<a href={project.link} target="_blank" rel = "noopener noreferrer" className="project-interactable">{project.link}</a>)}
                                    {project.sourcecode && (<span>Source Code: </span>)}
                                    {project.sourcecode && (<a href={project.sourcecode} target="_blank" rel = "noopener noreferrer" className="project-interactable">{project.sourcecode}</a>)}
                                </div>
                            </div>
                        )}

                        {project.images[0] &&
                            (<div className="project-images">
                                <h3>Visuals</h3>
                                <ImageSlider images={project.images} />
                            </div>)
                        }

                    </div>
                )}
                {error && (
                    <div className="projectDetails">
                        <h2>Sorry!</h2>
                        <h3>
                            {error}
                        </h3>
                        <p>
                            <span>Click <Link to="/" >here</Link> to go back</span>
                        </p>
                    </div>
                )}
            </div>
            <Spacer />
        </div>
    );
}

export default ProjectPage;