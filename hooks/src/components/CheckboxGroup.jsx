import React from "react";

class CheckboxGroup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedList: ["Football", "Swiming"],
            hobbies: ["Football", "Swiming", "Walking"]
        }
    }

    componentDidUpdate(){
        console.log(this.state.selectedList);
    }
    handleChangeHobby = (e) => {
        let newSelectedList = [...this.state.selectedList]
        if(newSelectedList.includes(e.target.value)){
            newSelectedList = newSelectedList.filter((item) => item != e.target.value)
        }
        else{
            newSelectedList = [...newSelectedList, e.target.value]
        }
        this.setState({
            ...this.state,
            selectedList: newSelectedList
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
                                <input type="checkbox" name="hobby" value={hobby}
                                    checked={this.state.selectedList.includes(hobby)}
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

export default CheckboxGroup;