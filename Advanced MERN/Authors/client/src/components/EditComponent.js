import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import AuthorForm from './AuthorForm';
const EditComponent = (props) => {
    const {id} = props;
    const [error, setError]= useState([]);
    const [author, setAuthor] = useState({});
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' + id)
            .then(res => {
                setAuthor(res.data);
                setLoaded(true);
            })
    }, [id])


    const editAuthor = author => {
        axios.put('http://localhost:8000/api/author/' + id+'/edit', author)
            .then(res=>{
                navigate("/");
            })
            .catch(err=>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                    console.log("I'm here")
                }
                // Set Errors
                setError(errorArr);
            })     
            console.log(author)
    }

    return (
        <div>
            { loaded && 
            <AuthorForm  type="" onSubmitProp={editAuthor} initialName={author.name}  name_error={error}/>
            }
            
            
        </div>
    )
}

export default EditComponent
