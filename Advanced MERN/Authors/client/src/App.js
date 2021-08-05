import {Router} from '@reach/router';
import React from 'react';
import './App.css';
import MainPage from './views/MainPage';
import axios from 'axios';
import { useEffect, useState } from 'react'
import EditComponent from './components/EditComponent';
import AuthorForm from './components/AuthorForm';
function App() {
  const [authors, setAuthors] = useState([]);
  const [error, setError]= useState([]);
  useEffect(()=>{
    axios.get('http://localhost:8000/api/allAuthors')
        .then(res=>{
            setAuthors(res.data);
            
        });
      },[authors]);
      
const createAuhtor = author => {
    axios.post('http://localhost:8000/api/createAuhtor', author)
        .then(res=>{
            setAuthors([...authors, res.data]);
        })
        .catch(err=>{
          const errorResponse = err.response.data.errors; // Get the errors from err.response.data
          const errorArr = []; // Define a temp error array to push the messages in
          for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
              errorArr.push(errorResponse[key].message)
          }
          // Set Errors
          setError(errorArr);
      })       
}

  return (
    <div className="App">
      <Router>
      <MainPage path="/"/>
        <AuthorForm path="/new" type="create" onSubmitProp={createAuhtor} initialName="" name_error={error} />
        <EditComponent path="/edit/:id"/>
      </Router>
    </div>
  );
}

export default App;
