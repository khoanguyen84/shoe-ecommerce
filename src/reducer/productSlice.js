const initState = []

const productReducer = (state = initState, action) => {
    switch (action.type) {
        case 'productList/fetchProducts': {
            return [...action.payload]
        }
        default: {
            return state
        }
    }
}

export default productReducer