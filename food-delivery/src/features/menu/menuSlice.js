import { createSlice } from "@reduxjs/toolkit";
import { foodItems } from "../../data/productData";

const initialState = {
  menu: foodItems,
};

const menuSlice = createSlice({
    name : "menu",
    initialState,

    reducers : {
        // to do
    }

})

export const selectAllItmes = (state) => state.menu.menu;
export default menuSlice.reducer