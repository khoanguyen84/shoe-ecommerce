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
            .addCase(addNewProductThunkAction.pending, (state, action) => {

            })
            .addCase(addNewProductThunkAction.fulfilled, (state, action) => {
                state.products.unshift(action.payload)
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
    data = data.sort(function (item_1, item_2) {
        return Number(item_2.id) - Number(item_1.id)
    })
    return data;
})

export const addNewProductThunkAction = createAsyncThunk('productList/addNewProductThunkAction', async (newProduct) => {
    let newProductRes = await fetch('https://jsonserver-vercel-api.vercel.app/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newProduct)
    })
    let data = await newProductRes.json()

    return data
})

export default productsSlice;