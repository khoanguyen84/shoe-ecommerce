import React from "react";

class Content extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            number: 1
        }
    }

    componentDidMount() {
        // console.log('Content Component Did mount');
        console.log(this.props);
    }
    componentDidUpdate() {
        console.log(`Content Component did update -${this.state.number}`);
    }
    componentWillUnmount() {
        console.log('Content Component will unmount')
    }

    handleIncreament = () => {
        this.setState({
            ...this.state,
            number: this.state.number + 1
        })
    }

    render() {
        return (
            <>
                <h1 style={{backgroundColor: this.props.bgColor, color: this.props.color}}>Content - {this.state.number}</h1>
                <button onClick={this.handleIncreament}>Increament</button>
            </>
        )
    }
}

export default Content