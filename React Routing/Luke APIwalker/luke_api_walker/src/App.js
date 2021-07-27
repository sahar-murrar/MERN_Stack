import {Router } from '@reach/router';
import './App.css';
import People from './components/People';
import Planets from './components/Planets';
import Search from './components/Search';
import React from 'react';

function App() {
  return (
    <div className="App">
     <Search />
      <Router>
        <People path='/people/:wantedID' />
        <Planets path='/planets/:wantedID' />
      </Router>
          
    </div>
  );
}

export default App;
