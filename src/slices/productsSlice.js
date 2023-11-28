import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// createSlice({
//     name: '',
//     initialState: '',
//     reducers: '',
//     extraReducers: ''
// })

const productsSlice = createSlice({
    name: 'productList',
    initialState: {
        status: 'idle',
        products: []
    },
    reducers: {
        // fetchProducts: (state, action) => {
        //     state = action.payload
        // }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductThunkAction.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchProductThunkAction.fulfilled, (state, action) => {
                state.status = 'idle'
                state.products = action.payload
            })
    }
})

/*
    createAsyncThunk(type, payload) 
        => return thunk action 
            => status:
                1. pending
                2. fulfilled
                3. rejected
 */
export const fetchProductThunkAction = createAsyncThunk('productList/fetchProductThunkAction', async () => {
    let productListRes = await fetch('https://jsonserver-vercel-api.vercel.app/products')
    let data = await productListRes.json()
    return data;
})

export default productsSlice;