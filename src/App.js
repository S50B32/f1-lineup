import React from 'react';
import './App.css';
import './media.css'
import Header from './components/Header';
import DriverContainer from './containers/DriverContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <DriverContainer />
    </div>
  );
}

export default App;