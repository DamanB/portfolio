import '../styles/skills.css'
import { useState } from 'react'
import SkillPill from './SkillPill.js'

const Skills = () => {

    const [skills] = useState(["Java", "JavaScript", "HTML", "CSS", "Vue.js", "React", "jQuery", "Bootstrap 4", "Relational Databases", "Responsive Design", "Version Control"]);

    return (
        <div className="skills">
            <h2>Noteworthy Skills</h2>
            <div className="skillPills">
                {(
                    skills.map((skill, index) => (
                        <SkillPill skill={skill} key={index} />

                    ))
                )}
            </div>
        </div>
    );
}

export default Skills;