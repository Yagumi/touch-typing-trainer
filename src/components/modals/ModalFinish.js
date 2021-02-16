import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import timerImg from '../../static/img/timer.png';
import accuracyImg from '../../static/img/accuracy.png';
import cracker from '../../static/img/cracker.png';

import { Modal } from './Modal';
import { restart, selectSpeed, selectAccuracy } from '../../store/fieldSlice';
import { toggleModalFinish } from '../../store/modalSlice';

export const ModalFinish = () => {
  const speed = useSelector(selectSpeed);
  const accuracy = useSelector(selectAccuracy);

  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(restart());
    dispatch(toggleModalFinish())
  }

  return (
    <Modal
      imgUrl={cracker}
      imgAlt="Хлопушка"
      title="Твои результаты"
      handleToggle={handleToggle}
      buttonText="Попробовать еще раз"
    >
      <div>
        <div>
          <img  src={timerImg} alt="Таймер" />
          <span>Скорость</span>
          <span> {speed} зн./мин</span>
        </div>
        <div>
          <img src={accuracyImg} alt="Точность" />
          <span>Точность</span>
          <span> {accuracy} %</span>
        </div>
      </div>
    </Modal>
  )
}
