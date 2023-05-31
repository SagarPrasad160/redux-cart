import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "showCart",
  initialState: false,
  reducers: {
    toggleCartDisplay(state, action) {
      if (state === true) {
        return false;
      }
      return true;
    },
  },
});

export const { toggleCartDisplay } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
