import { createSlice } from "@reduxjs/toolkit";

const tweetSlice = createSlice({
  name: "tweet",
  initialState: null,
  reducers: {
    setTweets(state, action) {
      return action.payload;
    },
    createTweet(state, action) {
      state.push(action.payload);
    },
    deleteTweet(state, action) {
      return;
    },
  },
});

const { actions, reducer } = tweetSlice;
export const { createTweet, deleteTweet, setTweets } = actions;
export default reducer;
