import '../styles/skills.css'
import { useState } from 'react'
import SkillPill from './SkillPill.js'

const Skills = () => {

    const [skills] = useState([
        "JavaScript",
        "React",
        "React Native",
        "Relational Databases",
        "SQL",
        "HTML",
        "CSS",
        "Material UI",
        "Java",
        "Version Control",
        "Jira",
        "Responsive Design",
        "Machine Learning",     
    ]);

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