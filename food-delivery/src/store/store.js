import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../features/product/productSlice";
import CartReducer from "../features/cart/cartSlice";


export const store = configureStore({
    reducer : {
        products : ProductReducer,
        cart : CartReducer
    }
})