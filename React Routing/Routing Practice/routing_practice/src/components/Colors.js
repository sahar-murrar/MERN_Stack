import React from 'react'

const Colors = (props) => {
    return (
        <div style={{color:props.textColor, backgroundColor:props.backgroundColor}}>
            {props.param}
        </div>
    )
}

export default Colors
