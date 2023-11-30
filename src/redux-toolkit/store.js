import { configureStore } from "@reduxjs/toolkit";
import productsSlice from './../slices/productsSlice';
import filtersSlice from "../slices/filtersSlice";
import cartSlice from "../slices/cartSlice";
import orderSlice from "../slices/orderSlice";

const store = configureStore({
    reducer: {
        productList: productsSlice.reducer,
        filters: filtersSlice.reducer,
        cart: cartSlice.reducer,
        orders: orderSlice.reducer
    }
})

export default store;