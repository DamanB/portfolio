import '../styles/softwareprojects.css'
// import useFetchCollection from '../hooks/useFetchCollection.js'
import ProjectPreview from './ProjectPreview.js'
import { SoftwareProjectsContext } from '../App.js'
import { useContext, useEffect, useState } from 'react'

const SoftwareProjects = () => {
    const { projects, error, isPending } = useContext(SoftwareProjectsContext)
    const [searchQuery, setSearchQuery] = useState('');
    const [searchType, setSearchType] = useState('skills');
    const [visibleProjects, setVisibleProjects] = useState([]);
    const [searchLoading, setSearchLoading] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);

    useEffect(() => {
        resetVisibleProjects()
    }, [projects])

    useEffect(() => {
        if (searchLoading) {
            setHasSearched(true)
            handleSearch();
            setSearchLoading(false)
        }
    }, [searchLoading])

    const resetVisibleProjects = () => {
        setSearchQuery("")
        setVisibleProjects(projects)
        setHasSearched(false)
    }

    const handleSearch = (e) => {
        if (searchQuery) {
            if (searchType === 'skills') {
                searchBySkill()
            }
            else if (searchType === 'title') {
                searchByTitle()
            }
        }
        else {
            resetVisibleProjects()
        }
    }

    const searchBySkill = () => {
        setVisibleProjects(
            projects.filter((project) => {
                let skills = project.skills.join("_").replace(/\s/g, "").toLowerCase()
                return skills.includes(searchQuery.toLowerCase())
            })
        )
    }

    const searchByTitle = () => {
        setVisibleProjects(projects.filter(project => {
            return project.title.replace(/\s/g, "").toLowerCase().includes(searchQuery.replace(/\s/g, "").toLowerCase())
        }))
    }

    return (
        <div className="softwareProjects">
            <h2>Software Projects</h2>
            {isPending && <p className="fetchingMsg">Fetching Projects from Database...</p>}
            {error && <p className="errorMsg">{error}</p>}
            <div className="softwareProjects-list">
                {visibleProjects && (
                    <div className="softwareProjects-search">
                        <div className="projectSearch-text">
                            <label htmlFor="project-search"></label>
                            <span class="material-icons-round">search</span>
                            <input 
                                type="text" 
                                value={searchQuery} 
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        searchQuery.length ? setSearchLoading(true) : resetVisibleProjects()
                                    }
                                }}
                                onChange={(e) => setSearchQuery(e.target.value)} 
                                placeholder={`Search by ${searchType === 'skills' ? 'technology' : 'name'} ...`} 
                            />
                        </div>
                        <div className="projectSearch-radio">
                            <label htmlFor="project-search-type"></label>
                            <div onChange={(e) => setSearchType(e.target.value)}>
                                <input type="radio" value="skills" checked={searchType === 'skills'} name="search-type" id="skills" /> <label htmlFor="skills">Technology</label>
                                <input type="radio" value="title" checked={searchType === 'title'} name="search-type" id="title" /> <label htmlFor="title">Name</label>
                            </div>
                        </div>
                        <div className="projectSearch-buttons">
                            <button className="search-button" onClick={() => { setSearchLoading(true); }}><span class="material-icons-round">east</span></button>
                            <button className="search-button" disabled={!hasSearched} onClick={() => { resetVisibleProjects() }}><span class="material-icons-round">restart_alt</span></button>
                        </div>
                    </div>
                )}
                {(visibleProjects && visibleProjects.length < 1) && (
                    <div>
                        <p>No projects to show</p>
                    </div>
                )}
                {searchLoading && (
                    <div>
                        <p>Searching Projects...</p>
                    </div>
                )}
                {(visibleProjects && !searchLoading) && (
                    visibleProjects.map((project) => (
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