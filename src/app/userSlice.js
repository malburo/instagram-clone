import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authApi from 'api/authApi';
import profileApi from 'api/profileApi';

export const getMe = createAsyncThunk('user/getMe', async params => {
  const currentUser = await authApi.getMe();
  return currentUser;
});

export const login = createAsyncThunk(
  'user/login',
  async (params, thunkAPI) => {
    const response = await authApi.login(params);

    // Save access token to local storage
    const { access_token } = response;
    localStorage.setItem('access_token', access_token);
  }
);
export const register = createAsyncThunk(
  'user/register',
  async (params, thunkAPI) => {
    const response = await authApi.register(params);

    // Save access token to local storage
    const { access_token } = response;
    localStorage.setItem('access_token', access_token);
  }
);

export const changeAvatar = createAsyncThunk(
  'user/changeAvatar',
  async (params, thunkAPI) => {
    const response = await profileApi.changeAvatar(params);
    return response.profilePictureUrl;
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

const { reducer: userReducer, actions } = userSlice;
export const { logout } = actions;
export default userReducer;
