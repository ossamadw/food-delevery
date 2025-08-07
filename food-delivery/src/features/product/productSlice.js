import { createSlice } from "@reduxjs/toolkit";
import { foodItems } from "../../data/productData";

const initialState = {
  products: foodItems,
};

const productSlice = createSlice({
    name : "product",
    initialState,

    reducers : {
        // to do
    }

})

export const selectAllProducts = (state) => state.products.products;
export default productSlice.reducer