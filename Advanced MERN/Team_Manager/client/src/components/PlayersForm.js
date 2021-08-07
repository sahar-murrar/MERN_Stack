import React, { useState } from 'react'
import {

    FormControl,
    InputLabel,
    OutlinedInput,
    Button
} from '@material-ui/core';
const PlayersForm = (props) => {
    const {onSubmitProp, name_error}= props;
    const [name, setName] = useState("");
    const [position, setPosition] = useState(""); 
    const [error, setError]= useState(" ");
    var game1="undecided"
    var game2= "undecided"
    var game3= "undecided"
    
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        if(validateName(name)){
            onSubmitProp({name, position, game1, game2, game3});
            setName("");
        }
       
       
    }
    const validateName=(name)=>{
        setName(name);
        if(name===""){
            setError("Error: name must not be empty");
            return false;

        }
        else if(name.length<2){
            setError("Error: name must be at least 2 characters")
            return false;
        }
        else{
            setError("")
            return true;
        }
        
    }
    return (
        <>
        <h1>Add Player</h1>
        {name_error.map((err, index) => <p className="error" key={index}>{err}</p>)}
       
        <form onSubmit={onSubmitHandler}>
            <br></br>
                <FormControl variant="outlined">
                    <InputLabel>Name</InputLabel>
                    <OutlinedInput type="text" onChange={(e)=>validateName(e.target.value)} value={name}/>
                    <p className="error">{error}</p>
                </FormControl>
                <br></br>
                <br></br>
                <FormControl variant="outlined">
                    <InputLabel>Preferred Position</InputLabel>
                    <OutlinedInput type="text" onChange={(e)=>setPosition(e.target.value)} value={position}/>
                </FormControl>
                <br></br>
                <br></br>
                {error ===""?
                    <Button type="submit" variant="contained" color="primary">
                    Add
                    </Button>
                :
                    <Button type="submit" variant="contained" color="primary" disabled>
                        Add
                    </Button>
                }
                
            </form>
        </>
    )
}

export default PlayersForm
