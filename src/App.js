import React from 'react';
import logo from './logo.svg';
import './App.css';
import './media.css'
import DriverProfile from './components/DriverProfile';

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <div className='top'>
          <img src={logo} className="App-logo" alt="logo" /> <h1 className='h1-title'>REACT F1 Driver Line-up</h1>
        </div>
        <DriverProfile />
      </header>
    </div>
    </>
  );
}

export default App;
