import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userApi from 'api/userApi';

export const login = createAsyncThunk(
  'user/login',
  async (params, thunkAPI) => {
    const response = await userApi.login(params);

    // Save access token to local storage
    const { access_token } = response;
    localStorage.setItem('access_token', access_token);
  }
);

export const getMe = createAsyncThunk('user/getMe', async params => {
  const currentUser = await userApi.getMe();
  return currentUser;
});

export const changeAvatar = createAsyncThunk(
  'user/changeAvatar',
  async params => {
    const profilePictureUrl = await userApi.changeAvatar();
    return profilePictureUrl;
  }
);
const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: {},
  },
  reducers: {
    logout: (state, action) => {
      state.current = {};
      localStorage.removeItem('access_token');
    },
  },
  extraReducers: {
    [getMe.fulfilled]: (state, action) => {
      state.current = action.payload || {};
    },
    [getMe.rejected]: (state, action) => {
      state.current = {};
    },
    [changeAvatar.fulfilled]: (state, action) => {
      state.current.profilePictureUrl = action.payload;
    },
  },
});

const { reducer: userReducer } = userSlice;
export default userReducer;

// export const signIn = createAsyncThunk(
//   'user/login',
//   async (params, thunkAPI) => {
//     const response = await userApi.signIn(params);

//     // Save access token to storage
//     const { access_token, token_type, expired_at } = response;
//     const accessToken = `${token_type} ${access_token}`;
//     localStorage.setItem('access_token', accessToken);
//     localStorage.setItem('expired_at', expired_at); // expired_at is a timestamp
//   }
// );
// const user = createSlice({
//   name: 'user',
//   initialState: {
//     current: {},
//   },
//   reducers: {
//     loginSuccess: (state, action) => {
//       state.user = action.payload;
//       state.isAuthenticated = true;
//     },
//     logoutSuccess: (state, action) => {
//       localStorage.removeItem('jwtToken');
//     },
//     changeAvatar: (state, action) => {
//       state.user.profilePictureUrl = action.payload;
//     },
//     extraReducers: {
//       [getMe.fulfilled]: (state, action) => {
//         state.current = action.payload || {};
//       },
//       [getMe.rejected]: (state, action) => {
//         state.current = {};
//       },
//     },
//   },
// });

// const { reducer, actions } = user;
// export const { loginSuccess, logoutSuccess, changeAvatar } = actions;
// export default reducer;
//  Thunk API
