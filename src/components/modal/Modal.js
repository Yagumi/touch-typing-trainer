import React from 'react';
import { useDispatch } from 'react-redux';

import './modal.scss';

import { toggleModal, setStartTime } from '../../store/modalSlice'


export const Modal = () => {
  const dispatch = useDispatch();
  
  const handleToggle = () => {
    dispatch(toggleModal());
    dispatch(setStartTime());
  }

  return (
    <div className="modal__wrapper">
      <section className="modal">
        <div className="modal__img"/>
        <h1 className="modal__title">Приготовься печатать. Поехали!</h1>
        <button
          className="modal__btn"
          onClick={handleToggle}
        >
          Начать печать
        </button>
      </section> 
    </div>
  )
}