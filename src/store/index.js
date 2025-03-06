import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./slices/wishlist.slice.js";

export const store = configureStore({
  reducer: { wishlist: wishlistReducer },
  preloadedState: {
    wishlist: JSON.parse(localStorage.getItem("likes")) || undefined,
  },
});

store.subscribe(() => {
  // console.log(store.getState().wishlist);
});
