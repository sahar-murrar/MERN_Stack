import React, { useState } from 'react'
import axios from 'axios';
import { useEffect} from 'react'
const CurrentStatusButtons = (props) => {
    const [player, setPlayer] = useState({});
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/players/' + props.playerId)
            .then(res => {
                setPlayer(res.data);
                setLoaded(true);
                console.log(player)
            })
    }, [props.playerId])
    //UPDATE the buttons color on the DOM
    const gameStatus =(status)=>{
        player[`game${props.gameId}`]=status
        var newPlayer= {...player}
        setPlayer(newPlayer)
        updatePlayer(player)

    }
    //UPDATE the buttons status on the database
    const updatePlayer=(player)=>{
        axios.put('http://localhost:8000/api/players/' + props.playerId, player)
        .then(res=>{
            
        })
    }
    return (
        <div>
          
            {loaded &&
            <div>
            <button style={{backgroundColor: player && player[`game${props.gameId}`] === "playing" ? "green" : ""}} 
            onClick={(e) => gameStatus("playing")}>
                Playing
            </button>

            <button style={{backgroundColor: player && player[`game${props.gameId}`] === "notplaying" ? "red" : ""}} 
            onClick={(e) => gameStatus("notplaying")}>
                Not Playing
            </button>

            <button style={{backgroundColor: player && player[`game${props.gameId}`] === "undecided" ? "yellow" : ""}} 
            onClick={(e) => gameStatus("undecided")}>
                Undecided
            </button>

            </div>
            }
            
            
        </div>
    )
}

export default CurrentStatusButtons
