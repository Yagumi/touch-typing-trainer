import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOpen: true,
    startTime: null,
  },
  reducers: {
    toggleModal: (state, action) => {
      state.isOpen = !state.isOpen;
    },
    setStartTime: (state, action) => {
      state.startTime = Date.now();
    },
  },
})

const { actions, reducer } = modalSlice;

export const selectIsOpen = ({ modal }) => modal.isOpen;
export const selectStartTime = ({modal}) => modal.startTime;

export const { toggleModal, setStartTime } = actions;
export default reducer;
