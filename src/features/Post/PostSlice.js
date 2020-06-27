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
    like: (state, action) => {
      const post = state.find(item => item._id === action.payload.postId);
      console.log(action);
      post.likes.push(action.payload);
    },
    unlike: (state, action) => {
      console.log(action);
      let post = state.find(item => item._id === action.payload.postId);
      let index = post.likes.findIndex(item => {
        return (
          item.userId === action.payload.userId &&
          item.postId === action.payload.postId
        );
      });
      post.likes.splice(index, 1);
    },
  },
});

const { reducer, actions } = postStore;
export const { setPost, createPost, deletePost, like, unlike } = actions;
export default reducer;
