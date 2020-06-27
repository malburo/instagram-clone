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
      post.likes.push(action.payload);
    },
    unlike: (state, action) => {
      const post = state.find(item => item._id === action.payload.postId);
      const index = post.likes.findIndex(item => {
        return (
          item.userId === action.payload.userId &&
          item.postId === action.payload.postId
        );
      });
      post.likes.splice(index, 1);
    },
    setComment: (state, action) => {
      const post = state.find(item => item._id === action.payload.postId);
      post.comments.push(action.payload);
    },
  },
});

const { reducer, actions } = postStore;
export const {
  setPost,
  createPost,
  deletePost,
  like,
  unlike,
  setComment,
} = actions;
export default reducer;
