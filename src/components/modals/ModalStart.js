import React from 'react';
import { useDispatch } from 'react-redux';

import './modal.scss';

import { toggleModal } from '../../store/modalSlice';
import { setStartTime } from '../../store/fieldSlice';
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
