import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  count: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      state.cart.push(action.payload);
      state.count = state.cart.length;
      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeCart: (state, action) => {
      state.cart = state?.cart?.filter((item) => item.id !== action.payload.id);
      state.count = state?.cart?.length;
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCart, removeCart } = cartSlice.actions;

export default cartSlice.reducer;
