import React, { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';

import "./app.scss";

import { selectIsOpen } from './store/modalSlice';
import { Modal } from './components/modal/Modal';
import { Field } from './components/field/Field';

export const App = () => {
  const isOpenModal = useSelector(selectIsOpen);
  const [currentLetter, setCurrentLetter] = useState()
  const nextStep = () => {

  }
  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      setCurrentLetter(e.key);
    });
  }, [])

  return (
    <div 
      className="app"
    >
        {isOpenModal && <Modal />}
        <Field />
        {currentLetter}
    </div>
  );
}
