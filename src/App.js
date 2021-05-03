import Navbar from './components/Navbar.js'
import Hero from './components/Hero.js'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="app-content">
        <Hero />        
      </div>
    </div>
  );
}

export default App;
