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
    setReaction: (state, action) => {
      const post = state.find(item => item._id === action.payload.postId);
      if (action.payload.type === 'like') {
        post.reactions.push(action.payload);
        return;
      }
      const index = post.reactions.findIndex(item => {
        return (
          item.userId === action.payload.userId &&
          item.postId === action.payload.postId
        );
      });
      post.reactions.splice(index, 1);
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
  setReaction,
  setComment,
} = actions;
export default reducer;
