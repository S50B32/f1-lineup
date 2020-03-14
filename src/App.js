import React from 'react';
import './App.css';
import './media.css'
import Header from './hooks/Header';
import Home from './hooks/Home';
import Drivers from './hooks/Drivers';
import Calendar from './hooks/Calendar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LegacyDrivers from './hooks/LegacyDrivers';
import TestList from './hooks/TestList';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path='/f1-lineup' exact component={Home} />
          <Route path='/f1-lineup/drivers' component={Drivers} />
          <Route path='/f1-lineup/calendar' component={Calendar} />
          <Route path='/f1-lineup/legacy' component={LegacyDrivers} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;