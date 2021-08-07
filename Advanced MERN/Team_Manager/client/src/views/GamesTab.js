import { Link } from '@reach/router'
import React from 'react'

const GamesTab = (props) => {
    return (
        <div>
           <h4>
               <Link to="/players/game/1">Game1</Link>
               |
               <Link to="/players/game/2">Game2</Link>
               |
               <Link to="/players/game/3">Game3</Link>
           </h4>
        </div>
    )
}

export default GamesTab
