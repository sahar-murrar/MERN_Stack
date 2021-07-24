import React from 'react'
import './CSS/BoxesStyle.css';

export const Box = (props) => {
    return (   
        <div id="allBoxes">
            {
                props.color.map( (value, index) => 
                <div key={index} className="box" style={{backgroundColor:value, width:props.width[index], height:props.height[index]}}> 
                </div>
                )
            }

           
        </div>

        
    )
}
