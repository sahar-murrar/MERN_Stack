import './App.css';
import { BoxForm } from './components/BoxForm';
import {Box} from './components/Box';
import {useState} from 'react';
import React from 'react';
function App() {
  const allColors=[];  
  const allHieghts=[];
  const allWidths=[];

  const [wantedColor, setWantedColor] = useState(allColors);
  const [wantedHieght, setWantedHieght] = useState(allHieghts);
  const [wantedWidth, setWantedWidth] = useState(allWidths);

  const GotAttributes = ( newcolor, height, width ) => {
        setWantedColor( wantedColor.concat(newcolor) ); //or use setWantedColor(...allColors, newcolor); and remove the parameter inside useStat in line 10 above
        setWantedWidth(wantedWidth.concat(width));
        setWantedHieght(wantedHieght.concat(height));

  }
  return (
    <div className="App">
      <BoxForm newAttributes={ GotAttributes } />
      <Box color={ wantedColor } width={wantedWidth} height={wantedHieght}/>
    </div>
  );
}

export default App;
