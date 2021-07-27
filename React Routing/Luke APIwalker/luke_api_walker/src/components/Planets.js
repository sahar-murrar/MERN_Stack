import React,{useState, useEffect } from 'react';
import axios from 'axios';
const Planets = (props) => {
    const [planet, setPlanet]=useState("");
    const [error, setError]=useState("");
    useEffect(()=>{
        axios.get('https://swapi.dev/api/planets/'+props.wantedID)
            .then(response=>{setPlanet(response.data)
                console.log(response.data)
                setError("")
            })
            .catch(error => setError("These aren't the droids you're looking for"))
    }, [props.wantedID]); 
    return (
        <div>
            {error?<p> {error}</p>:
            <p>Planet Name: {planet.name}, rotation period: {planet.rotation_period}, orbital period: {planet.orbital_period}, diameter {planet.diameter} and climate: {planet.climate}</p>}
            
        </div>
    )
}

export default Planets
