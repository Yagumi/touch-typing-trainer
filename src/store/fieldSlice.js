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
    isRestart: false,
    articleLength: 0,
  },
  reducers: {
    setIsActive: (state, { payload }) => {
      if(payload === state.articleLength) return;

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
    restart: (state, action) => {
      state.article = null;
      state.currentLetter = null;
      state.currentIndex = 0;
      state.numberOfCorrectLetters = 0;
      state.numberOfErrors = 0;
      state.isRestart = !state.isRestart;
    },
  },
  extraReducers: {
    [fetchArticle.pending]: (state, action) => {
      state.isFetching = true;
    },
    [fetchArticle.fulfilled]: (state, { payload }) => {
      let id = -1;
      const articleReplaced = payload[0].replace(/\s+/g, ' ')
      state.article = articleReplaced
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

      state.articleLength = articleReplaced.length;
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
export const selectNumberOfCorrectLetters = ({field}) => field.numberOfCorrectLetters;
export const selectNumberOfErrors = ({field}) => field.numberOfErrors;
export const selectIsRestart = ({field}) => field.isRestart;
export const selectArticleLength = ({field}) => field.articleLength;


export const {
  setCurrentLetter,
  setCurrentIndex,
  setIsActive,
  setIsError,
  restart,
  calculateSpeed,
} = actions;

export default reducer;