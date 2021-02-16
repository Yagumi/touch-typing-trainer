import React from 'react'
import { useDispatch } from 'react-redux';

import timerImg from '../../static/img/timer.png';
import accuracyImg from '../../static/img/accuracy.png';


import { Modal } from './Modal';
import { restart } from '../../store/fieldSlice';
import { toggleModalFinish } from '../../store/modalSlice';

export const ModalFinish = () => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(restart());
    dispatch(toggleModalFinish())
  }

  return (
    <Modal
      title="Твои результаты"
      handleToggle={handleToggle}
      buttonText="Попробовать еще раз"
    >
      <div>
        <img src={timerImg} alt="Таймер" />
        <span>Скорость</span>
        <span>{150} зн./мин</span>
      </div>
      <div>
        <img src={accuracyImg} alt="Точность" />
        <span>Точность</span>
        <span>{100} %</span>
      </div>
    </Modal>
  )
}
