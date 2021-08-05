import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import AuthorsList from '../components/AuthorsList';
const MainPage =() => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/allAuthors')
            .then(res=>{
                setAuthors(res.data);
                setLoaded(true);
            });
    },[]);
    const removeFromDom = (auhtorId) => {
        setAuthors(authors.filter(auhtor => auhtor._id !== auhtorId));
        navigate("/");
    }

    return (
        <div>
            <h1>Favorite authors</h1>
           {loaded && <AuthorsList authors={authors} removeFromDom={removeFromDom}/>}
        </div>
    )
}
export default MainPage;