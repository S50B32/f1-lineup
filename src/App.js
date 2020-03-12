import React from 'react';
import './App.css';
import './media.css'
import Header from './hooks/Header';
import Home from './hooks/Home';
import Drivers from './hooks/Drivers';
import Calendar from './hooks/Calendar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navigation from './hooks/Navigation';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/drivers' component={Drivers} />
          <Route path='/calendar' component={Calendar} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;