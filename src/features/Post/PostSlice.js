import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import postsApi from 'api/postsApi';

export const getPostByLimit = createAsyncThunk(
  'posts/get',
  async (params, thunkAPI) => {
    const response = await postsApi.get(params);
    return response.data;
  }
);
export const getPostScroll = createAsyncThunk(
  'posts/getPostScroll',
  async (params, thunkAPI) => {
    const response = await postsApi.get(params);
    return response.data.posts;
  }
);
export const createPost = createAsyncThunk(
  'posts/createPost',
  async (params, thunkAPI) => {
    const response = await postsApi.createPost(params);
    return response.data.newPost;
  }
);
export const reaction = createAsyncThunk(
  'posts/reaction',
  async (params, thunkAPI) => {
    const response = await postsApi.reaction(params);
    return response.data.reaction;
  }
);
export const comment = createAsyncThunk(
  'posts/comment',
  async (params, thunkAPI) => {
    const response = await postsApi.comment(params);
    return response.data.newComment;
  }
);
const postSlice = createSlice({
  name: 'posts',
  initialState: {
    postList: [],
    totalPost: 0,
  },
  reducers: {},
  extraReducers: {
    [getPostByLimit.fulfilled]: (state, action) => {
      state.totalPost = action.payload.totalPost;
      state.postList = action.payload.posts;
    },
    [getPostScroll.fulfilled]: (state, action) => {
      state.postList.push(...action.payload);
    },
    [createPost.fulfilled]: (state, action) => {
      state.postList.unshift(action.payload);
    },
    [reaction.fulfilled]: (state, action) => {
      console.log(state);
      const post = state.postList.find(
        item => item._id === action.payload.postId
      );
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
      const post = state.postList.find(item => {
        return item._id === action.payload.postId;
      });
      post.comments.push(action.payload);
    },
  },
});

const { reducer: postReducer } = postSlice;
export default postReducer;
