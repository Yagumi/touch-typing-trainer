import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOpen: true,
  },
  reducers: {
    toggleModal: (state, action) => {
      state.isOpen = !state.isOpen;
    },
  },
})

const { actions, reducer } = modalSlice;

export const selectIsOpen = ({ modal }) => modal.isOpen;

export const { toggleModal } = actions;
export default reducer;
