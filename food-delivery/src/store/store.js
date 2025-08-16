import { configureStore } from "@reduxjs/toolkit";
import MenuReducer from "../features/menu/menuSlice";
import CartReducer from "../features/cart/cartSlice";


export const store = configureStore({
    reducer : {
        menu : MenuReducer,
        cart : CartReducer
    }
})