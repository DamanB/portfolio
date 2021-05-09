import './styles/app.css'
import Navbar from './components/Navbar.js'
import Hero from './components/Hero.js'
import AboutMe from './components/AboutMe.js'
import Skills from './components/Skills.js'
import SoftwareProjects from './components/SoftwareProjects'

import Spacer from './components/Spacer.js'

function App() {
  return (
    <div className="App">
      <Navbar />
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
    </div>
  );
}

export default App;