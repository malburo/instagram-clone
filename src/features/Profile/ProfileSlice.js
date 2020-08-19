import { createSlice } from '@reduxjs/toolkit';

const profile = createSlice({
  name: 'profile',
  initialState: {
    info: {
      posts: [],
    },
    isCurrentUser: false,
  },
  reducers: {
    setProfile: (state, action) => {
      state.info = action.payload;
    },
    checkCurrentUser: (state, action) => {
      state.isCurrentUser = action.payload;
    },
  },
});

const { reducer, actions } = profile;
export const { setProfile, checkCurrentUser } = actions;
export default reducer;
