import React from "react";
import Control from "./Control";
import Paragraph from "./Paragraph";
import { type } from "@testing-library/user-event/dist/type";

function Form() {
    return (
        <div>
            <form>
                <Control type='text' label='Email' />
                <Control type='password' label='Password' />
                <Control type='checkbox' label='Hobby'/>
                <Paragraph>
                    Veniam veniam ex incididunt proident.
                </Paragraph>
                <Button type='button'>Register</Button>
                <Button href='https://google.com'>Go to Google</Button>
            </form>
        </div>
    )
}


function Button(props){
    const handleClick = () => console.log(props.children)
    if(props.type == 'button'){
        return (
            <button type="button" className="btn btn-dark"
                onClick={handleClick}
            >{props.children}</button>
        )
    }
    if(props.href){
        return (
            <a className="btn btn-link" href={props.href}>{props.children}</a>
        )
    }
    
}

export default Form;