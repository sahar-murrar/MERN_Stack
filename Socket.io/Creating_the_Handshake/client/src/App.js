import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './App.css';
import {Router} from '@reach/router';
import Chat from './components/Chat';

function App() {

  const [socket] = useState(() => io(':8000'));
  // const [messages, setmessages]=useState([]);
  
 
  useEffect(() => {
    // we need to set up all of our event listeners
    // in the useEffect callback function
    console.log('Is this running?');
    socket.on('Welcome Sahar Murrar', msg => console.log(msg));
    // setmessages(prevmessages=>{
    // return[msg,...prevmessages];
    // })
    // );
 
    // note that we're returning a callback function
    // this ensures that the underlying socket will be closed if App is unmounted
    // this would be more critical if we were creating the socket in a subcomponent
    return () => socket.disconnect(true);
  }, []);
  return (
    <div className="App">
      Hello world
 
    </div>
  );
}

export default App;
