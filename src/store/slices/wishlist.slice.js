import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  likes: [],
  count: 0,
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addLike: (state, action) => {
      state.likes.push(action.payload);
      state.count = state.likes.length;
      localStorage.setItem("likes", JSON.stringify(state));
    },
    removeLike: (state, action) => {
      state.likes = state?.likes?.filter(
        (item) => item.id !== action.payload.id
      );
      state.count = state?.likes?.length;
      localStorage.setItem("likes", JSON.stringify(state));
    },
  },
});

// Action creators are generated for each case reducer function
export const { addLike, removeLike } = wishlistSlice.actions;

export default wishlistSlice.reducer;
