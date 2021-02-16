import { configureStore } from '@reduxjs/toolkit';
import  modalSlice  from './modalSlice';
import fieldSlice from './fieldSlice';

export const store = configureStore({
  reducer: {
    modal: modalSlice,
    field: fieldSlice,
  },
});
