import { createSlice } from '@reduxjs/toolkit';

const auth = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    user: {},
    isCurrentUser: false,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logoutSuccess: (state, action) => {
      localStorage.removeItem('jwtToken');
    },
    checkCurrentUser: (state, action) => {
      state.isCurrentUser = action.payload;
    },
    changeAvatar: (state, action) => {
      state.user.profilePictureUrl = action.payload;
    },
  },
});

const { reducer, actions } = auth;
export const {
  loginSuccess,
  logoutSuccess,
  checkCurrentUser,
  changeAvatar,
} = actions;
export default reducer;
