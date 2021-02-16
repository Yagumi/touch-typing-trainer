import React from 'react';
import { useDispatch } from 'react-redux';

import globe from '../../static/img/globe.png';

import { Modal } from './Modal';
import { toggleModalKeyboard } from '../../store/modalSlice';

export const ModalKeyboard = () => {
  const dispatch = useDispatch();

  const handleToggle = () => dispatch(toggleModalKeyboard());

  return (
    <Modal
      imgUrl={globe}
      imgAlt="Глобус"
      title="Пожалуйста, смени раскладку клавиатуры на Английский язык."
      handleToggle={handleToggle}
      buttonText="Продолжить"
    />
  )
}
