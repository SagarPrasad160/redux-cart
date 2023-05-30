import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    showCart: false,
  },
  reducers: {
    addToCart(state, action) {
      console.log("add to cart", action.payload);
      // check if item already exist in cart
      const isExists = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      console.log(isExists);
      if (isExists >= 0) {
        // increase the quantity
        state.items[isExists].quantity++;
      } else {
        // add the new item to cart
        const item = action.payload;
        item.quantity = 1;
        console.log(item);
        state.items.push(item);
      }
    },
    removeFromCart(state, action) {
      const itemIdx = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      // check if the quantity of the item is greater than 1
      if (state.items[itemIdx].quantity > 1) {
        state.items[itemIdx].quantity--;
      } else if (state.items[itemIdx].quantity === 1) {
        // remove the item
        state.items.splice(itemIdx, 1);
      }
    },
    toggleCartDisplay(state, action) {
      state.showCart = !state.showCart;
    },
  },
});

export const { addToCart, removeFromCart, toggleCartDisplay } =
  cartSlice.actions;
export const cartReducer = cartSlice.reducer;
