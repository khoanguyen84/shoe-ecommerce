import React from "react";
import { useMyReducer } from "../hooks/useMyReducer";

/*
  1. initState
  2. action
  2. reducer
  3. dispatch
*/
const initState = 0;
const UP_ACTION = 'up'
const DOWN_ACTION = 'down'

const reducer = (state, action) => {
  switch (action) {
    case UP_ACTION: {
      return state + 1
    }
    case DOWN_ACTION: {
      return state - 1
    }
    default:
      return state
  }
}

function CustomHook() {
    const [number, dispatch] = useMyReducer(reducer, initState)
    return (
        <div className="container">
            <h1>Number: {number}</h1>
            <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
            <button onClick={() => dispatch(UP_ACTION)} >Up</button>
        </div>
    );
}

export default CustomHook;