import React from 'react';
import { Router } from '@reach/router';
import './App.css';
import Home from './components/Home';
import ParamsComponent from './components/ParamsComponent';
import Colors from './components/Colors';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path='/home' />
        <ParamsComponent path='/:param'/>
        <Colors path='/:param/:textColor/:backgroundColor'/>
      </Router>
  
    </div>
  );
}

export default App;
