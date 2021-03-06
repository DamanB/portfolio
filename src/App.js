import React from 'react'

import Navbar from './components/Navbar.js'
import HomePage from './pages/HomePage.js'
import ProjectPage from './pages/ProjectPage.js'
import NotFound from './pages/NotFound.js'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import useFetchCollection from './hooks/useFetchCollection.js'
export const SoftwareProjectsContext = React.createContext({})

function App() {

  const { data: projects, error, isPending } = useFetchCollection('softwareprojects')


  return (
    <Router>
      <SoftwareProjectsContext.Provider value={{projects, error, isPending}}>
      <div className="App">
        <div className="pages">
          <Switch>
            <Route exact path="/">
              <Navbar animate={true}/>
              <HomePage />
            </Route>
            <Route exact path="/projects/:id">
              <Navbar animate={false}/>
              <ProjectPage />
            </Route>
            <Route path="*">
              <Navbar animate={false}/>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
      </SoftwareProjectsContext.Provider>
    </Router>
  );
}

export default App;