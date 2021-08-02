import React from 'react';
import Main from './views/Main';
import './App.css';
import Details from './views/Details';
import {Router} from '@reach/router';
import Update from './views/Update';

function App() {
  return (
   
    <div className="App">
      <Main/>
      <Router>
        <Details path="/api/product/:id" />
        <Update path="/api/product/:id/edit"/>
      </Router>
     
    </div>
  );
 
}

export default App;
