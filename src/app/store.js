import { configureStore } from '@reduxjs/toolkit';
import userReducer from 'app/userSlice';
import postReducer from 'features/Post/PostSlice';
import profileReducer from 'features/Profile/ProfileSlice';
const rootReducer = {
  user: userReducer,
  posts: postReducer,
  profile: profileReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
