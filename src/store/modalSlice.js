import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOpen: true,
    isOpenModalKeyboard: false,
    isOpenModalFinish: false,
  },
  reducers: {
    toggleModal: (state, action) => {
      state.isOpen = !state.isOpen;
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
export const selectIsOpenModalKeyboard = ({modal}) => modal.isOpenModalKeyboard;
export const selectIsOpenModalFinish = ({modal}) => modal.isOpenModalFinish

export const {
  toggleModal,
  toggleModalKeyboard,
  toggleModalFinish } = actions;

export default reducer;
