import React from 'react';
import Main from './views/Main';
import './App.css';
import Details from './views/Details';
import {Router} from '@reach/router';

function App() {
  return (
   
    <div className="App">
      <Router>
        <Main path="/api/products/"/>
        <Details path="/api/product/:id" />
      </Router>
     
    </div>
  );
 
}

export default App;
