import React from "react";

class Content extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount(){
        console.log('Component Content mounted');
    }

    componentWillUnmount(){
        console.log('Component Content unmouted');
    }

    render(){
        return (
            <div>
                <h1>{this.props.data}</h1>
            </div>
        )
    }
}

export default Content;