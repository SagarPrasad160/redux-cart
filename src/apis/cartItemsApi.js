import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cartItemsApi = createApi({
  reducerPath: "cartItems",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://finance-tracker-fb52c-default-rtdb.firebaseio.com",
  }),
  endpoints(builder) {
    return {
      addItem: builder.mutation({
        invalidatesTags: ["Items"],
        query: (item) => {
          return {
            url: "/cart.json",
            method: "POST",
            body: JSON.stringify(item),
            headers: {
              "Content-Type": "application/json",
            },
          };
        },
      }),
      fetchItems: builder.query({
        providesTags: ["Items"],
        query: () => {
          return {
            url: "/cart.json",
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          };
        },
      }),
      removeItem: builder.mutation({
        invalidatesTags: ["Items"],
        query: (itemId) => {
          return {
            url: `/cart/${itemId}.json`,
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          };
        },
      }),
      updateItem: builder.mutation({
        invalidatesTags: ["Items"],
        query: ({ itemId, newItem }) => {
          return {
            url: `/cart/${itemId}.json`,
            method: "PUT",
            body: JSON.stringify(newItem),
            headers: {
              "Content-Type": "application/json",
            },
          };
        },
      }),
    };
  },
});

export const {
  useRemoveItemMutation,
  useAddItemMutation,
  useFetchItemsQuery,
  useUpdateItemMutation,
} = cartItemsApi;

export { cartItemsApi };
