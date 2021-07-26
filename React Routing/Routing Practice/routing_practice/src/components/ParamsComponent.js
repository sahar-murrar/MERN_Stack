import React from 'react'

const ParamsComponent = (props) => {
    return (
        <div>
            {isNaN(+props.param)?"The word is: "+props.param: "The number is: "+props.param}
           
        </div>
    )
}

export default ParamsComponent
