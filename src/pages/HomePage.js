import '../styles/home.css'
import Hero from '../components/Hero.js'
import AboutMe from '../components/AboutMe.js'
import Skills from '../components/Skills.js'
import SoftwareProjects from '../components/SoftwareProjects'
import Spacer from '../components/Spacer.js'

const HomePage = () => {
    return ( <div className="homepage">
        <Hero />
              <div className="intro-container">
                <Spacer />
                <AboutMe />
                <Spacer />
              </div>

              <div className="skills-container">
                <Spacer />
                <Skills />
                <Spacer />
              </div>

              <div className="software-projects-container">
                <Spacer />
                <SoftwareProjects />
                <Spacer />
              </div>
    </div> );
}
 
export default HomePage;