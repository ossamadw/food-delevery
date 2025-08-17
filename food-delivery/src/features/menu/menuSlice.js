import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchItems = createAsyncThunk("menu/fetchItems", async () => {
  const res = await fetch("/data/menu.json");
  const data = await res.json();  
  return data;
});
const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,

  reducers: {
    // to do
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        (state.isLoading = true), (state.error = null);
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message
      });
  },
});

export const selectAllItems = (state) => state.menu.items;
export const getItemsStatus = (state) => state.menu.isLoading;
export const getItemsError = (state) => state.menu.error;
export default menuSlice.reducer;
