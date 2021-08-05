import React, { useState } from 'react'
import axios from 'axios';
import './styles/style.css';
import { navigate } from '@reach/router';
import { useEffect} from 'react'
import {

    FormControl,
    InputLabel,
    OutlinedInput,
    Button
} from '@material-ui/core';
const AuthorForm= (props) => {
    //keep track of what is being typed via useState hook
    const { type, initialName, onSubmitProp, name_error } = props;
    const [name, setName] = useState(initialName); 
    const [error, setError]= useState("");
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/allAuthors')
            .then(res=>{
                setAuthors(res.data);
                setLoaded(true);
                setAuthors(authors.filter(auhtor => auhtor._id === props.id));
            });
    },[]);
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        if(validateName(name)){
            onSubmitProp({name});
            setName("");
            navigate("/");
        }
       
        //to empty the input fields after the submit button is pressed
       
    }
    const validateName=(name)=>{
        setName(name);
        if(name===""){
            setError("Error: name must not be empty");
            return false;

        }
        else if(name.length<3){
            setError("Error: name must be at least 3 characters")
            return false;
        }
        else{
            setError("")
            return true;
        }
        
    }
    //onChange to update firstName and lastName
    return (
        <>
        {name_error.map((err, index) => <p className="error" key={index}>{err}</p>)}
        <h1>Favorite authors</h1>
        <a href="/">Home</a>
        {type !==""?
        <p>Add a new Author:</p>
    :<p>Edit this Author</p>}
        <form onSubmit={onSubmitHandler}>
            <br></br>
                <FormControl variant="outlined">
                    <InputLabel>Name</InputLabel>
                    <OutlinedInput type="text" onChange={(e)=>validateName(e.target.value)} value={name}/>
                    <p className="error">{error}</p>
                </FormControl>
                <br></br>
                <br></br>
                <Button type="submit" variant="contained" color="primary">
                    submit
                </Button>
            </form>
            <Button variant="contained" onClick={(e)=>navigate("/")}>Cancel</Button>
        </>



    )
}
export default AuthorForm;