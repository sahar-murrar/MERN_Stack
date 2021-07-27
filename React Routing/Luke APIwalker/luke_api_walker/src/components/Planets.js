import React from 'react'

const Planets = (props) => {
    return (
        <div>
            Planet Name: {props.planet.name}, rotation period: {props.planet.rotation_period}, orbital period: {props.planet.orbital_period}, diameter {props.planet.diameter} and climate: {props.planet.climate}
            
        </div>
    )
}

export default Planets
