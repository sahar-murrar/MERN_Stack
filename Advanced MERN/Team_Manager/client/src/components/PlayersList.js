import React, { useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import { useEffect} from 'react'
import {Link} from '@reach/router';
import DeleteButton from './DeleteButton';
const PlayersList = (props) => {
    const [players, setPlayers] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/players/list')
            .then(res=>{
                setPlayers(res.data);
                setLoaded(true);
            });
    },[]);
  
    const removeFromDom = (playerId) => {
        setPlayers(players.filter(player => player._id !== playerId));
        navigate("/players/list");
    }
  
    return (
        <div>
        
                <h3>
                <Link to="/players/list">List</Link>
                |
                <Link to="/players/addplayer">Add Player</Link>

                </h3>
                <br></br>
            
                    <table >
                    <tr>
                    <th>Team Name</th>
                    <th>Perferred Position</th>
                    <th>Actions</th>
                    </tr>
                    {players.map((player)=>{
                return <tr>
                    <td>{player.name}</td>
                    <td>{player.position}</td>
                    <td>
                    <DeleteButton playerId={player._id} playerName={player.name} successCallback={()=>removeFromDom(player._id)}/>
                    </td>
                    </tr>
                
                })}
                </table>


        </div>
    )
}

export default PlayersList
