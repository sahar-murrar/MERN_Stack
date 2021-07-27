import React from 'react'

const People = (props) => {
    return (
        <div>
            {props.error!==''?<p> {props.error}</p>:
            <p>Person Name: {props.people.name}, height: {props.people.height}, mass: {props.people.mass}, hair color {props.people.hair_color} and skin color: {props.people.skin_color}</p>
        }
            
        </div>
    )
}

export default People
