import React, { useState } from 'react'
import axios from 'axios';
import { useEffect} from 'react'
import GamesTab from '../views/GamesTab'
import CurrentStatusButtons from './CurrentStatusButtons';

const PlayerStatus = (props) => {
    const [players, setPlayers] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/players/list')
            .then(res=>{
                setPlayers(res.data);
                setLoaded(true);
            });
    },[]);
    return (
        <div>
            <h2>Player Status - Game {props.id}</h2>
            <GamesTab />
            <br></br>
            {loaded && 

                <table >
                        <tr>
                        <th>Team Name</th>
                        <th>Actions</th>
                        </tr>
                        {players.map((player)=>{
                        return <tr>
                        <td>{player.name}</td>
                        <td>
                        <CurrentStatusButtons playerId={player._id} gameId={props.id} />
                        </td>
                        </tr>

                        })}
                </table>
            
            
            }
            
        </div>
    )
}

export default PlayerStatus
