import { createSlice } from '@reduxjs/toolkit';

const profile = createSlice({
  name: 'profile',
  initialState: {
    posts: [],
    isCurrentUser: false,
    user: {
      profilePictureUrl: '',
      username: '',
    },
  },
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },
    setUser: (state, action) => {
      state.isCurrentUser = action.payload.isCurrentUser;
      state.user.profilePictureUrl = action.payload.profile.profilePictureUrl;
      state.user.username = action.payload.profile.username;
    },
  },
});

const { reducer, actions } = profile;
export const { setPosts, setUser } = actions;
export default reducer;
