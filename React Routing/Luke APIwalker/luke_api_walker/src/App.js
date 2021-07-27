import { navigate, Router } from '@reach/router';
import React,{useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import People from './components/People';
import Planets from './components/Planets';

function App() {
  const [selectedValue, setSelectedValue]=useState('planets');
  const [wantedID, setWantedID]=useState();
  const [people, setPeople]=useState();
  const [planets, setPlanets]=useState();
  const [error, setError]=useState("");

  useEffect(() => {
    if(selectedValue==='people'){
      try{
        fetch('https://swapi.dev/api/'+selectedValue+'/'+wantedID)
        .then(response => response.json())
        .then(response => setPeople(response))
        .catch(err=>setError(err))
  
      }
      catch(error){
        setError(error)

      }
     
    }
    else if(selectedValue==='planets'){
      try{
          fetch('https://swapi.dev/api/'+selectedValue+'/'+wantedID)
              .then(response => response.json())
              .then(response=>setPlanets(response))
      }
      catch(error){
        setError(error)

      }
    }  
console.log(people);
console.log(planets);

}, [selectedValue,wantedID]);

const checkValue=()=>{
  if(selectedValue==='people'){
    navigate('/people/'+wantedID)
    
    }
    else if(selectedValue==='planets'){
      navigate('/planet/'+wantedID) //be careful the navigate path must be the same as the path we passed to the compnent below as a props.
    }
}


  return (
    <div className="App">
      <span>Search For: </span>
      <select onChange={(e)=>setSelectedValue(e.target.value)}>
        <option value="planets">Planets</option>
        <option value="people">People</option>
      </select>
      <span>ID:</span>
      <input type="number" onChange={(e)=> setWantedID(e.target.value)} ></input>
      <button onClick={checkValue}>Search</button>
      <h1>{error}</h1>
      <Router>
        <People path='/people/:wantedID' people={people} error={error}/>
        <Planets path='/planet/:wantedID' planet={planets}/>
      </Router>
          
    </div>
  );
}

export default App;
