import React from "react";
import Content from "./Content";

class Count extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            toggle: false,
            selected: "Football",
            selectedList: [],
            hobbies: [
                "Football", "Swimming", "Walking"
            ]
        }
    }
    handleIncreament = () => {
        this.setState({
            ...this.state,
            count: this.state.count + 1
        })
    }
    handleChangeHobby = (e) => {
        this.setState({
            ...this.state,
            selected: e.target.value
        })
    }
    handleSelectHobbies = (e) => {
        let newList = [...this.state.selectedList]
        if (newList.includes(e.target.value)) {
            newList = newList.filter((item) => item != e.target.value)
        }
        else {
            newList = [...newList, e.target.value]
        }
        this.setState({
            ...this.state,
            selectedList: newList
        })
    }
    componentDidMount() {
        // console.log('Component Did mount');
    }

    componentDidUpdate() {
        // console.log('Component Did update');
    }
    render() {
        return (
            <>
                <button onClick={() => this.setState({ ...this.state, toggle: !this.state.toggle })}>Toggle Content</button>
                {
                    this.state.toggle && <Content data = {"Data send from props"}/>
                }
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleIncreament}>Incremenent</button>
                <ul style={{ listStyle: 'none' }}>
                    {
                        this.state.hobbies.map((hobby) => (
                            <li key={hobby}>
                                <label>
                                    <input type="radio" name="hobbies"
                                        value={hobby}
                                        checked={this.state.selected === hobby}
                                        onChange={this.handleChangeHobby}
                                    />
                                    {hobby}
                                </label>
                            </li>
                        ))
                    }
                </ul>

                <ul style={{ listStyle: 'none' }}>
                    {
                        this.state.hobbies.map((hobby) => (
                            <li key={hobby}>
                                <label>
                                    <input type="checkbox" name="hobbies"
                                        value={hobby}
                                        checked={this.state.selectedList.includes(hobby)}
                                        onChange={this.handleSelectHobbies.bind(this)}
                                    />
                                    {hobby}
                                </label>
                            </li>
                        ))
                    }
                </ul>
            </>
        )
    }
}

export default Count