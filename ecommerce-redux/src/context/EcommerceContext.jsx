import { createContext, useReducer } from "react";
import reducer, { initState } from "../reducer/reducer";

export const EcommerceContext = createContext()

const EcommnerceProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initState)
    return (
        <EcommerceContext.Provider value={{state, dispatch}}>
            {children}
        </EcommerceContext.Provider>
    )
}

export default EcommnerceProvider