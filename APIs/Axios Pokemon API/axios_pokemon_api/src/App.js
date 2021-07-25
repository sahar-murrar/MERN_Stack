import axios from 'axios';
import React,{useState, useEffect } from 'react';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const fetchPokemon=() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807').then(response=>{
      setPokemon(response.data.results) //we have to use .data.results with axios to get the 807 pokemons.
})
    
}

  return (
    <div className="App">
      <button onClick={fetchPokemon}>Fetch Pokemon</button>
      <ul>
        {
        pokemon.map((pok, index)=>{
            return (<li key={index}>{pok.name}</li>) //we have a 2keys for the json objects which are name and url.
        })
        }
    </ul>
    </div>
  );
}

export default App;
