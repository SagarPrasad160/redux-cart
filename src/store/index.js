import { configureStore } from "@reduxjs/toolkit";

import { addToCart, removeFromCart, toggleCartDisplay } from "./cartSlice";

import { cartReducer } from "./cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export { addToCart, removeFromCart, toggleCartDisplay };
