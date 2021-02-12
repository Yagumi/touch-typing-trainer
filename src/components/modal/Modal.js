import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './modal.scss';

import { fetchArticle } from '../../store/modalSlice'


export const Modal = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchArticle());
  },[dispatch]);

  return (
    <div className="modal__wrapper">
      <section className="modal">
        <div className="modal__img"/>
        <h1 className="modal__title">Приготовься печатать. Поехали!</h1>
        <button className="modal__btn">Начать печать</button>
      </section> 
    </div>
  )
}