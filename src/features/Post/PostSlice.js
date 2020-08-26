import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import postsApi from 'api/postsApi';

export const getPosts = createAsyncThunk(
  'posts/get',
  async (params, thunkAPI) => {
    const response = await postsApi.get(params);
    return response.posts;
  }
);
export const createPost = createAsyncThunk(
  'posts/createPost',
  async (params, thunkAPI) => {
    const response = await postsApi.createPost(params);
    return response;
  }
);
export const reaction = createAsyncThunk(
  'posts/reaction',
  async (params, thunkAPI) => {
    const response = await postsApi.reaction(params);
    return response.reaction;
  }
);
export const comment = createAsyncThunk(
  'posts/comment',
  async (params, thunkAPI) => {
    const response = await postsApi.comment(params);
    return response;
  }
);
const postSlice = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {},
  extraReducers: {
    [getPosts.fulfilled]: (state, action) => {
      return (state = action.payload);
    },
    [createPost.fulfilled]: (state, action) => {
      state.unshift(action.payload);
    },
    [reaction.fulfilled]: (state, action) => {
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
    [comment.fulfilled]: (state, action) => {
      state.unshift(action.payload);
    },
  },
});

const { reducer: postReducer } = postSlice;
export default postReducer;
