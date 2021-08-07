import React from 'react'
import axios from 'axios';
import { Button } from '@material-ui/core';
const DeleteButton= props => {
    const { playerId, playerName, successCallback } = props;
    const deletePlayer = ()=> {
        if(window.confirm("Are you sure you want to delete " +playerName+ "?")){
            axios.delete('http://localhost:8000/api/players/' + playerId)
                .then(res=>{
                    
                        successCallback();
                    
                })
        }
    }
   
    return (
        <Button variant="contained" color="secondary" onClick={deletePlayer}>
            Delete
        </Button>
    )
}
export default DeleteButton;
