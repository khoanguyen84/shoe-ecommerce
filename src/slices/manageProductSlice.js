import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const manageProductSlice = createSlice({
    name: 'manageProduct',
    initialState: {
        status: 'idle',
        data: {
            products: [],
            pagination: {
                totalPage: 0,
                currentPage: 0,
                pageSize:0
            }
        }
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductPaginationThunkAction.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchProductPaginationThunkAction.fulfilled, (state, action) => {
                state.status = 'idle'
                state.data = action.payload
            })
            .addCase(editProductThunkAction.pending, (state, action) => {

            })
            .addCase(editProductThunkAction.fulfilled, (state, action) => {
                state.data.products = state.data.products.map((p) => {
                    if(p.id === action.payload.id){
                        return action.payload
                    }
                    return p;
                })
            })
    }
})

export const fetchProductPaginationThunkAction = createAsyncThunk(
    'manageProduct/fetchProductPaginationThunkAction',
    async (paginate) => {
        const {_page, _limit} = paginate
        let productListRes = await fetch('https://jsonserver-vercel-api.vercel.app/products')
        let productList = await productListRes.json()
        let pagination = {
            totalPage : Math.ceil(Number(productList.length)/Number(_limit)),
            currentPage: _page,
            pageSize: _limit
        }

        let productPaginationRes = await fetch(`https://jsonserver-vercel-api.vercel.app/products?_page=${_page}&_limit=${_limit}`)
        let products = await productPaginationRes.json()
        let data = {
            products: products,
            pagination: pagination
        }
        return data
    }
)
export const editProductThunkAction = createAsyncThunk(
    'manageProduct/editProductThunkAction',
    async (product) => {
        let editProductRes = await fetch(`https://jsonserver-vercel-api.vercel.app/products/${product?.id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        let editProduct = await editProductRes.json()
        return editProduct
    }
)

export default manageProductSlice;