import { useState } from "react"
// custom hook: là 1 hàm
// ràng buộc: bắt đầu bởi từ use
const useMyReducer = (reducer, initState) => {
    const [state, setState] = useState(initState)

    const dispatch = (action) => {
        let newState = reducer(state, action)
        setState(newState)
    }
    return [
        state,
        dispatch
    ]
}

export default useMyReducer;