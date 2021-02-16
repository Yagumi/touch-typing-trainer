import React from 'react';
import { useDispatch } from 'react-redux';

import rocket from '../../static/img/rocket.png';

import { toggleModalStart } from '../../store/modalSlice';
import { setStartTime } from '../../store/fieldSlice';
import { Modal } from './Modal';

export const ModalStart = () => {
  const dispatch = useDispatch();
  
  const handleToggle = () => {
    dispatch(toggleModalStart());
    dispatch(setStartTime());
  }

  return (
    <Modal
      imgUrl={rocket}
      imgAlt='Ракета' 
      title="Приготовься печатать. Поехали!"
      handleToggle={handleToggle}
      buttonText="Начать печать"
    />
  )
}
