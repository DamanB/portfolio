import Navbar from './components/Navbar.js'
import ProjectPage from './pages/ProjectPage.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage.js'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="pages">
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/projects/:id">
              <ProjectPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;