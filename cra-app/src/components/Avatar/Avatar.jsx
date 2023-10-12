import React from "react";

function Avatar(props){
    return (
        <img className="img-fluid rounded-start" src={props.avatarURL} alt="" />
    )
}

export default Avatar;