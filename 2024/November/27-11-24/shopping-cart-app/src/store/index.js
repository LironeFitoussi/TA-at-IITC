import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slices/cartSlice.js'

export const store = configureStore({
    reducer: {
        cart: cartReducer
    },
});