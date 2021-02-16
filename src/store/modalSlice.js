import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOpenStart: true,
    isOpenModalKeyboard: false,
    isOpenModalFinish: false,
  },
  reducers: {
    toggleModalStart: (state, action) => {
      state.isOpenStart = !state.isOpenStart;
    },
    toggleModalKeyboard(state, action) {
      state.isOpenModalKeyboard = !state.isOpenModalKeyboard;
    },
    toggleModalFinish(state, action) {
      state.isOpenModalFinish = !state.isOpenModalFinish;
    }
  },
})

const { actions, reducer } = modalSlice;

export const selectIsOpenModalStart = ({modal}) => modal.isOpenStart;
export const selectIsOpenModalKeyboard = ({modal}) => modal.isOpenModalKeyboard;
export const selectIsOpenModalFinish = ({modal}) => modal.isOpenModalFinish

export const {
  toggleModalStart,
  toggleModalKeyboard,
  toggleModalFinish } = actions;

export default reducer;
