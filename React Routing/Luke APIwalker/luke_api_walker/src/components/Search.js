import React,{useState } from 'react';
import { navigate } from '@reach/router';
const Search = (props) => {
    const [selectedValue, setSelectedValue]=useState('planets');
    const [wantedID, setWantedID]=useState();
const submitHandle=(e)=>{
    e.preventDefault();
    navigate('/'+selectedValue+'/'+wantedID) //be careful the navigate path must be the same as the path we passed to the compnent below as a props.
}
   
    return (
        <div>
        <span>Search For: </span>
        <form onSubmit={(e)=>submitHandle(e)}>
        <select onChange={(e)=>setSelectedValue(e.target.value)}>
            <option value="planets">Planets</option>
            <option value="people">People</option>
        </select>
        <span>ID:</span>
        <input type="number" onChange={(e)=> setWantedID(e.target.value)} ></input>
        <button type="submit">Search</button>
        </form>
            
        </div>
    )
}

export default Search
