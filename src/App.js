import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import "./app.scss";

import { selectIsOpen } from './store/modalSlice';
import { Modal } from './components/modal/Modal';
import { Field } from './components/field/Field';
import {
  fetchArticle,
  selectCurrentIndex,
  selectCurrentLetter,
  selectArticle,
  setCurrentIndex,
  setCurrentLetter,
  setIsActive,
  setIsError } from './store/fieldSlice';

export const App = () => {
  const isOpenModal = useSelector(selectIsOpen);
  const letters = useSelector(selectArticle);
  const currentLetter = useSelector(selectCurrentLetter);
  const currentIndex = useSelector(selectCurrentIndex);

  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if(e.key === 'Shift') {
        return
      } else {
        dispatch(setCurrentLetter(e.key));
      }
      
    });
  }, []);
  
  useEffect(() => {
    dispatch(fetchArticle())
  },[dispatch]);

  useEffect(() => {
    if(letters) {
      const { letter, id } = letters[currentIndex];
      if(currentLetter === letter) {
        // console.log('yes')
          dispatch(setCurrentIndex());
          dispatch(setIsActive(currentIndex+1))
      } else {
        // console.log('no')
        dispatch(setIsError(id))
      }
    }
    return 
  }, [currentLetter]);

  return (
    <div 
      className="app"
    >
        {isOpenModal && <Modal />}
        <Field />
    </div>
  );
}
