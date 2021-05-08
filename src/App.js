import './styles/app.css'
import Navbar from './components/Navbar.js'
import Hero from './components/Hero.js'
import AboutMe from './components/AboutMe.js'
import Skills from './components/Skills.js'
import SoftwareProjects from './components/SoftwareProjects'

// import IntroArt from './assets/img/intro_art.png'
import Spacer from './components/Spacer.js'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />

      <div className="intro-container">
        <Spacer />
        <div className="intro-content">
          <div>
            <AboutMe />
            <Skills />
          </div>
          <div className="intro-icon-container">
            <span className="material-icons-outlined">person</span>
            <span className="">&lt; hello world! &gt;</span>
          </div>
        </div>
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
