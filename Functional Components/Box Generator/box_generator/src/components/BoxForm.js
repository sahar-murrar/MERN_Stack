import React , { useState } from 'react';
import './CSS/FormStyle.css';
export const BoxForm = (props) => {
    const [color, setColor] = useState("");
    const[width, setWidth]= useState("");
    const[height, setHieght]=useState("");

    const addBox = (e, color, height, width) => {
        e.preventDefault();
        // console.log("box color is: "+color+" and the width is: "+width);
        props.newAttributes( color, height, width );
        setColor("");
        setWidth("");
        setHieght("");
    };
    return (
            <form className="form" onSubmit={(e, col)=> addBox(e, color, height, width) }>
                <div>
                    <label>Color: </label> 
                    <input type="text" onChange={ (e) => setColor(e.target.value) } value={color}/>
                    <label>width: </label> 
                    <input type="text" onChange={ (e) => setWidth(e.target.value) } value={width}/>
                    <label>Hieght: </label> 
                    <input type="text" onChange={ (e) => setHieght(e.target.value) } value={height}/>
                </div>
                <input type="submit" value="Add" />
            </form>
    )
}
