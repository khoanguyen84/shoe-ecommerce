import React from "react";

class RadioGroup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: "Football",
            hobbies: ["Football", "Swiming", "Walking"]
        }
    }

    componentDidUpdate(){
        console.log(this.state.selected);
    }
    handleChangeHobby = (e) => {
        this.setState({
            ...this.state,
            selected: e.target.value
        })
    }
    render() {
        return (
            <>
                <h3>Please choice hobby</h3>
                {
                    this.state.hobbies.map((hobby) => (
                        <div key={hobby}>
                            <label>
                                <input type="radio" name="hobby" value={hobby}
                                    checked={this.state.selected === hobby}
                                    onChange={this.handleChangeHobby}
                                />
                                {hobby}
                            </label>
                        </div>
                    ))
                }
            </>
        )
    }
}

export default RadioGroup;