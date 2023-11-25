import { configureStore } from "@reduxjs/toolkit";
import productsSlice from './../slices/productsSlice';
import filtersSlice from "../slices/filtersSlice";

const store = configureStore({
    reducer: {
        productList: productsSlice.reducer,
        filters: filtersSlice.reducer
    }
})

export default store;