import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import profileApi from 'api/profileApi';

export const getProfile = createAsyncThunk(
  'profile/get',
  async (params, thunkAPI) => {
    const response = await profileApi.getProfile(params);
    return response.profile;
  }
);

const profileSlice = createSlice({
  name: 'profileSlice',
  initialState: {
    posts: [],
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
