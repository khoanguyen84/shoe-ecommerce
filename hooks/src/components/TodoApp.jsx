import React, { useReducer } from "react";
import { initState, reducer } from "../reducer/reducer";

// useState
// 1. action 
// 2. update State


// useReducer
// 1. initState = khởi tạo dữ liệu (bất kể các kiểu dữ liệu)
// 2. actions = hành động
// 3. reducer = là 1 hàm
// 4. dispatch = là 1 hàm, kích hoạt hành động

function TodoApp(){
    const [state, dispatch] = useReducer(reducer, initState)
    console.log(state);
    return (
        <></>
    )
}

export default TodoApp;