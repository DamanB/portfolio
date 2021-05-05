import './styles/app.css'
import Navbar from './components/Navbar.js'
import Hero from './components/Hero.js'
import AboutMe from './components/AboutMe.js'
import Skills from './components/Skills.js'

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
          <div class="intro-icon-container">
            <span class="material-icons-outlined">person</span>
            <span class="">&lt; hello world! &gt;</span>
          </div>
        </div>
        <Spacer />
      </div>

      <div className="software-projects-container">
        
      </div>
    </div>
  );
}

export default App;
