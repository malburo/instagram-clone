import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import profileApi from 'api/profileApi';

export const getProfile = createAsyncThunk(
  'profile/get',
  async (params, thunkAPI) => {
    try {
      const response = await profileApi.getProfile(params);
      return response.profile;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);

const profileSlice = createSlice({
  name: 'profileSlice',
  initialState: {
    posts: [],
    isCurrentUser: false,
  },
  reducers: {},
  extraReducers: {
    [getProfile.fulfilled]: (state, action) => {
      return (state = action.payload);
    },
  },
});

const { reducer: profileReducer } = profileSlice;
export default profileReducer;
