import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authApi from 'api/authApi';
import profileApi from 'api/profileApi';
import accountApi from 'api/accountApi';

export const getMe = createAsyncThunk('user/getMe', async params => {
  const response = await authApi.getMe();
  return response.data.currentUser;
});

export const login = createAsyncThunk(
  'user/login',
  async (params, thunkAPI) => {
    try {
      const response = await authApi.login(params);
      const { access_token } = response.data;
      localStorage.setItem('access_token', access_token);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);
export const register = createAsyncThunk(
  'user/register',
  async (params, thunkAPI) => {
    try {
      const response = await authApi.register(params);
      const { access_token } = response.data;
      localStorage.setItem('access_token', access_token);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);

export const changeAvatar = createAsyncThunk(
  'user/changeAvatar',
  async (params, thunkAPI) => {
    const response = await profileApi.changeAvatar(params);
    return response.data.profilePictureUrl;
  }
);

export const editProfile = createAsyncThunk(
  'user/editProfile',
  async (params, thunkAPI) => {
    const response = await accountApi.editProfile(params);
    return response.data.user;
  }
);
export const changePassword = createAsyncThunk(
  'user/changePassword',
  async (params, thunkAPI) => {
    const response = await accountApi.changePassword(params);

    const { access_token } = response.data;
    localStorage.setItem('access_token', access_token);
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
    [editProfile.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

const { reducer: userReducer, actions } = userSlice;
export const { logout } = actions;
export default userReducer;
