import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { toggleCartDisplay } from "./cartSlice";

import { cartReducer, cartSlice } from "./cartSlice";

import { cartItemsApi } from "../apis/cartItemsApi";

export const store = configureStore({
  reducer: {
    [cartSlice.name]: cartReducer,
    [cartItemsApi.reducerPath]: cartItemsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(cartItemsApi.middleware);
  },
});

setupListeners(store.dispatch);

export { toggleCartDisplay };
export {
  useFetchItemsQuery,
  useAddItemMutation,
  useRemoveItemMutation,
  useUpdateItemMutation,
} from "../apis/cartItemsApi";
