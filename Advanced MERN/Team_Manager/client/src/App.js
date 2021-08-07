import { Router } from '@reach/router';
import React from 'react'
import './App.css';
import PlayersList from './components/PlayersList';
import './styles/style.css'
import Main from './views/Main';
import CreatePlayer from './components/CreatePlayer';
import PlayerStatus from './components/PlayerStatus';
function App() {
  return (
    <div className="App">
       <Main />
      <Router>
        <PlayersList path="/players/list" />
        <CreatePlayer path="/players/addplayer"/>
        <PlayerStatus path="players/game/:id"/>
      </Router>
     
    </div>
  );
}

export default App;
