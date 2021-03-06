import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import "./app.scss";

import {
  selectIsOpenModalStart,
  selectIsOpenModalKeyboard,
  toggleModalKeyboard,
  toggleModalFinish,
  selectIsOpenModalFinish } from './store/modalSlice';
import { ModalStart } from './components/modals/ModalStart';
import { Field } from './components/field/Field';
import { ModalKeyboard } from './components/modals/ModalKeyboard';
import { ModalFinish } from './components/modals/ModalFinish';

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
  selectArticleLength,
  getSpeed,
  getAccuracy,
 } from './store/fieldSlice';

export const App = () => {
  const isOpenModalStart = useSelector(selectIsOpenModalStart);
  const letters = useSelector(selectArticle);
  const currentLetter = useSelector(selectCurrentLetter);
  const currentIndex = useSelector(selectCurrentIndex);
  const isRestart = useSelector(selectIsRestart);
  const isOpenModalKeyboard = useSelector(selectIsOpenModalKeyboard);
  const articleLength = useSelector(selectArticleLength);
  const isOpenModalFinish = useSelector(selectIsOpenModalFinish);

  const dispatch = useDispatch();

  const handleKeyDown = useCallback((e) => {
    const re = /\d|\w|[\.\$@\*\\\/\+\-\^\!\(\)\[\]\~\%\&\=\?\>\<\{\}\"\'\,\:\;\_\ ]/g;

    if(isOpenModalStart || isOpenModalKeyboard) {
      e.preventDefault()
      return
    } else {
      if(e.key === 'Shift' || e.key == 'Alt') {
        return
      } else if(!e.key.match(re)){
        dispatch(toggleModalKeyboard());
      } else {
        dispatch(setCurrentLetter(e.key));
      }
    }
    
  }, [isOpenModalStart, isOpenModalKeyboard])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpenModalStart]);

  useEffect(() => {
    dispatch(fetchArticle())
  },[isRestart]);

  useEffect(() => {
    
    if(letters && !isOpenModalStart && !isOpenModalKeyboard && !isOpenModalFinish) {
      const { letter, id } = letters[currentIndex];

      if(currentIndex+1 === articleLength) {
        dispatch(toggleModalFinish());
      }

      if(currentLetter[currentLetter.length - 1] === letter) {
        dispatch(setCurrentIndex());
        dispatch(setIsActive(currentIndex+1));
        dispatch(getSpeed())
        dispatch(getAccuracy());
      } else {
        dispatch(setIsError(id));
        dispatch(getSpeed())
        dispatch(getAccuracy());
      }
    }
  }, [currentLetter]);

  return (
    <div 
      className="app"
    >
        {isOpenModalStart && <ModalStart />}
        <Field />
        {isOpenModalKeyboard && <ModalKeyboard />}
        {isOpenModalFinish && <ModalFinish />}
    </div>
  );
}
