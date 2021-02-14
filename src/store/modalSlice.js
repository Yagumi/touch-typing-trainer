import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchArticle = createAsyncThunk(
  'modal/fetchArticle',
  async () => {
    const response = await fetch('https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1');
    return response.json();
  }
)

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOpen: true,
    isFetching: false,
    fetchError: null,
    article: '',
  },
  reducers: {
    toggleModal: (state, action) => {
      state.isOpen = !state.isOpen;
    }
  },
  extraReducers: {
    [fetchArticle.pending]: (state, action) => {
      state.isFetching = true;
    },
    [fetchArticle.fulfilled]: (state, { payload }) => {
      state.article = payload;
      state.isFetching = false;
    },
    [fetchArticle.rejected]: (state, { error }) => {
      state.fetchError = error.message;
      state.isFetching = false;
    }
  }
})

const { actions, reducer } = modalSlice;

export const selectIsOpen = ({ modal }) => modal.isOpen;
export const selectArticle = ({ modal }) => modal.article;

export const { toggleModal } = actions;
export default reducer;
