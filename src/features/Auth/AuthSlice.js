import { createSlice } from '@reduxjs/toolkit';


const auth = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    user: {},
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logoutSuccess: (state, action) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

const { reducer, actions } = auth;
export const { loginSuccess, logoutSuccess } = actions;
export default reducer;
