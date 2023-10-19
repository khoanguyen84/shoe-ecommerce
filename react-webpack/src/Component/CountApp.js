import React from "react";

class CountApp extends React.Component{
    constructor(){
        super(props)
        this.state = {
            count : 0
        }
    }

    render(){
        return (
            <h1>{this.state.count}</h1>
        )
    }
}

export default CountApp;