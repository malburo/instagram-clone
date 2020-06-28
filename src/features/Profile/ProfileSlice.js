import { createSlice } from '@reduxjs/toolkit';

const profile = createSlice({
  name: 'profile',
  initialState: {
    posts: [],
  },
  reducers: {
    setPosts: (state, action) => {
      return (state = action.payload);
    },
  },
});

const { reducer, actions } = profile;
export const { setPosts } = actions;
export default reducer;
