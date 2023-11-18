// 1. initState
export const initState = {
    blance: 0,
    amount: 0
}

// 3. reducer: là 1 hàm, có 2 param state, action
export const reducer = (state, action) => {
    switch (action.type) {
        case 'bank/deposit': {
            return {
                ...state,
                blance: state.blance + state.amount,
                amount: 0
            }
        }
        case 'bank/withdraw': {
            return {
                ...state,
                blance: state.blance - state.amount,
                amount: 0
            }
        }
        case 'bank/inputamount': {
            return {
                ...state,
                amount: Number(action.payload)
            }
        }
        default: {
            return state
        }
    }
}