import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <div className="App">
            <PersonCard firstname={"Sahar"} lastname={"Murrar"} age={22} haircolor={"brown"}/>
            <PersonCard firstname={"Sireen"} lastname={"Murrar"} age={21} haircolor={"brown"}/>
            <PersonCard firstname={"Diana"} lastname={"Murrar"} age={19} haircolor={"black"}/>
            <PersonCard firstname={"Nadia"} lastname={"Murrar"} age={30} haircolor={"brown"}/>
        </div>
    </div>
  );
}

export default App;
