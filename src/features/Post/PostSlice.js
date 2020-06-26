import { createSlice } from '@reduxjs/toolkit';

const postStore = createSlice({
  name: 'postStore',
  initialState: [],
  reducers: {
    setPost: (state, action) => {
      return (state = action.payload);
    },
    createPost: (state, action) => {
      state.unshift(action.payload);
    },
    deletePost: (state, action) => {
      return state.filter(state => {
        return state._id !== action.payload;
      });
    },
  },
});

const { reducer, actions } = postStore;
export const { setPost, createPost, deletePost } = actions;
export default reducer;
