import React, { useEffect, useCallback } from 'react';
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
  setIsError,
  selectIsRestart,
 } from './store/fieldSlice';

export const App = () => {
  const isOpenModal = useSelector(selectIsOpen);
  const letters = useSelector(selectArticle);
  const currentLetter = useSelector(selectCurrentLetter);
  const currentIndex = useSelector(selectCurrentIndex);
  const isRestart = useSelector(selectIsRestart);

  const dispatch = useDispatch();

  const handleKeyDown = useCallback((e) => {
    console.log(isOpenModal)
    if(isOpenModal) {
      e.preventDefault()
      return
    } else {
      if(e.key === 'Shift') {
        return
      } else {
        dispatch(setCurrentLetter(e.key));
      }
    }
    
  }, [isOpenModal])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpenModal]);

  useEffect(() => {
    dispatch(fetchArticle())
  },[isRestart]);

  useEffect(() => {
    if(letters && !isOpenModal) {
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
