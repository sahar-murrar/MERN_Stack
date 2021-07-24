import React , { useState } from 'react';
import './CSS/style.css';
export const TabsComponent = (props) => {
    const [tab1, setTab1]= useState("");
    const [tab2, setTab2]= useState("");
    const [tab3, setTab3]= useState("");

    const onClickHandler = (e, value, index) => {
    for(var i=0; i<props.tabs.length; i++){
        document.getElementById(i+1).style.background='lightgray';
        document.getElementById(i+1).style.color='black';
    }

       document.getElementById("content").innerHTML=value;
       e.target.style.background='black';
       e.target.style.color='white';

       if(index+1 ===1){   
        setTab1(value);

       }
       else if(index+1 ===2){
        setTab2(value);
       }
       else if(index+1 ===3){
        setTab3(value);
       }
    }
    return (
        <div>
            <div className="tabs">
            {
                 props.tabs.map( (value, index) => 
               
                 <button id={index+1} className="button" key={index} onClick={ (e) => onClickHandler(e, value, index) }>Tab{index+1}</button>
                
                )
               
            }
             </div>
            <h1 id="content"></h1>
        </div>
        
     
    )
};
export default TabsComponent;