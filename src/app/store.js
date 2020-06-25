import { configureStore } from '@reduxjs/toolkit';
import authReducer from 'features/Auth/AuthSlice';
import postReducer from 'features/Post/PostSlice';
const rootReducer = {
  auth: authReducer,
  posts: postReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
