import React from 'react';
import '@fortawesome/fontawesome-free/js/all';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './components/home';
import NavBar from './components/navbar.component';


function App() {

    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/" exact  component={ HomePage } />
          </Switch>
        </div>
      </Router>
      );
}

export default App;
