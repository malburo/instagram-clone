import { configureStore } from '@reduxjs/toolkit';
import authReducer from 'features/Auth/AuthSlice';
import postReducer from 'features/Post/PostSlice';
import profileReducer from 'features/Profile/ProfileSlice';
const rootReducer = {
  auth: authReducer,
  posts: postReducer,
  profile: profileReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
