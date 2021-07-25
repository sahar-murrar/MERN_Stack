import React,{useState, useEffect } from 'react';

function App() {
  const [pokemon, setPokemon] = useState([]);
    const fetchPokemon=() => {
      fetch('https://pokeapi.co/api/v2/pokemon/?limit=807') //we added 807 in the url becuase it is required to return the 807 pokemons.
          .then(response => response.json())
          .then(response => setPokemon(response.results)) //we put .results because thae output from the response is an array called results from the website of the pokemon api.
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
