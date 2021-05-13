import { useParams } from 'react-router-dom'

const ProjectPage = () => {
    const { id } = useParams();

    return ( 
        <div className="projectpage">
            <h2>Project { id }</h2>
        </div> 
    );
}
 
export default ProjectPage;