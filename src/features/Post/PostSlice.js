import { createSlice } from '@reduxjs/toolkit';

const postStore = createSlice({
  name: 'postStore',
  initialState: [],
  reducers: {
    setBooks: (state, action) => {
      return (state = action.payload);
    },
    createBook: (state, action) => {
      state.push(action.payload);
    },
    deleteBook: (state, action) => {
      return state.filter(state => {
        return state._id !== action.payload;
      });
    },
  },
});

const { reducer, actions } = postStore;
export const { setBooks, createBook, deleteBook } = actions;
export default reducer;
