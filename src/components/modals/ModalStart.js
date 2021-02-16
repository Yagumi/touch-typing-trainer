import React from 'react';
import { useDispatch } from 'react-redux';

import './modal.scss';

import { toggleModal, setStartTime } from '../../store/modalSlice';
import { Modal } from './Modal';

export const ModalStart = () => {
  const dispatch = useDispatch();
  
  const handleToggle = () => {
    dispatch(toggleModal());
    dispatch(setStartTime());
  }

  return (
    <Modal 
      title="Приготовься печатать. Поехали!"
      handleToggle={handleToggle}
      buttonText="Начать печать"
    />
  )
}
