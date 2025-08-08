import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
   cartItems: [],

};

const cartSlice = createSlice({
  name: " cartItems",
  initialState,

  reducers: {
    addToCart(state, action) {
      const existingItem = state. cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
        toast.info(action.payload.name + '  quantity has been increased', { autoClose: 1000, className: '  w-2/3 md:w-full m-1' });
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
        toast.success(action.payload.name + ' added to cart', { autoClose: 1000, className: 'text-sm   w-2/3 md:w-full m-1' });
      }
    },
    increaseQuantity(state, action) {
      const item = state.cartItems.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1
      }
    },
    decreaseQuantity(state, action) {
      const item = state.cartItems.find((item) => item.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1
      }
    },
    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id)
    },
  
  },
});

export const selectCartItems = (state) => state.cart.cartItems;
export const selectIsAdded = (productId) => (state) =>
  state.cart.cartItems.some((item) => item.id === productId);


export const { addToCart, removeFromCart, decreaseQuantity, increaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
