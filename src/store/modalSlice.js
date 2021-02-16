import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOpen: true,
    startTime: null,
    isOpenModalKeyboard: false,
    isOpenModalFinish: false,
  },
  reducers: {
    toggleModal: (state, action) => {
      state.isOpen = !state.isOpen;
    },
    setStartTime: (state, action) => {
      state.startTime = Date.now();
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

export const selectIsOpen = ({modal}) => modal.isOpen;
export const selectStartTime = ({modal}) => modal.startTime;
export const selectIsOpenModalKeyboard = ({modal}) => modal.isOpenModalKeyboard;
export const selectIsOpenModalFinish = ({modal}) => modal.isOpenModalFinish

export const {
  toggleModal,
  setStartTime,
  toggleModalKeyboard,
  toggleModalFinish } = actions;

export default reducer;
