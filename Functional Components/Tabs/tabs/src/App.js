import './App.css';
import TabsComponent from './components/TabsComponent';
import React , { useState } from 'react';

function App() { 
  const alltabs=["Tab1 Content is showing here!", "Tab2 Content is showing here!", "Tab3 Content is showing here!", "Tab4 Content is showing here!", "Tab5 Content is showing here!"];
  const [allTabs, setAllTabs] = useState(alltabs);

  return (
    <div className="App">
      <TabsComponent tabs={allTabs}/>
    </div>
  );
}

export default App;
