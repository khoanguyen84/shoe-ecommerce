// 2. action là 1 object
//    action creator là 1 hàm => return object
export const inputAmount = (payload) => {
    return {
        type: 'bank/inputamount',
        payload: payload
    }
}
export const deposit = () => {
    return {
        type: 'bank/deposit'
    }
}
export const withDraw = () => {
    return {
        type: 'bank/withdraw'
    }
}