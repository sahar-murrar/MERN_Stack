import React,{useState, useEffect } from 'react';
import axios from 'axios';
const People = (props) => {
    const [people, setPeople]=useState("");
    const [error, setError]=useState("");
    useEffect(()=>{
        axios.get('https://swapi.dev/api/people/'+props.wantedID)
        .then(response=>{setPeople(response.data)
            console.log(response.data)
            setError("")
        })

           
            .catch(error => setError("These aren't the droids you're looking for"))
    }, [props.wantedID]); 
    return (
        <div>
            {error?<p> {error}</p>:
            <p>Person Name: {people.name}, height: {people.height}, mass: {people.mass}, hair color {people.hair_color} and skin color: {people.skin_color}</p>
        }
            
        </div>
    )
}

export default People
