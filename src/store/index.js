import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./slices/wishlist.slice.js";
import cartReducer from "./slices/cart.slice.js";

export const store = configureStore({
  reducer: { wishlist: wishlistReducer, cart: cartReducer },
  preloadedState: {
    wishlist: JSON.parse(localStorage.getItem("likes")) || undefined,
    cart: JSON.parse(localStorage.getItem("cart")) || undefined,
  },
});

store.subscribe(() => {
  // console.log(store.getState().wishlist);
});
