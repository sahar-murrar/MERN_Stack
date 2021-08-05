import React from 'react'
import axios from 'axios';
import { Button } from '@material-ui/core';
const DeleteButton= props => {
    const { authorId, successCallback } = props;
    const deleteAuthor = ()=> {
        axios.delete('http://localhost:8000/api/author/' + authorId)
            .then(res=>{
                successCallback();
            })
    }
   
    return (
        <Button variant="contained" color="secondary" onClick={deleteAuthor}>
            Delete
        </Button>
    )
}
export default DeleteButton;
