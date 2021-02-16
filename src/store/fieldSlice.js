import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchArticle = createAsyncThunk(
  'modal/fetchArticle',
  async () => {
    const response = await fetch(process.env.REACT_APP_BASE_URL);
    return response.json();
  }
)

const fieldSlice = createSlice({
  name: 'field',
  initialState: {
    isFetching: false,
    fetchError: null,
    article: null,
    startTime: null,
    currentLetter: null,
    currentIndex: 0,
    numberOfCorrectLetters: 0,
    numberOfErrors: 0,
    isRestart: false,
    articleLength: 0,
    speed: '0',
    accuracy: '0',
  },
  reducers: {
    setStartTime: (state, action) => {
      state.startTime = Date.now();
    },
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
      state.currentLetter = `${state.currentIndex}${payload}`;
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
    getSpeed: (state, action) => {
      const timeLast =  Date.now() - state.startTime;
      const crm = state.numberOfCorrectLetters / ( timeLast / 1000 / 60 );
      const result = crm - (state.numberOfErrors /  (timeLast / 1000 / 60));

      if(result <= 0) state.speed = '0';
      else state.speed = result.toFixed();
      
    },
    getAccuracy: (state, action) => {
      const result = 100 - state.numberOfErrors * 100 / state.numberOfCorrectLetters;
      
      if(result <= 0) state.accuracy = '0';
      else state.accuracy = result.toFixed(2);
    }
  },
  extraReducers: {
    [fetchArticle.pending]: (state, action) => {
      state.isFetching = true;
    },
    [fetchArticle.fulfilled]: (state, { payload }) => {
      console.log(payload)
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
export const selectSpeed = ({field}) => field.speed;
export const selectAccuracy = ({field}) => field.accuracy;

export const {
  setStartTime,
  setCurrentLetter,
  setCurrentIndex,
  setIsActive,
  setIsError,
  restart,
  getSpeed,
  getAccuracy,
} = actions;

export default reducer;