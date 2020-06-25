import { configureStore } from '@reduxjs/toolkit';
import authReducer from 'features/Auth/AuthSlice';

const rootReducer = {
  auth: authReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
