import Navbar from './components/Navbar.js'
import ProjectPage from './pages/ProjectPage.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage.js'

import useFetchCollection from './hooks/useFetchCollection.js'
import React from 'react'
export const SoftwareProjectsContext = React.createContext({})

function App() {

  const { data: projects, error, isPending } = useFetchCollection('softwareprojects')


  return (
    <Router>
      <SoftwareProjectsContext.Provider value={{projects, error, isPending}}>
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
      </SoftwareProjectsContext.Provider>
    </Router>
  );
}

export default App;