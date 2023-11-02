import { useEffect } from "react"
import { useMyReducer } from "./useMyReducer"

const initState = {
    isLoading: false,
    data: [],
    error: ''
}

// actions
const API_REQUEST = 'Fetch/API_REQUEST'
const API_SUCCESS = 'Fetch/API_SUCCESS'
const API_ERROR = 'Fetch/API_ERROR'

// action creators
const fetchAPIRequest = () => {
    return {
        type: API_REQUEST
    }
}

const fetchAPISuccess = (payload) => {
    return {
        type: API_SUCCESS,
        payload
    }
}

const fetchAPIError = (payload) => {
    return {
        type: API_ERROR,
        payload
    }
}
const apiReducer = (state, action) => {
    switch (action.type) {
        case API_REQUEST: {
            return {
                ...state,
                isLoading: true,
                data: [],
                error: ''
            }
        }
        case API_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                data: action.payload,
                error: ''
            }
        }
        case API_ERROR: {
            return {
                ...state,
                isLoading: false,
                data: [],
                error: action.payload
            }
        }
        default: {
            return state
        }

    }
}
export const useFetch = (url) => {
    const [state, dispatch] = useMyReducer(apiReducer, initState)

    useEffect(() => {
        {
            try {
                dispatch(fetchAPIRequest())
                async function getData() {
                    let res = await fetch(url)
                    let data = await res.json()
                    dispatch(fetchAPISuccess(data))
                }

                getData()
            } catch (error) {
                dispatch(fetchAPIError(error.message))
            }
        }
    }, [url])

    return { ...state }
}