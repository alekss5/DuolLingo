import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: {
    feed: [],
   
  },
  reducers: {
    setFeed: (state, action) => {
      state.feed = action.payload;
    },
  },
});
export const selectFeed = (state) => state.feed.feed;

export const { setFeed } = feedSlice.actions;
export default feedSlice.reducer;
