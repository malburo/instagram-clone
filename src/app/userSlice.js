import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authApi from 'api/authApi';
import profileApi from 'api/profileApi';
import accountApi from 'api/accountApi';

export const getMe = createAsyncThunk(
  'user/getMe',
  async (params, thunkAPI) => {
    try {
      const response = await authApi.getMe();
      return response.data.currentUser;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response);
    }
  });

export const login = createAsyncThunk(
  'user/login',
  async (params, thunkAPI) => {
    try {
      const response = await authApi.login(params);
      return response.data.access_token;
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
      return response.data.access_token;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);

export const changeAvatar = createAsyncThunk(
  'user/changeAvatar',
  async (params, thunkAPI) => {
    try {
      const response = await profileApi.changeAvatar(params);
      return response.data.profilePictureUrl;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);

export const editProfile = createAsyncThunk(
  'user/editProfile',
  async (params, thunkAPI) => {
    try {
      const response = await accountApi.editProfile(params);
      return response.data.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);
export const changePassword = createAsyncThunk(
  'user/changePassword',
  async (params, thunkAPI) => {
    try {
      const response = await accountApi.changePassword(params);
      return response.data.access_token;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);
const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: {},
    isFetching: false,
    isLogining: false,
    isRegistering: false,
    isAuth: !!localStorage.getItem('access_token'),
  },
  reducers: {
    logout: state => {
      state.isAuth = false;
      localStorage.removeItem('access_token');
    },
  },
  extraReducers: {
    [getMe.pending]: state => {
      state.isFetching = true;
    },
    [getMe.fulfilled]: (state, { payload }) => {
      state.current = payload;
      state.isFetching = false;
    },
    [getMe.rejected]: state => {
      state.isFetching = false;
    },

    [login.pending]: state => {
      state.isLogining = true;
    },
    [login.fulfilled]: (state, { payload }) => {
      localStorage.setItem('access_token', payload);
      state.isLogining = false;
    },
    [login.rejected]: state => {
      state.isLogining = false;
    },

    [register.pending]: state => {
      state.isRegistering = true;
    },
    [register.fulfilled]: (state, { payload }) => {
      localStorage.setItem('access_token', payload);
      state.isRegistering = false;
    },
    [register.rejected]: state => {
      state.isRegistering = false;
    },

    [changeAvatar.fulfilled]: (state, action) => {
      state.current.profilePictureUrl = action.payload;
    },
    [changePassword.fulfilled]: (state, { payload }) => {
      localStorage.setItem('access_token', payload);
    },
    [editProfile.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

const { reducer: userReducer, actions } = userSlice;
export const { logout } = actions;
export default userReducer;
