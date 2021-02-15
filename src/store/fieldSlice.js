import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchArticle = createAsyncThunk(
  'modal/fetchArticle',
  async () => {
    const response = await fetch('https://baconipsum.com/api/?type=all-meat&paras=1&start-with-lorem=1');
    return response.json();
  }
)

const fieldSlice = createSlice({
  name: 'field',
  initialState: {
    isFetching: false,
    fetchError: null,
    article: null,
    currentLetter: null,
    currentIndex: 0,
    numberOfCorrectLetters: 0,
    numberOfErrors: 0,
  },
  reducers: {
    setIsActive: (state, { payload }) => {
      let item = state.article.find((_, index) => index === payload - 1)
      item.isActive = false;
      item.isError = false;

      state.article[payload].isActive = true;
      state.numberOfCorrectLetters = state.numberOfCorrectLetters + 1;
    },
    setIsError: (state, { payload }) => {
      let item = state.article.find(item => item.id === payload)
      item.isError = true;
      state.numberOfErrors = state.numberOfErrors + 1;
    },
    setCurrentLetter: (state, { payload }) => {
      state.currentLetter = payload;
    },
    setCurrentIndex: (state, { payload }) => {
      state.currentIndex = state.currentIndex + 1;
    },
  },
  extraReducers: {
    [fetchArticle.pending]: (state, action) => {
      state.isFetching = true;
    },
    [fetchArticle.fulfilled]: (state, { payload }) => {
      let id = -1;

      state.article = payload[0]
        .replace(/\s+/g, ' ')
        .split('')
        .map((item, index) => {
          id++;
          if(index === 0) {
            return {
              id,
              letter: item,
              isActive: true,
              isError: false
            }
          }
          id++;
          return {
            id,
            letter: item,
            isActive: false,
            isError: false
          }
        });
      state.isFetching = false;
    },
    [fetchArticle.rejected]: (state, { error }) => {
      state.fetchError = error.message;
      state.isFetching = false;
    }
  }
});

const { actions, reducer } = fieldSlice;

export const selectCurrentLetter = ({ field }) => field.currentLetter;
export const selectCurrentIndex = ({field }) => field.currentIndex;
export const selectArticle = ({field }) => field.article;

export const { setCurrentLetter, setCurrentIndex, setIsActive, setIsError } = actions;

export default reducer;