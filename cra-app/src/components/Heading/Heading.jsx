import React from "react";

function Heading(props) {
    return (
        <h1 style={{ color: props.color, backgroundColor: props.backgroundColor }} 
            className='display-3 fw-bolder'>{props.children}</h1>
    )
}

export default Heading;