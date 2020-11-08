import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import HomePage from './pages/home'
import NavBar from './components/navbar'
import Footer from './components/footer'


function App() {

    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/" exact  component={ HomePage } />
          </Switch>
          <Footer />
        </div>
      </Router>
      )
}

export default App