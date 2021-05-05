import '../styles/skills.css'
import SkillPill from './SkillPill.js'

const Skills = () => {
    return ( 
        <div className="skills">
            <h2 className="ft-medium">Noteworthy Skills</h2>
            <div className="skillPills">
                <SkillPill skill="Java"/>
                <SkillPill skill="JavaScript"/>
                <SkillPill skill="CSS"/>
                <SkillPill skill="HTML"/>
                <SkillPill skill="Bootstrap 4"/>
                <SkillPill skill="Vue.js"/>
                <SkillPill skill="Relational Databases"/>
                <SkillPill skill="Responsive Design"/>
            </div>
        </div>
     );
}
 
export default Skills;