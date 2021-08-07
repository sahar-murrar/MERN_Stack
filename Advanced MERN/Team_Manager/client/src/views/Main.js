import React from 'react'
import {Link} from '@reach/router'
import '../styles/style.css'
const Main = () => {
    return (
        <h1 className="header">
            <Link to="/players/list">Manage Players</Link> 
            |
            <Link to="/players/game/1">Manage Player Status</Link> 
            <br></br>
           
        </h1>
    )
}

export default Main
